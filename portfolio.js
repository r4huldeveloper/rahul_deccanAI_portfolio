const portfolio = {
  headline: [
    { value: "50", suffix: "+", label: "people trained across AI evaluation programs" },
    { value: "400", suffix: "+", label: "tools evaluated end to end" },
    { value: "9", suffix: "", label: "enterprise platforms covered in a single validation push" },
    { value: "2,000", suffix: " tasks", label: "Contributed to delivered inside a 72-hour window" },
    { value: "93", suffix: "%", label: "annotator accuracy reached after enablement" },
    { value: "200", suffix: "+", label: "benchmark prompts authored for frontier-model testing" },
    { value: "100", suffix: "GB", label: "of live enterprise data turned into prompt pipelines" },
    { value: "4", suffix: "", label: "frontier models stress-tested against prompt sets" },
    { value: "80", suffix: "%", label: "of those prompts defeated the models outright" },
    { value: "90", suffix: "%", label: "coherence across the synthetic database architected by collaborating with the team" },
    { value: "23", suffix: "", label: "annotators led with daily syncs and quality tracking" },
    { value: "2", suffix: " days", label: "to stand up a working chat evaluation environment for golden trajectory creation" },
  ],
  scorecard: [
    {
      theme: "People & enablement",
      items: [
        { value: "50+", label: "people trained on evaluation work to date" },
        { value: "30+", label: "people given structured knowledge transfer" },
        { value: "23", label: "annotators led directly, with daily syncs" },
        { value: "10", label: "specialists trained on prompt refinement" },
        { value: "4", label: "person Snowflake team, where I served as APM" },
        { value: "3", label: "role-specific SOP sets built with L&D for annotator, QC and SQC" },
      ],
    },
    {
      theme: "Scale & delivery",
      items: [
        { value: "2,000", label: "contributed to tasks delivered in 72 hours" },
        { value: "400+", label: "tools validated across 9 platforms" },
        { value: "~100k", label: "task scale the quality rubric was designed to support" },
        { value: "100", label: "synthetic tasks put through pre-sanity checks" },
        { value: "30–50", label: "single-turn tasks I personally annotated and QC'd" },
        { value: "5–10", label: "multi-turn tool-call tasks built, annotated and SQC'd by me" },
        { value: "25", label: "trajectories triaged into working and error sets" },
        { value: "12", label: "jobs reported to stakeholders across 5 GT classes" },
      ],
    },
    {
      theme: "Quality & accuracy",
      items: [
        { value: "93%", label: "annotator accuracy on tool evaluations" },
        { value: "90%", label: "coherence held across the synthetic database" },
        { value: "90%", label: "accuracy on the rubrics and narratives I authored" },
        { value: ">80%", label: "composite pass rate across 3 verifier types" },
        { value: "10/25", label: "trajectories caught as contaminated before use" }
      ],
    },
    {
      theme: "Speed",
      items: [
        { value: "2 days", label: "to architect and ship the chat evaluation environment" },
        { value: "1.5 days", label: "to validate 400+ tools with a 23-person team" },
        { value: "2 days", label: "to build QC onboarding from scratch, mid-project" },
        { value: "72 hrs", label: "to clear a 2,000-task delivery backlog" },
        { value: "1 page", label: "research digests replacing full paper reads for stakeholders" },
      ],
    },
    {
      theme: "Research & benchmarking",
      items: [
        { value: "4", label: "models benchmarked: GPT-5.5, Qwen 27B, Qwen 35B, Opus 4.6" },
        { value: "3", label: "verifier types designed: agentic trace, SQL and end-state" },
        { value: "3", label: "SWE benchmarks analysed: SWE-bench, SWE-bench Pro, SWE Atlas" },
        { value: "100GB", label: "of live G Suite, Jira and Slack data mapped for prompt creation" },
        { value: "3", label: "research digests delivered on HiL, RLHF and SWE Benchmark Pro" },
      ],
    },
  ],
  projects: [
    {
      name: "Snowflake",
      role: "APM · Platform & Evaluation Operations",
      summary:
        "Architected the evaluation platform interface with the ML and backend teams, defined taxonomies and golden-answer standards, and automated prompt creation from 100GB of live G Suite, Jira and Slack data. Wrote the SOPs and rubrics used to judge trajectories and tool calls.",
      stats: ["APM role", "2-day build", "100GB data", "30–50 tasks QC'd", "4-person team"],
    },
    {
      name: "IronLegion",
      role: "Operations Lead · Research & Benchmarking",
      summary:
        "Led 23 annotators to 93% accuracy while validating 400+ tools across 9 platforms in a day and a half. Trained a 10-person prompt team, authored 200+ benchmark prompts where 80% defeated frontier models, and architected a synthetic database holding 90% coherence.",
      stats: ["23 annotators", "400+ tools", "9 platforms", "93% accuracy", "200+ prompts", "80% break rate", "4 models"],
    },
    {
      name: "GT Bytedance",
      role: "Agentic Workflow Evaluation · Quality Systems",
      summary:
        "Built the quality backbone: SOPs, ambiguity trackers, sanity checks, annotator forms and a validation rubric designed to hold at 100k tasks. Caught test-file contamination and duplicated jobs before they reached the client, then recovered broken tasks for reuse.",
      stats: ["100-task sanity check", "10/25 contamination caught", "100k-task rubric", "12 jobs · 5 GT classes"],
    },
    {
      name: "Groot",
      role: "Operations · Delivery & Workforce Systems",
      summary:
        "Built KPI dashboards for stakeholders, drove task assignment, and held delivery pace to clear 2,000 tasks in 72 hours. Rebuilt fragmented freelancer records into one credentialed source of truth for selection and batch tracking.",
      stats: ["2,000 tasks", "72 hours", "KPI dashboards", "Freelancer data unified"],
    },
    {
      name: "Project Infinity",
      role: "QC Operations · Rapid Enablement",
      summary:
        "Joined mid-flight and produced the full QC onboarding system in two days: guidelines, a KT video, finalised practice tasks, and the weekly KPIs the team tracked against.",
      stats: ["2-day turnaround", "QC onboarding", "KT video", "Weekly KPIs"],
    },
    {
      name: "Browser Gym",
      role: "Workflow & Evaluation Design",
      summary:
        "Designed the workflow process, task evaluation method and rubrics used to grade model-breaking tasks packaged for client sale.",
      stats: ["Evaluation rubrics", "Workflow design", "Client-ready output"],
    },
    {
      name: "THANOS · MAITRIX · RL ENV",
      role: "Operational Foundations",
      summary:
        "Turned scattered project information across three programs into master sheets anyone could read in one pass: dashboards, action trackers, team records, documentation hubs and real freelancer payment visibility.",
      stats: ["3 programs", "Master sheets", "Payment visibility", "Single source of truth"],
    },
  ],
};

