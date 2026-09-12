# HelloWorlds

The test projects for DeepTest and UntangleIt. Because the toolkit ships in several languages, there is one version of the same HelloWorld app for each language and framework it supports, and every one of them has the same shape:

| File | Tests | What it is for |
|---|---|---|
| `greet` | Full | Three small functions, every branch tested. Comes up green. |
| `names` | Thin | Three functions, two tests, one happy path each. `nickname` has no test at all. Comes up yellow and red. |
| `schedule` | None | `pick_greeting()`, nested five levels deep with no tests. The villain. It tops DeepTest's report and is the function to hand to UntangleIt afterwards. |

Same functions, same tests, same villain, so the same report comes out in every language and a reviewer who has seen one port has seen them all.

## The ports

| Folder | Language and runner | Status |
|---|---|---|
| `python` | Python, pytest | The original. |
| `react-vitest` | React 18, TypeScript, Vite, Vitest | 1.0 |
| `react-jest` | React, JavaScript, Jest | 1.0 |
| `vue-vitest` | Vue 3, single-file components, Vitest | 1.0 |
| `svelte-vitest` | Svelte 5, Vitest | 1.0 |
| `angular-vitest` | Angular, `ng test` through the Vitest builder | 1.0 |
| `angular-karma` | Angular, Karma with Jasmine | 1.0 |
| `node-mocha` | Plain Node, ES modules, Mocha; no coverage package, measured by Witness | 1.0 |
| `java` | Java, Maven, JUnit, JaCoCo | 1.1 |
| `csharp` | C#, `dotnet test`, xUnit | 1.2 |

Each folder is its own project: open it in VS Code on its own, install its dependencies the way its README says, and press "Check my code" in DeepTest. Expected on every port: all tests pass, `greet` green, `names` short, `pick_greeting()` at the top of the report.

## Keeping the fixtures in step

DeepTest and UntangleIt carry copies of these ports under `test/fixtures/` for their own suites. This repository is the source; `scripts\sync-fixtures.ps1` in DeepTest copies a port across without its dependencies. Change a port here, run the sync, commit both.
