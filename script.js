document
  .getElementById("new-site-button")
  .addEventListener("click", submitButtonHandler);

function submitButtonHandler(e) {
  saveBookmark(e);
  fetchBookmarks();
}

function saveBookmark(e) {
  const siteName = document.getElementById("site-name-input").value;
  const siteUrl = document.getElementById("site-url-input").value;

  if (siteName && siteUrl) {
    const bookmark = {
      name: siteName,
      URL: siteUrl,
    };
    // localStorage.setItem("test", "hello");
    // console.log(localStorage.getItem("test"));
    // localStorage.removeItem("test");
    // console.log(localStorage.getItem("test"));

    if (localStorage.getItem("bookmarks") === null) {
      const bookmarks = [];

      bookmarks.push(bookmark);

      localStorage.setItem("bookmarks", JSON.stringify(bookmarks));
    } else {
      const bookmarks = JSON.parse(localStorage.getItem("bookmarks"));

      bookmarks.push(bookmark);

      localStorage.setItem("bookmarks", JSON.stringify(bookmarks));
    }
  }

  e.preventDefault();
}

function deleteBookmark(url) {
  console.log(url);
}

function fetchBookmarks() {
  const bookmarks = JSON.parse(localStorage.getItem("bookmarks"));
  const bookmarksResult = document.getElementById("bookmarksResult");
  bookmarksResult.innerHTML = "";

  for (let i = 0; i < bookmarks.length; i++) {
    const name = bookmarks[i].name;
    const url = bookmarks[i].URL;
    bookmarksResult.innerHTML +=
      '<div id="sites">' +
      '<div class="site">' +
      '<div class="content">' +
      '<div class="actions">' +
      `<h2 class="text">${name}</h2>` +
      `<a target = "_blank" href="${url}"><button class="visit">visit</button></a>` +
      `<a onclick="deleteBookmark"  href="${"#"}"><button class="delete">delete</button></a>` +
      "</div>" +
      "</div>" +
      "</div>" +
      "</div>";
  }
}
