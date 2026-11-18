import Header from '../components/Header';
function Register() {
  return (
    <div>
      <Header />
      <main className="page-content">
        <h1>Create an Account</h1>
        <p>
          Join our community today to unlock member perks, save your favorites, 
          and receive updates on new releases.
        </p>
        <form onSubmit={(e) => e.preventDefault()}>
          <div>
            <label>Full Name: </label>
            <input type="text" placeholder="Jane Doe" required />
          </div>
          <div>
            <label>Email Address: </label>
            <input type="email" placeholder="jane@example.com" required />
          </div>
          <div>
            <label>Password: </label>
            <input type="password" placeholder="••••••••" required />
          </div>
          <button type="submit">Register</button>
        </form>
      </main>
    </div>
  );
}
export default Register;
