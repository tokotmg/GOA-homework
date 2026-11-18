import Header from '../components/Header';
function Home() {
  return (
    <div>
      <Header />
      <main className="page-content">
        <h1>Welcome to Our Home Page</h1>
        <p>
          We are glad you stopped by. Explore our site to learn more about who we are, 
          browse our full menu of offerings, or create an account to get started.
        </p>
      </main>
    </div>
  );
}
export default Home;
