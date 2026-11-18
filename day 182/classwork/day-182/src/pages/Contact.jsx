import Header from '../components/Header';
function Contact() {
  return (
    <div>
      <Header />
      <main className="page-content">
        <h1>Contact Us</h1>
        <p>
          Have a question or feedback? Reach out to our support team anytime.
        </p>
        <p><strong>Email:</strong> hello@example.com</p>
        <p><strong>Phone:</strong> (555) 123-4567</p>
        <p><strong>Address:</strong> 123 Main Street, Suite 100</p>
      </main>
    </div>
  );
}
export default Contact;
