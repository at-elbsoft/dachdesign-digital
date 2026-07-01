import { fileURLToPath, pathToFileURL } from "node:url";
import { dirname, resolve } from "node:path";
import { readFileSync, writeFileSync, mkdirSync, rmSync, existsSync } from "node:fs";

const __dirname = dirname(fileURLToPath(import.meta.url));
const distDir = resolve(__dirname, "dist");
const serverDir = resolve(__dirname, "dist-ssr");

const routes = [
  "/",
  "/ueber-uns",
  "/leistungen",
  "/flachdach",
  "/steildach",
  "/reparatur-und-erhaltung",
  "/dachrinnenreinigung",
  "/metall-und-klempnerarbeiten",
  "/kontakt",
  "/jobs",
  "/impressum",
  "/datenschutz",
];

const template = readFileSync(resolve(distDir, "index.html"), "utf-8");
const entryPath = resolve(serverDir, "entry-server.js");
if (!existsSync(entryPath)) {
  console.error("SSR entry not found:", entryPath);
  process.exit(1);
}
const { render } = await import(pathToFileURL(entryPath).href);

function inject(tpl, helmet, appHtml) {
  let out = tpl;
  const titleStr = helmet?.title?.toString() || "";
  const metaStr = helmet?.meta?.toString() || "";
  const linkStr = helmet?.link?.toString() || "";
  const scriptStr = helmet?.script?.toString() || "";

  if (titleStr.trim()) {
    out = out.replace(/<title>[^<]*<\/title>\s*/i, "");
  }
  const metaNames = [...metaStr.matchAll(/name="([^"]+)"/g)].map((m) => m[1]);
  const metaProps = [...metaStr.matchAll(/property="([^"]+)"/g)].map((m) => m[1]);
  for (const n of new Set(metaNames)) {
    out = out.replace(new RegExp(`\\s*<meta\\s+name="${n}"[^>]*>`, "gi"), "");
  }
  for (const p of new Set(metaProps)) {
    out = out.replace(new RegExp(`\\s*<meta\\s+property="${p}"[^>]*>`, "gi"), "");
  }
  const linkRels = [...linkStr.matchAll(/rel="([^"]+)"/g)].map((m) => m[1]);
  for (const r of new Set(linkRels)) {
    if (r === "canonical") {
      out = out.replace(new RegExp(`\\s*<link\\s+rel="${r}"[^>]*>`, "gi"), "");
    }
  }

  const headExtras = [titleStr, metaStr, linkStr, scriptStr].filter(Boolean).join("\n    ");
  out = out.replace("</head>", `    ${headExtras}\n  </head>`);
  out = out.replace(
    /<div id="root">[\s\S]*?<\/div>/,
    `<div id="root">${appHtml}</div>`
  );
  return out;
}

let failed = 0;
for (const route of routes) {
  try {
    const { html, helmet } = render(route);
    const finalHtml = inject(template, helmet, html);
    const outPath =
      route === "/"
        ? resolve(distDir, "index.html")
        : resolve(distDir, route.replace(/^\//, ""), "index.html");
    mkdirSync(dirname(outPath), { recursive: true });
    writeFileSync(outPath, finalHtml, "utf-8");
    console.log("prerendered", route, "->", outPath.replace(distDir, "dist"));
  } catch (err) {
    failed++;
    console.error("failed", route, err);
  }
}

// Clean up SSR build output – not needed at runtime
try {
  rmSync(serverDir, { recursive: true, force: true });
} catch {}

if (failed > 0) process.exit(1);
