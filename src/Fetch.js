export default function Fetch() {
  async function getResponse() {
    const response = await fetch('http://example.com', {
      method: 'GET',
      mode: 'cors',
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const data = await response.text();
    console.log(data);
  }
  return getResponse();
}