const headlineGrid = document.querySelector("#metric-grid");
const liveStrip = document.querySelector("#live-strip");
const scorecardGrid = document.querySelector("#scorecard-grid");
const projectList = document.querySelector("#project-list");
const archiveList = document.querySelector("#archive-list");
const projectFilter = document.querySelector("#project-filter");
const searchInput = document.querySelector("#search-input");
const resultCount = document.querySelector("#result-count");
const loadMoreButton = document.querySelector("#load-more");

let contributions = [];
let visibleLimit = 12;

function renderHeadline() {
  headlineGrid.innerHTML = portfolio.headline
    .map(
      (metric) => `
        <article class="metric reveal">
          <div class="metric-number">${metric.value}<em>${metric.suffix}</em></div>
          <p>${metric.label}</p>
        </article>
      `,
    )
    .join("");
}

function renderScorecard() {
  scorecardGrid.innerHTML = portfolio.scorecard
    .map(
      (group) => `
        <article class="score-group reveal">
          <h3>${group.theme}</h3>
          <dl>
            ${group.items
              .map(
                (item) => `
                  <div class="score-row">
                    <dt>${item.value}</dt>
                    <dd>${item.label}</dd>
                  </div>
                `,
              )
              .join("")}
          </dl>
        </article>
      `,
    )
    .join("");
}

function renderProjects() {
  projectList.innerHTML = portfolio.projects
    .map(
      (project, index) => `
        <article class="project reveal">
          <span class="project-index">${String(index + 1).padStart(2, "0")}</span>
          <div>
            <h3>${project.name}</h3>
            <span class="project-role">${project.role}</span>
          </div>
          <div class="project-copy">
            <p>${project.summary}</p>
            <div class="project-tags">
              ${project.stats.map((stat) => `<span>${stat}</span>`).join("")}
            </div>
          </div>
          <span class="project-arrow">↗</span>
        </article>
      `,
    )
    .join("");
}

