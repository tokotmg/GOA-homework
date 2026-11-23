import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
const posts = [
  {
    slug: "/post-1",
    title: "Post 1: Getting Started",
    summary: "An introduction to the first article.",
    content: "Full content for Post 1 goes here.",
  },
  {
    slug: "/post-2",
    title: "Post 2: Next Steps",
    summary: "An introduction to the second article.",
    content: "Full content for Post 2 goes here.",
  },
];
function ArticleList() {
  return (
    <main>
      <h1>Articles</h1>
      <ul>
        {posts.map((post) => (
          <li key={post.slug}>
            <Link to={post.slug}>{post.title}</Link>
            <p>{post.summary}</p>
          </li>
        ))}
      </ul>
    </main>
  );
}
function ArticlePage({ title, content }) {
  return (
    <article>
      <h1>{title}</h1>
      <p>{content}</p>
      <Link to="/">Back to articles</Link>
    </article>
  );
}
export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<ArticleList />} />
        <Route
          path="/post-1"
          element={
            <ArticlePage title={posts[0].title} content={posts[0].content} />
          }
        />
        <Route
          path="/post-2"
          element={
            <ArticlePage title={posts[1].title} content={posts[1].content} />
          }
        />
      </Routes>
    </BrowserRouter>
  );
}
