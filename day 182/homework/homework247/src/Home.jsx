import { Link } from 'react-router-dom';
import { faqData } from './faqData';
export default function Home() {
  return (
    <div style={{ padding: '2rem', maxWidth: '600px', margin: '0 auto' }}>
      <h1>Frequently Asked Questions</h1>
      <ul style={{ listStyle: 'none', padding: 0 }}>
        {faqData.map((item) => (
          <li key={item.id} style={{ marginBottom: '1rem', fontSize: '1.2rem' }}>
            <Link to={`/faq/${item.id}`} style={{ textDecoration: 'none', color: '#0066cc' }}>
              {item.question}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
