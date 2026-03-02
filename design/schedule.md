# Schedule & Task Tracker

**Week 4 build:** 2026-02-23 → 2026-02-28 (demo Saturday)

Living tracker for milestones and tasks. Specs live in their respective
design docs; this file tracks execution status.

---

## Milestones

| Day | Target | Status |
|-----|--------|--------|
| Mon 2/23 | PRD submitted. Group pitch sent. Both repos scaffolded. Coordination layer extraction started. | Done |
| Tue 2/24 | Personal harness depth: intake + session-review end-to-end compatible, shared scoring rubric, evidence tagging, goals/arcs lifecycle. Install package taking shape. | Done |
| Wed 2/25 | Install package complete. Solo /startwork built. P10 (teacher relationship) designed: principle, design doc, authority model, protocol. | Done |
| Thu 2/26 | Teacher-relationship MVP built (publish + read-back + config). Signal repo created. Coordination layer parameterization if time. E2E test run. | Partial — signal repo done, package extracted to standalone repo and launched. Teacher-relationship MVP not built. |
| Fri 2/27 | Peer testing doubles as first teacher-student exchange. Iterate on feedback. Demo prep. | In progress — 3 testers onboarded (going at own pace). Teacher exchange code unbuilt. |
| Sat 2/28 | Demo. | Planned |

---

## Task Checklist

### Personal harness — MVP

| Task | Spec | Status |
|------|------|--------|
| Background folder + intake interview | `design/prd.md` §MVP | Done |
| Parameterized CLAUDE.md generation | `design/prd.md` §MVP | Done |
| Skills out of the box (debugger, session-review, quick-ref) | `design/build-registry.md` | Done |
| Intake ↔ session-review integration | Shared scoring rubric, evidence tagging, goals/arcs lifecycle | Done |
| Solo /startwork | `design/startwork.md` §Solo | Done |
| Solo /project-brainstorm | `design/build-registry.md` §Skills | Planned |
| Learning state persistence (current-state.md) | `design/harness-features.md` §P3 | Done |
| Privacy (.gitignore learner profile) | `design/prd.md` §MVP | Done |

### Personal harness — additional built skills

| Skill | Status |
|-------|--------|
| browser-qa | Done |
| design-iterate | Done |
| design-skill | Done |
| diagram | Done |
| lesson-scaffold | Done |

### Coordination layer — MVP

| Task | Spec | Status |
|------|------|--------|
| Extract from field-test project | `coordination/README.md` | Done |
| Generalize hardcoded references | `coordination/README.md` §Config | Done |
| Team intake flow | `design/prd.md` §MVP | Planned |
| /startwork (team) | `design/startwork.md` §Team | Extracted (needs parameterization) |
| /handoff-test | `coordination/skills/handoff-test/` | Done |
| /triage | `coordination/commands/workflows/triage.md` | Extracted |
| Dependency protocol | `coordination/commands/startwork.md` | Extracted |
| Signal return path (GitHub issues) | `coordination/architecture.md` §Signal Catch Basin | Designed |
| Agent feedback skill | `design/build-registry.md` §Skills | Deferred — replaces session-review Phase 4 strict schema |
| Privacy boundaries documented | `design/prd.md` §MVP | Planned |

### Teacher relationship layer — MVP (P10)

| Task | Spec | Status |
|------|------|--------|
| P10 design principle | `design/design-principles.md` §10 | Done |
| Boundary condition update (directional ceiling) | `design/design-principles.md` §Boundary | Done |
| Design doc (protocol, authority, scoping, MVP) | `design/teacher-role/teacher-relationship.md` | Done |
| Consent/authority model (triad, revocable grant) | `design/teacher-role/teacher-relationship.md` §Consent | Done |
| Relationship scoping (time, not domain) | `design/teacher-role/teacher-relationship.md` §Scoping | Done |
| Config format (learning/relationships.md) | `design/teacher-role/teacher-relationship.md` §Config | Designed |
| Create per-user signal repo (e.g., rhhart/learning-signals) | — | Done (public) |
| Label protocol setup on signal repo | `design/teacher-role/teacher-relationship.md` §Labels | Done |
| Progress-review publish step (Phase 5) | `design/teacher-role/teacher-relationship.md` §MVP | Planned |
| Startwork teacher-response check | `design/teacher-role/teacher-relationship.md` §MVP | Planned |
| E2E test with peer as teacher | — | Planned (Friday) |

