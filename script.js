document.addEventListener("DOMContentLoaded", function () {
  document.getElementById("openButton").addEventListener("click", openWebsite);
});

function openWebsite() {
  var url = document.getElementById("websiteURL").value;
  var iframe = document.getElementById("websiteFrame");
  var errorMessage = document.getElementById("error-message");

  if (url) {
    if (!url.startsWith("http://") && !url.startsWith("https://")) {
      url = "http://" + url;
    }

    // Use the provided Vercel URL for the proxy
    var proxyUrl = `https://proxyheaven.vercel.app/api/proxy?url=${encodeURIComponent(url)}`;

    fetch(proxyUrl)
      .then(response => response.text())
      .then(data => {
        iframe.srcdoc = data;
        iframe.style.display = "block";
        errorMessage.style.display = "none";
      })
      .catch(err => {
        errorMessage.style.display = "block";
        iframe.style.display = "none";
      });
  } else {
    errorMessage.style.display = "block";
    iframe.style.display = "none";
  }
}
