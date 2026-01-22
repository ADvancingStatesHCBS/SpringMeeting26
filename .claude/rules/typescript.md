# TypeScript Standards

## Type Safety

### Strict Mode Required
- `strict: true` in tsconfig
- `noImplicitAny: true`
- `strictNullChecks: true`

### Forbidden Patterns
```typescript
// ❌ NEVER
const data: any = response;
function process(input) { } // implicit any
obj!.property // non-null assertion without validation

// ✅ ALWAYS
const data: unknown = response;
if (isValidData(data)) { /* narrowed */ }
function process(input: InputType): OutputType { }
if (obj?.property) { /* safe access */ }
```

### Type Definitions
```typescript
// ❌ Avoid enums (non-standard JS compilation)
enum Status { Active, Inactive }

// ✅ Use const objects or string unions
type Status = 'active' | 'inactive';
// OR
const Status = { Active: 'active', Inactive: 'inactive' } as const;
type Status = typeof Status[keyof typeof Status];
```

### External Data Validation
```typescript
// ✅ Validate at system boundaries
import { z } from 'zod';

const UserSchema = z.object({
  id: z.string().uuid(),
  email: z.string().email(),
  role: z.enum(['admin', 'user']),
});

type User = z.infer<typeof UserSchema>;

// Usage
const user = UserSchema.parse(apiResponse); // throws on invalid
const user = UserSchema.safeParse(apiResponse); // returns result object
```

## Code Style

### Exports
```typescript
// ❌ Default exports (refactoring hazard)
export default function MyComponent() {}

// ✅ Named exports
export function MyComponent() {}
export { MyComponent };
```

### Error Handling
```typescript
// ❌ Generic catch
try { } catch (e) { console.log(e); }

// ✅ Typed error handling
try {
  await riskyOperation();
} catch (error) {
  if (error instanceof NetworkError) {
    // handle network specifically
  } else if (error instanceof ValidationError) {
    // handle validation specifically
  } else {
    throw error; // re-throw unknown errors
  }
}
```

### Functions
```typescript
// ❌ Multiple primitive parameters
function createUser(name: string, email: string, age: number, role: string) {}

// ✅ RORO Pattern (Receive Object, Return Object)
interface CreateUserInput {
  name: string;
  email: string;
  age: number;
  role: UserRole;
}

interface CreateUserResult {
  user: User;
  token: string;
}

function createUser(input: CreateUserInput): CreateUserResult {}
```