### Stretch goals

| Task | Spec | Status |
|------|------|--------|
| Installation package | `design/prd.md` §Stretch | Done — shipped as standalone repo `hartphoenix/weft`. bootstrap.sh + uninstall.sh shipped. test-install.ts and data-contracts.md remain planned. |
| Solo compound engineer (weekly review) | `design/harness-features.md` §P6 | Done — built as progress-review, integrated into startwork Phase 5 |
| Team compound engineering workflow | `coordination/commands/workflows/compound.md` | Extracted |
| Compounding indicators | `design/harness-features.md` §P6 | Partial — progress-review detects compounding breakdown |

### Package extraction

| Task | Status |
|------|--------|
| Extract `package/` to standalone `hartphoenix/weft` repo | Done |
| Fix all `package/` path prefixes in standalone repo | Done |
| Push to GitHub, verify clone works | Done |
| Update Hart's dev environment (uninstall old, bootstrap new) | Done |
| Replace `weft-dev/package/` with pointer README | Done |
| Share with 3 opt-in testers + Discord announcement | Done |

Full plan: `design/package-extraction-plan.md`.

### Install package checklist

What ships in `hartphoenix/weft` — everything a new user needs to clone and go.

| Item | Status |
|------|--------|
| `README.md` (quick start, what intake creates, privacy) | Done |
| `CLAUDE.md` (template, replaced by intake) | Done |
| `.gitignore` (learning/, background/) | Done |
| `learning/` + `learning/session-logs/` (with .gitkeep) | Done |
| `background/` (with .gitkeep) | Done |
| `.claude/skills/intake/` | Done |
| `.claude/skills/session-review/` | Done |
| `.claude/skills/startwork/` | Done |
| `.claude/skills/quick-ref/` | Done |
| `.claude/skills/debugger/` | Done |
| `.claude/skills/lesson-scaffold/` | Done |
| `.claude/skills/progress-review/` | Done |
| `.claude/references/developmental-model.md` | Done |
| `.claude/references/scoring-rubric.md` | Done |
| `.claude/references/context-patterns.md` | Done |
| `.claude/references/tutor-posture.md` | Done |
| `.claude/consent.json` (no default — created by intake on consent) | Done |
| `.claude/hooks/session-start.sh` (conditional onboarding hook) | Done |
| `.claude/skills/handoff-test/` | Done |
| `gh` CLI documented as prerequisite in README | Done |
| Signal repo setup documented in README (per-user, `gh repo create`) | Done |
| `.claude/skills/handoff-prompt/` | Done |
| `.claude/references/claude-md-template.md` | Done |
| Agent feedback skill (`.claude/skills/agent-feedback/`) | Deferred — see build registry |
| `scripts/bootstrap.sh` (install pipeline) | Done — shell script, copies weft section to CLAUDE.md, registers skills/hooks |
| `scripts/uninstall.sh` (clean removal) | Done — strips weft section, removes settings.json entries |
| `scripts/test-install.ts` (install verification) | Planned |
| `.claude/references/data-contracts.md` | Planned — YAML schema for current-state.md defined in intake SKILL.md §3d |
| End-to-end test: clone → /intake → work → /session-review → signal | Not run |

### Validation experiments

See `design/validation-plan.md` for full specs. All designed, none run.

| Experiment | Priority |
|------------|----------|
| Retrospective compliance audit | 1 (highest info yield) |
| A/B testing infrastructure | 2 (enables experiments 3, 7) |
| First-person framing | 3 |
| Instruction persistence | 4 (can run with #2) |
| Context budget measurement + skill audit | 5 |
| Embedding loop validation | 6 |
| Onboarding design | 7 (deployment-blocking) |
| Continuous system observability (7b) | 0 (prerequisite — makes 5, 6, 7 cheaper) |
| Context budget discipline | 8 (deployment-blocking) |
| SessionStart hook validation | 9 (run with peer testing) |

---

## Definition of Done

From `design/prd.md`, updated to reflect P10:

- A non-Hart developer can install the personal harness and have a
  working, personalized setup within 15–20 minutes
- A team of 2+ can install the coordination layer and have working task
  selection, triage, and dependency tracking within 30 minutes
- Both tools have a README with quickstart
- Demo shows both working and self-improving — with at least one other
  person's real usage as evidence
- Demo shows the teacher-student exchange: a progress review published
  via GitHub Issues, a teacher response, and that response surfaced in
  the student's next startwork session