function parseTsv(text) {
  const lines = text.replace(/\r/g, "").split("\n");
  const headers = lines[0].split("\t");
  const workIndex = headers.indexOf("Work Done");
  const categoryIndex = headers.indexOf("Category");
  const projectIndex = headers.indexOf("Project");
  const impactIndex = headers.indexOf("Impact");
  const seen = new Set();

  return lines
    .slice(1)
    .map((line) => line.split("\t"))
    .filter((columns) => columns[workIndex]?.trim())
    .map((columns) => {
      const work = columns[workIndex].trim();
      let project = columns[projectIndex]?.trim() || "Cross-project";

      if (project === "Cross-project" && /snowflake/i.test(work)) {
        project = "Snowflake";
      }

      return {
        work,
        category: columns[categoryIndex]?.trim() || "",
        project,
        impact: columns[impactIndex]?.trim() || "",
      };
    })
    .filter((item) => {
      const key = `${item.project}|${item.work}`.toLowerCase();
      if (seen.has(key)) return false;
      seen.add(key);
      return true;
    });
}

// Counts come straight from the TSV so they stay correct as rows are added.
function renderLiveStats() {
  const projects = new Set();
  const categories = new Set();
  let withImpact = 0;

  contributions.forEach((item) => {
    item.project
      .split(",")
      .map((value) => value.trim())
      .filter(Boolean)
      .forEach((value) => projects.add(value));

    item.category
      .split(",")
      .map((value) => value.trim())
      .filter(Boolean)
      .forEach((value) => categories.add(value));

    if (item.impact) withImpact += 1;
  });

  const stats = [
    { value: contributions.length, label: "completed contributions logged" },
    { value: projects.size, label: "projects contributed to" },
    { value: categories.size, label: "types of work covered" },
    { value: withImpact, label: "with a recorded project impact" },
  ];

  liveStrip.innerHTML = stats
    .map(
      (stat) => `
        <div class="live-stat">
          <strong>${stat.value}</strong>
          <span>${stat.label}</span>
        </div>
      `,
    )
    .join("");
}

function populateFilters() {
  const projects = [...new Set(contributions.map((item) => item.project))].sort((a, b) =>
    a.localeCompare(b),
  );

  projectFilter.insertAdjacentHTML(
    "beforeend",
    projects
      .map((project) => `<option value="${escapeHtml(project)}">${escapeHtml(project)}</option>`)
      .join(""),
  );
}

function getFilteredContributions() {
  const query = searchInput.value.trim().toLowerCase();
  const selectedProject = projectFilter.value;

  return contributions.filter((item) => {
    const matchesProject = selectedProject === "all" || item.project === selectedProject;
    const searchable = `${item.project} ${item.category} ${item.work} ${item.impact}`.toLowerCase();
    return matchesProject && searchable.includes(query);
  });
}

function renderArchive() {
  const filtered = getFilteredContributions();
  const visible = filtered.slice(0, visibleLimit);

  resultCount.textContent = filtered.length;
  archiveList.innerHTML = visible.length
    ? visible
        .map(
          (item) => `
            <article class="archive-item">
              <div class="archive-project">
                ${escapeHtml(item.project)}
                ${item.category ? `<br><span>${escapeHtml(item.category)}</span>` : ""}
              </div>
              <div class="archive-content">
                <h3>${escapeHtml(item.work)}</h3>
                ${item.impact ? `<p>${escapeHtml(item.impact)}</p>` : ""}
              </div>
            </article>
          `,
        )
        .join("")
    : `<p class="archive-empty">No completed work matches that search.</p>`;

  loadMoreButton.hidden = visibleLimit >= filtered.length;
}

function escapeHtml(value) {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

async function loadArchive() {
  try {
    const response = await fetch("./RPDA%20-%20Overview.tsv");
    if (!response.ok) throw new Error("Portfolio data could not be loaded.");
    contributions = parseTsv(await response.text());
    renderLiveStats();
    populateFilters();
    renderArchive();
  } catch (error) {
    liveStrip.innerHTML = "";
    archiveList.innerHTML = `
      <p class="archive-empty">
        Start a local web server to view the complete archive. See README.md for the one-command preview.
      </p>
    `;
    loadMoreButton.hidden = true;
    console.error(error);
  }
}

function setupRevealAnimation() {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.08 },
  );

  document.querySelectorAll(".reveal").forEach((element, index) => {
    element.style.transitionDelay = `${Math.min(index % 6, 3) * 70}ms`;
    observer.observe(element);
  });
}

searchInput.addEventListener("input", () => {
  visibleLimit = 12;
  renderArchive();
});

projectFilter.addEventListener("change", () => {
  visibleLimit = 12;
  renderArchive();
});

loadMoreButton.addEventListener("click", () => {
  visibleLimit += 12;
  renderArchive();
});

document.querySelector("#year").textContent = new Date().getFullYear();
renderHeadline();
renderScorecard();
renderProjects();
loadArchive();
setupRevealAnimation();
