import { Tweeter } from "./model.js";
import { Renderer } from "./render.js";

const tweeter = Tweeter();
const renderer = Renderer();

const loadPosts = () => {
  renderer.renderPosts(tweeter.getPosts());
};

loadPosts();

const tweetBtn = document.querySelector("#tweet-btn");
const deletePostBtns = document.querySelectorAll(".delete-tweet-btn");
const deleteCommentBtns = document.querySelectorAll(".delete-comment-btn");
const commentBtns = document.querySelectorAll(".comment-btn");

tweetBtn.addEventListener("click", () => {
  const inputElement = document.querySelector("#tweet-input-field");
  tweeter.addPost(inputElement.value);
  loadPosts();
});

for (const button of deletePostBtns) {
  button.addEventListener("click", () => {
    const id = button.dataset.id;
    tweeter.removePost(id);
    loadPosts();
  });
}

for (const button of deleteCommentBtns) {
  button.addEventListener("click", () => {
    const commentId = button.dataset.idc;
    const postId = button.dataset.idp;
    tweeter.removeComment(postId, commentId);
    loadPosts();
  });
}

for (const button of commentBtns) {
  button.addEventListener("click", () => {
    const id = button.dataset.id;
    const inputElement = document.querySelector(`#${id}`);
    tweeter.addComment(id, inputElement.value);
    inputElement.textContent = "";
    loadPosts();
  });
}
