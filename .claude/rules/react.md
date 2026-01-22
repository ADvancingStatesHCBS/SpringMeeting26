# React Standards

## Component Architecture

### Functional Components Only
```tsx
// ❌ Class components
class MyComponent extends React.Component {}

// ✅ Functional components
function MyComponent({ prop }: Props) {}
// OR
const MyComponent: React.FC<Props> = ({ prop }) => {}
```

### Server Components First (Next.js 14+)
```tsx
// Default: Server Component (no directive needed)
async function ProductList() {
  const products = await fetchProducts(); // direct async
  return <ul>{products.map(p => <li key={p.id}>{p.name}</li>)}</ul>;
}

// Only when necessary: Client Component
'use client';
function InteractiveButton() {
  const [count, setCount] = useState(0);
  return <button onClick={() => setCount(c => c + 1)}>{count}</button>;
}
```

### Component Organization
```
components/
├── ui/          # Primitives (Button, Input, Card) - "dumb"
├── features/    # Domain logic (ProductCard, UserProfile)
└── layouts/     # Page structures (Header, Sidebar)
```

## Hooks

### Separation of Concerns
```tsx
// ❌ Logic in component
function UserProfile() {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => { /* fetch logic */ }, []);

  // ... rendering with all state checks
}

// ✅ Extract to custom hook
function useUser(userId: string) {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => { /* fetch logic */ }, [userId]);

  return { user, loading, error };
}

function UserProfile({ userId }: { userId: string }) {
  const { user, loading, error } = useUser(userId);

  if (loading) return <Skeleton />;
  if (error) return <ErrorDisplay error={error} />;
  return <ProfileCard user={user} />;
}
```

### useEffect Discipline
```tsx
// ❌ Data fetching in useEffect (client component anti-pattern)
useEffect(() => {
  fetch('/api/data').then(setData);
}, []);

// ✅ Fetch in Server Component OR use data fetching library
// Server Component approach:
async function DataDisplay() {
  const data = await fetchData();
  return <Display data={data} />;
}

// ❌ Derived state in useEffect
useEffect(() => {
  setFullName(`${firstName} ${lastName}`);
}, [firstName, lastName]);

// ✅ Calculate during render
const fullName = `${firstName} ${lastName}`;
```

## Props

### Type Safety
```tsx
// ❌ Inline types or any
function Button({ label, onClick }: { label: any; onClick: any }) {}

// ✅ Explicit interface
interface ButtonProps {
  label: string;
  onClick: () => void;
  variant?: 'primary' | 'secondary';
  disabled?: boolean;
}

function Button({ label, onClick, variant = 'primary', disabled = false }: ButtonProps) {}
```

### Children Pattern
```tsx
// ❌ Custom content props
function Card({ content }: { content: ReactNode }) {}

// ✅ Use children
interface CardProps {
  children: ReactNode;
  className?: string;
}

function Card({ children, className }: CardProps) {
  return <div className={cn('card', className)}>{children}</div>;
}
```

## Error Boundaries
```tsx
// Wrap async components
<Suspense fallback={<Loading />}>
  <ErrorBoundary fallback={<Error />}>
    <AsyncComponent />
  </ErrorBoundary>
</Suspense>
```
