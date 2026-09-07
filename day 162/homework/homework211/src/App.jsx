import Greeting from './Greeting';
import UserCard from './UserCard';
import Avatar from './Avatar';
import StatusMessage from './isOnline';

function App() {
  return (
    <div>
      <Greeting name='თორნიკე' />
      <UserCard username='თორნიკე' age='19'/>
      <Avatar />
      <StatusMessage isOnline={true}/>
    </div>
  );
}

export default App;
