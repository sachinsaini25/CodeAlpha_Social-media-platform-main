// Follow/Unfollow
document.getElementById("followBtn").onclick = function () {
  this.textContent = this.textContent === "Follow" ? "Following" : "Follow";
};

// Create Post
function createPost() {
  const postText = document.getElementById("postText").value;
  if (postText.trim() === "") return;

  const post = document.createElement("div");
  post.className = "post";

  const content = document.createElement("p");
  content.textContent = postText;

  const likeBtn = document.createElement("button");
  likeBtn.className = "like-button";
  likeBtn.textContent = "Like";

  likeBtn.onclick = function () {
    const isLiked = likeBtn.classList.toggle("liked");
    likeBtn.textContent = isLiked ? "Liked ❤️" : "Like";
  };

  post.appendChild(content);
  post.appendChild(likeBtn);

  document.getElementById("feed").prepend(post);
  document.getElementById("postText").value = "";
}
