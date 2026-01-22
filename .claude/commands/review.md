# Command: /review [filepath or PR description]

## Purpose
Perform a comprehensive code review with security and quality focus.

## Protocol

### Step 1: Context Gathering
- Read the file(s) under review
- Understand the purpose and scope
- Identify the change boundaries

### Step 2: Multi-Dimensional Review

#### Security Checklist
- [ ] No injection vulnerabilities (SQL, XSS, Command)
- [ ] Input validation at boundaries
- [ ] No hardcoded secrets or credentials
- [ ] Proper authentication checks
- [ ] Authorization verified before actions
- [ ] Sensitive data not logged

#### Correctness Checklist
- [ ] Logic handles all code paths
- [ ] Edge cases considered
- [ ] Error states handled
- [ ] No off-by-one errors
- [ ] Race conditions addressed

#### Type Safety Checklist
- [ ] No `any` types
- [ ] External data validated
- [ ] Exhaustive switch/if-else
- [ ] Proper null handling

#### Performance Checklist
- [ ] No N+1 queries
- [ ] Expensive operations optimized
- [ ] No memory leaks
- [ ] Appropriate caching

#### Maintainability Checklist
- [ ] Clear naming conventions
- [ ] Low cyclomatic complexity
- [ ] No code duplication
- [ ] Appropriate abstraction level

### Step 3: Output

```markdown
## Code Review: [Subject]

### Summary
[Overall assessment in 1-2 sentences]

### Findings

#### Critical (Block Merge)
| Issue | Location | Description |
|-------|----------|-------------|
| 🔴 | L42 | [Description] |

#### Warnings (Should Address)
| Issue | Location | Description |
|-------|----------|-------------|
| 🟡 | L87 | [Description] |

#### Suggestions (Optional Improvements)
| Suggestion | Location |
|------------|----------|
| [Description] | L12 |

### Verdict
[✅ APPROVED / 🔄 REVISE / ❌ REJECT]

### Recommended Actions
1. [Action item]
2. [Action item]
```
