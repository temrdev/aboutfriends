// script.js
document.addEventListener("DOMContentLoaded", () => {
  // Проверяем, на какой мы странице
  if (window.location.pathname.includes("friend.html")) {
    const params = new URLSearchParams(window.location.search);
    const id = parseInt(params.get("id"));
    const friend = friends.find(f => f.id === id);

    if (friend) {
      document.getElementById("friend-name").textContent = friend.name;
      document.getElementById("friend-nickname").textContent = friend.nickname;
      const img = document.getElementById("friend-image");
      img.src = friend.image;
      img.alt = friend.name;
    } else {
      document.body.innerHTML = "<h2 style='text-align:center;'>Friend not found 😥</h2>";
    }
  }
});
