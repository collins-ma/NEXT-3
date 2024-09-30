
import Link from 'next/link';

export const revalidate = 0; // Disables revalidation for SSG

// Page component for listing all users
export default async function UsersPage() {
  // Fetching users without caching (SSG, no-cache)
  const response = await fetch('https://jsonplaceholder.typicode.com/users', {
    cache: 'no-store', // Ensures the response is not cached
  });
  const users = await response.json();

  return (
    <div>
      <h1>List of Users</h1>
      <ul>
        {users.map((user) => (
          <li key={user.id}>
            <Link href={`/users/${user.id}`}>
              {user.username}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}