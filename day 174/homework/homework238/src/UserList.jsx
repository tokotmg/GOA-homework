import { useEffect } from 'react';
function UserList() {
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((response) => response.json())
      .then((data) => console.log(data))
      .catch((error) => console.error('Error fetching users:', error));
  }, []);
  return <div>Check the console for user data.</div>;
}
export default UserList;
