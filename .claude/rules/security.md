# Security Standards

## OWASP Top 10 Awareness

### 1. Injection Prevention
```typescript
// ❌ SQL Injection vulnerable
const query = `SELECT * FROM users WHERE id = ${userId}`;

// ✅ Parameterized queries
const user = await prisma.user.findUnique({ where: { id: userId } });
// OR
const query = 'SELECT * FROM users WHERE id = $1';
await db.query(query, [userId]);
```

```typescript
// ❌ Command injection vulnerable
exec(`convert ${userFilename} output.png`);

// ✅ Escape/validate input
import { escape } from 'shell-escape';
exec(`convert ${escape(userFilename)} output.png`);
// Better: use library APIs instead of shell commands
```

### 2. XSS Prevention
```tsx
// ❌ Direct HTML injection
<div dangerouslySetInnerHTML={{ __html: userContent }} />

// ✅ Sanitize if absolutely necessary
import DOMPurify from 'dompurify';
<div dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(userContent) }} />

// ✅ Better: use text content
<div>{userContent}</div>
```

### 3. Authentication
```typescript
// ❌ Sensitive data in JWT payload
const token = jwt.sign({ password: user.password }, secret);

// ✅ Minimal claims
const token = jwt.sign({ sub: user.id, role: user.role }, secret, {
  expiresIn: '1h',
});
```

### 4. Authorization
```typescript
// ❌ No authorization check
async function deleteUser(userId: string) {
  await db.user.delete({ where: { id: userId } });
}

// ✅ Verify permissions
async function deleteUser(userId: string, requesterId: string) {
  const requester = await db.user.findUnique({ where: { id: requesterId } });
  if (requester.role !== 'admin' && requester.id !== userId) {
    throw new ForbiddenError('Not authorized to delete this user');
  }
  await db.user.delete({ where: { id: userId } });
}
```

### 5. Sensitive Data Exposure
```typescript
// ❌ Logging sensitive data
console.log('User login:', { email, password });
logger.info('Payment processed:', paymentDetails);

// ✅ Redact sensitive fields
console.log('User login:', { email, password: '[REDACTED]' });
logger.info('Payment processed:', {
  id: paymentDetails.id,
  amount: paymentDetails.amount,
  cardLast4: paymentDetails.cardNumber.slice(-4),
});
```

```typescript
// ❌ Exposing internal errors
catch (error) {
  res.status(500).json({ error: error.message, stack: error.stack });
}

// ✅ Generic client errors, detailed server logs
catch (error) {
  logger.error('Payment failed', { error, userId });
  res.status(500).json({ error: 'Payment processing failed' });
}
```

## Input Validation

### Boundary Validation
```typescript
// Validate ALL external input at system boundaries
import { z } from 'zod';

// API endpoint
const CreateUserSchema = z.object({
  email: z.string().email(),
  password: z.string().min(8).max(128),
  name: z.string().min(1).max(100),
});

export async function POST(req: Request) {
  const body = await req.json();
  const result = CreateUserSchema.safeParse(body);

  if (!result.success) {
    return Response.json({ error: result.error.flatten() }, { status: 400 });
  }

  // result.data is now typed and validated
  return createUser(result.data);
}
```

### Environment Variables
```typescript
// ❌ Direct access without validation
const apiKey = process.env.API_KEY;

// ✅ Validate at startup
const EnvSchema = z.object({
  API_KEY: z.string().min(1),
  DATABASE_URL: z.string().url(),
  NODE_ENV: z.enum(['development', 'production', 'test']),
});

export const env = EnvSchema.parse(process.env);
```

## Secrets Management

### Never Commit Secrets
```
# .gitignore
.env
.env.local
.env.*.local
*.pem
*.key
credentials.json
```

### Environment-Based Configuration
```typescript
// ❌ Hardcoded secrets
const stripe = new Stripe('sk_live_xxx');

// ✅ Environment variables
const stripe = new Stripe(env.STRIPE_SECRET_KEY);
```
