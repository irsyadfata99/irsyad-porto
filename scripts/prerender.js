// Injects a static, crawler-readable snapshot of the page content into
// dist/index.html after `vite build`. This does NOT replace the React app —
// browsers still load the JS bundle and React re-renders over this on mount
// (ReactDOM.createRoot().render() overwrites #root's children, so there is
// no hydration mismatch). This only exists so that bots, ATS parsers, and
// AI reviewers that fetch the HTML without executing JavaScript can read
// real text instead of an empty <div id="root"></div>.

import { readFileSync, writeFileSync } from "node:fs";
import { fileURLToPath } from "node:url";
import { dirname, resolve } from "node:path";
import {
  profile,
  stack,
  projects,
  experience,
  certificates,
  education,
} from "../src/data/content.js";

const __dirname = dirname(fileURLToPath(import.meta.url));
const distIndexPath = resolve(__dirname, "../dist/index.html");

const esc = (s = "") =>
  String(s)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;");

function renderStack() {
  return Object.entries(stack)
    .map(
      ([label, items]) =>
        `<li><strong>${esc(label)}:</strong> ${esc(items.join(", "))}</li>`
    )
    .join("\n");
}

function renderProjects() {
  return projects
    .map((p) => {
      const links = p.links
        ? Object.entries(p.links)
            .map(([k, url]) => `<a href="${esc(url)}">${esc(k)}</a>`)
            .join(" | ")
        : "";
      return `
      <article>
        <h3>${esc(p.name)} (${esc(p.period)})</h3>
        <p>${esc(p.description)}</p>
        <p><em>Stack: ${esc(p.stack.join(", "))}</em></p>
        ${links ? `<p>${links}</p>` : ""}
      </article>`;
    })
    .join("\n");
}

function renderExperience() {
  return experience
    .map(
      (e) => `
      <article>
        <h3>${esc(e.role)} — ${esc(e.org)} (${esc(e.period)})</h3>
        <ul>${e.points.map((pt) => `<li>${esc(pt)}</li>`).join("")}</ul>
      </article>`
    )
    .join("\n");
}

function renderCertificates() {
  return certificates
    .map(
      (c) =>
        `<li>${esc(c.name)} — ${esc(c.issuer)} (ID: ${esc(c.id)})</li>`
    )
    .join("\n");
}

const staticHtml = `
<div id="prerendered-content" style="font-family:system-ui,sans-serif;background:#0D1117;color:#E6EDF3;padding:32px 20px;max-width:720px;margin:0 auto;line-height:1.6;">
  <h1 style="color:#E6EDF3;">${esc(profile.name)}</h1>
  <p style="color:#FF6B35;">${esc(profile.role)} — ${esc(profile.location)}</p>
  <p>${esc(profile.summary)}</p>
  <p style="color:#8B95A1;">Email: ${esc(profile.email)} | GitHub: ${esc(profile.github)} | LinkedIn: ${esc(profile.linkedin)}</p>

  <h2 style="color:#FF6B35;">Projects</h2>
  ${renderProjects()}

  <h2 style="color:#FF6B35;">Experience</h2>
  ${renderExperience()}

  <h2 style="color:#FF6B35;">Skills</h2>
  <ul>${renderStack()}</ul>

  <h2 style="color:#FF6B35;">Education</h2>
  <p>${esc(education.degree)} — ${esc(education.school)} (${esc(education.period)})</p>

  <h2 style="color:#FF6B35;">Certificates</h2>
  <ul>${renderCertificates()}</ul>

  <p style="color:#8B95A1;font-size:13px;">Loading full experience…</p>
</div>
`.trim();

let html = readFileSync(distIndexPath, "utf-8");

if (!html.includes('id="root"')) {
  console.error("prerender: could not find #root in dist/index.html");
  process.exit(1);
}

html = html.replace(
  /<div id="root"><\/div>/,
  `<div id="root">${staticHtml}</div>`
);

writeFileSync(distIndexPath, html, "utf-8");
console.log("prerender: static content injected into dist/index.html");
