import { useParams, Link } from 'react-router-dom';
import { faqData } from './faqData';
export default function QuestionDetail() {
  const { id } = useParams();
  const faq = faqData.find((item) => item.id === id);
  if (!faq) {
    return (
      <div style={{ padding: '2rem', maxWidth: '600px', margin: '0 auto' }}>
        <h2>Question not found</h2>
        <Link to="/">← Back to all questions</Link>
      </div>
    );
  }
  return (
    <div style={{ padding: '2rem', maxWidth: '600px', margin: '0 auto' }}>
      <Link to="/" style={{ textDecoration: 'none', color: '#555' }}>
        ← Back to all questions
      </Link>
      <h2 style={{ marginTop: '1.5rem' }}>{faq.question}</h2>
      <p style={{ lineHeight: '1.6', fontSize: '1.1rem' }}>{faq.answer}</p>
    </div>
  );
}
