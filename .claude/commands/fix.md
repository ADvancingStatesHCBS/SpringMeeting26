# Command: /fix [error description or stack trace]

## Purpose
Systematically diagnose and fix an error with root cause analysis.

## Protocol

### Step 1: Error Classification
Identify the error type:
- [ ] Syntax Error — Parse failure
- [ ] Type Error — Type mismatch
- [ ] Runtime Error — Execution failure
- [ ] Logic Error — Incorrect behavior
- [ ] Network Error — API/fetch failure

### Step 2: Stack Trace Analysis
If a stack trace is provided:
1. Identify the origin point (first non-library frame)
2. Read the relevant source file
3. Trace the data flow to the error

### Step 3: Root Cause Identification
- What is the immediate cause?
- What is the underlying cause?
- Why did this happen? (missing validation? race condition? bad assumption?)

### Step 4: Fix Implementation
Apply the minimal change that addresses the root cause, not just the symptom.

### Step 5: Regression Prevention
- Add guard clause or validation
- Improve type safety if applicable
- Document the fix rationale

## Output Format
```markdown
## Fix Report: [Error Title]

### Diagnosis
- **Error Type:** [Classification]
- **Location:** `filepath:line`
- **Root Cause:** [Explanation]

### Fix Applied
```diff
- [old code]
+ [new code]
```

### Prevention
[What was added to prevent recurrence]

### Verification
[How to confirm the fix works]
```
