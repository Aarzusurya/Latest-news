export default async function handler(req, res) {
  const response = await fetch(
    `https://newsapi.org/v2/everything?q=india&apiKey=YOUR_API_KEY`
  );
  const data = await response.json();
  res.status(200).json(data);
}
