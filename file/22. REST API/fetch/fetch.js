const getButton = document.getElementById("get");
const postButton = document.getElementById("post");

getButton.addEventListener("click", () => {
  fetch("http://localhost:8080/feed/posts")
    .then(response => response.json())
    .then(responseData => console.log(responseData))
    .catch(error => console.log(error));
});

postButton.addEventListener("click", () => {
  fetch("http://localhost:8080/feed/post", {
    method: "POST",
    body: JSON.stringify({
      title: "My title",
      content: "My content in there"
    }),
    headers: { "Content-Type": "application/json" }
  })
    .then(response => response.json())
    .then(responseData => console.log(responseData))
    .catch(error => console.log(error));
});
