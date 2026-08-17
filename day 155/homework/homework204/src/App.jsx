import Header from './Header';
import PostContent from './PostContent';

export default function App() {
  const samplePost = {
    blogName: "Tech Insights Blog",
    title: "Getting Started with React",
    text: "React makes it painless to create interactive UIs. Build encapsulated components that manage their own state."
  };

  return (
    <div className="app-container">
      <Header blogName={samplePost.blogName} />
      <main>
        <PostContent 
          title={samplePost.title} 
          text={samplePost.text} 
        />
      </main>
    </div>
  );
}
