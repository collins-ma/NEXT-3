// Dynamic page to display posts for a specific user
export async function generateStaticParams() {
    // Fetch the users to generate static paths
    const response = await fetch('https://jsonplaceholder.typicode.com/users');
    const users = await response.json();
  
    // Return an array of paths for pre-rendering user pages
    return users.map((user) => ({
      id: user.id.toString(),
    }));
  }
  
  export const revalidate = 0; // Disable revalidation
  
  // Page component for displaying posts of a specific user
  export default async function UserPostsPage({ params }) {
    const { id } = params;
  
    // Fetch posts by user ID, no-cache for fresh data every time
    const response = await fetch(`https://jsonplaceholder.typicode.com/posts?userId=${id}`, {
      cache: 'no-store',
    });
    const posts = await response.json();
  
    return (
      <div>
        <h1>Posts by User {id}</h1>
        {posts.length > 0 ? (
          <ul>
            {posts.map((post) => (
              <li key={post.id}>
                <h2>{post.title}</h2>
                <p>{post.body}</p>
              </li>
            ))}
          </ul>
        ) : (
          <p>No posts found for this user.</p>
        )}
      </div>
    );
  }