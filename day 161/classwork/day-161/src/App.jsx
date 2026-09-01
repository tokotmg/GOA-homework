import ComponentA from './components/ComponentA';
import ComponentB from './components/ComponentB';
import ComponentC from './components/ComponentC';

function App() {
  return (
    <div style={{ maxWidth: '600px', margin: '0 auto', padding: '20px' }}>
      <header>
        <h1>My React Application</h1>
        <p>Rendering multiple custom components below:</p>
      </header>
      <main>
        <ComponentA />
        <ComponentB />
        <ComponentC />
      </main>
    </div>
  );
}

export default App;
