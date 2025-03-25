module.exports = async (req, res) => {
  const { url } = req.query;

  if (!url) {
    return res.status(400).send('URL is required');
  }

  try {
    const response = await fetch(url);  // Fetch the content of the requested website
    const body = await response.text();  // Get the HTML content

    res.setHeader('Content-Type', 'text/html');
    res.send(body);  // Return the HTML content
  } catch (error) {
    res.status(500).send('Error fetching website content');
  }
};
