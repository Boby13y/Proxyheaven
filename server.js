const express = require("express");
const cors = require("cors");
const axios = require("axios");

const app = express();
app.use(cors());

app.get("/proxy", async (req, res) => {
  const { url } = req.query;
  if (!url) return res.status(400).send("URL is required");

  try {
    const response = await axios.get(url, { responseType: "text" });
    res.send(response.data);
  } catch (error) {
    res.status(500).send("Error fetching website content");
  }
});

app.listen(3000, () => console.log("Proxy server running on port 3000"));
