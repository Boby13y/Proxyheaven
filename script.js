document.getElementById("goButton").addEventListener("click", function () {
  let url = document.getElementById("urlInput").value;

  if (!url.startsWith("http://") && !url.startsWith("https://")) {
    url = "http://" + url;
  }

  // Make sure you have a proxy server running on the backend
  document.getElementById("proxyFrame").src = `/proxy?url=${encodeURIComponent(url)}`;
  document.getElementById("proxyFrame").style.display = "block";
});
