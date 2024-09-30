import Link from 'next/link';

export default function HomePage() {
  return (
    <div>
      <h1>Welcome to the User Posts App</h1>
      <p>
        <Link href="/users">Go to Users List</Link>
      </p>
    </div>
  );
}