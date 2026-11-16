import Header from './components/Header';
import Sidebar from './components/Sidebar';
import Content from './components/Content';
import ThemeSwitcher from './components/ThemeSwitcher';
import JokeFetcher from './components/JokeFetcher';
import LiveTextMirror from './components/LiveTextMirror';
import UncontrolledInputExample from './components/UncontrolledComponent';

export default function App() {
  return (
    <div className="app-container">
      <Header />
      <div className="main-body">
        <Sidebar />
        <Content />
      </div>
      <ThemeSwitcher />
      <JokeFetcher />
      <LiveTextMirror />
      <UncontrolledInputExample />
    </div>
  );
}
