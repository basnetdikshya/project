let newsData = [];

function addNews() {
  let title = document.getElementById("title").value;
  let content = document.getElementById("content").value;
  let author = document.getElementById("author").value;

  if (title === "" || content === "" || author === "") {
    alert("Please fill all fields!");
    return;
  }

  let news = {
    title: title,
    content: content,
    author: author,
    date: new Date().toLocaleString()
  };

  newsData.unshift(news);

  document.getElementById("title").value = "";
  document.getElementById("content").value = "";
  document.getElementById("author").value = "";

  displayNews();
}

function displayNews() {
  let container = document.getElementById("newsContainer");
  container.innerHTML = "";

  newsData.forEach((news, index) => {
    container.innerHTML += `
      <div class="news-card">
        <h3>${news.title}</h3>
        <p>${news.content}</p>
        <small>By ${news.author} | ${news.date}</small>
        <br>
        <button class="delete-btn" onclick="deleteNews(${index})">Delete</button>
      </div>
    `;
  });
}

function deleteNews(index) {
  newsData.splice(index, 1);
  displayNews();
}
