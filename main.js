import { Tweeter } from "./model.js";
import { Renderer } from "./render.js";

const tweeter = Tweeter();
const renderer = Renderer();

const loadPosts = () => {
  renderer.renderPosts(tweeter.getPosts());
};

loadPosts();

const postsContainer = document.querySelector(".posts-container");

const tweetBtn = document.querySelector("#tweet-btn");

tweetBtn.addEventListener("click", () => {
  const inputElement = document.querySelector("#tweet-input-field");
  tweeter.addPost(inputElement.value);
  loadPosts();
});

//Event delegation:
postsContainer.addEventListener("click", (ev) => {
  if (ev.target.classList.contains("delete-tweet-btn")) {
    const id = ev.target.dataset.id;
    tweeter.removePost(id);
    loadPosts();
  }

  if (ev.target.classList.contains("comment-btn")) {
    const id = ev.target.dataset.id;
    const inputElement = document.querySelector(`#${id}`);
    tweeter.addComment(id, inputElement.value);
    inputElement.textContent = "";
    loadPosts();
  }

  if (ev.target.classList.contains("delete-comment-btn")) {
    const commentId = ev.target.dataset.idc;
    const postId = ev.target.dataset.idp;
    tweeter.removeComment(postId, commentId);
    loadPosts();
  }
});
