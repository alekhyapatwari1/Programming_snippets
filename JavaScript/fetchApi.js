async function fetchUserData() {
  try {
    const response = await fetch('https://jsonplaceholder.typicode.com/users/1');
    const data = await response.json();
    console.log(`User Name: ${data.name}`);
  } catch (error) {
    console.error("Error fetching data:", error);
  }
}

fetchUserData();
