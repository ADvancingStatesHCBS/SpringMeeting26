# Command: /implement [feature description]

## Purpose
Full-cycle implementation from specification to verified code.

## Protocol

### Phase 1: Specification (Auto-invoke Optimizer)
Transform the feature request into a clear specification:
- Concrete requirements
- Affected files
- Constraints and edge cases

### Phase 2: Architecture (Auto-invoke Architect)
If feature is non-trivial:
- Design component structure
- Define data flow
- Identify integration points
- Create implementation plan

### Phase 3: Execution (Auto-invoke Builder)
For each step in the plan:
1. Read target file
2. Implement change
3. Verify correctness
4. Proceed to next step

### Phase 4: Review (Auto-invoke Reviewer)
Self-review the implementation:
- Security check
- Type safety verification
- Edge case coverage

### Output Format

```markdown
## Implementation: [Feature Name]

### Specification
[Brief spec summary]

### Files Modified
- `path/to/file.ts` — [Change summary]

### Implementation

[Complete code for each file]

### Self-Review
- Security: ✅/⚠️/❌
- Types: ✅/⚠️/❌
- Edge Cases: ✅/⚠️/❌

### Testing Notes
[How to verify this implementation works]
```
