# Command: /refactor [filepath]

## Purpose
Systematically refactor the specified file to align with project standards and modern best practices.

## Protocol

### Step 1: Analysis
Read the target file and identify:
- [ ] Type safety violations (`any`, implicit types)
- [ ] Deep nesting (cyclomatic complexity > 10)
- [ ] Code duplication
- [ ] Dead code / unused imports
- [ ] Magic numbers/strings
- [ ] Missing error handling
- [ ] Opportunities for composition (extractable functions/components)

### Step 2: Impact Assessment
- What depends on this file?
- Will changes break consumers?
- Are there tests that need updating?

### Step 3: Refactoring Plan
Output a numbered list of changes before implementing:
1. [Change] — [Rationale]
2. [Change] — [Rationale]

### Step 4: Implementation
Apply changes incrementally, maintaining functionality at each step.

### Step 5: Verification
- Syntax valid
- Types check
- No regressions in dependent code

## Output Format
```markdown
## Refactor Report: [filepath]

### Issues Found
| # | Issue | Severity | Line(s) |
|---|-------|----------|---------|
| 1 | [Issue] | [High/Med/Low] | L42-48 |

### Changes Applied
1. [Change description] — [Rationale]

### Before/After Metrics
- Cyclomatic Complexity: [X] → [Y]
- Lines of Code: [X] → [Y]
- Type Coverage: [X]% → [Y]%

### Refactored Code
[Complete refactored file]
```
