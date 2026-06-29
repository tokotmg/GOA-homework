async function fetchJoke() {
  try {
    const response = await fetch('https://api.chucknorris.io/jokes/random');
    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.error('Error fetching the joke:', error);
  }
}
fetchJoke();
fetch('https://dog.ceo/api/breeds/image/random').then(r => r.json()).then(d => console.log(d.message));
async function getTodoById(id) {
  try {
    const response = await fetch(`https://jsonplaceholder.typicode.com/todos/1`);
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    const todo = await response.json();
    console.log(todo);
  } catch (error) {
    console.error("Failed to fetch data:", error);
  }
}
getTodoById(5);
async function makeRequest() {
  try {
    const response = await fetch('https://wrongurlbro.com');
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.log('An error occurred!');
  }
}
makeRequest();
async function fetchSequentially() {
  try {
    const response1 = await fetch('https://dog.ceo/api/breeds/image/random');
    const data1 = await response1.json();
    console.log('First Response:', data1);
    const response2 = await fetch('https://catfact.ninja/fact');
    const data2 = await response2.json();
    console.log('Second Response (Cat Fact):', data2);
  } catch (error) {
    console.error('Error fetching data:', error);
  }
}
fetchSequentially();

