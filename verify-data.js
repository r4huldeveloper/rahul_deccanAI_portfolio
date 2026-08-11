const fs = require("fs");

const lines = fs.readFileSync("./RPDA - Overview.tsv", "utf8").replace(/\r/g, "").split("\n");
const headers = lines[0].split("\t");
const wi = headers.indexOf("Work Done");
const ci = headers.indexOf("Category");
const pi = headers.indexOf("Project");
const ii = headers.indexOf("Impact");
const seen = new Set();

const rows = lines
  .slice(1)
  .map((line) => line.split("\t"))
  .filter((cols) => cols[wi] && cols[wi].trim())
  .map((cols) => {
    const work = cols[wi].trim();
    let project = (cols[pi] || "").trim() || "Cross-project";
    if (project === "Cross-project" && /snowflake/i.test(work)) project = "Snowflake";
    return {
      work,
      category: (cols[ci] || "").trim() || "Operations",
      project,
      impact: (cols[ii] || "").trim(),
    };
  })
  .filter((row) => {
    const key = (row.project + "|" + row.work).toLowerCase();
    if (seen.has(key)) return false;
    seen.add(key);
    return true;
  });

const projects = new Set();
const categories = new Set();
let withImpact = 0;

rows.forEach((row) => {
  row.project.split(",").map((v) => v.trim()).filter(Boolean).forEach((v) => projects.add(v));
  row.category.split(",").map((v) => v.trim()).filter(Boolean).forEach((v) => categories.add(v));
  if (row.impact) withImpact += 1;
});

console.log("contributions:", rows.length);
console.log("projects:", projects.size, "=>", [...projects].join(" | "));
console.log("categories:", categories.size, "=>", [...categories].join(" | "));
console.log("withImpact:", withImpact);
