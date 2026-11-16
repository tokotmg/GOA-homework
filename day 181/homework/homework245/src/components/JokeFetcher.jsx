import React, { useEffect } from 'react';
function JokeFetcher() {
  useEffect(() => {
    const fetchJoke = async () => {
      try {
        const response = await fetch('https://api.chucknorris.io/jokes/random');
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        const data = await response.json();
        console.log('Fetched Joke Data:', data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
    fetchJoke();
  }, []);
  return (
    <div>
      <h2>Check the browser console to see the fetched API data!</h2>
    </div>
  );
}
export default JokeFetcher;
