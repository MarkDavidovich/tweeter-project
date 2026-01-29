import { Tweeter } from "./model.js";
import { Renderer } from "./render.js";

const tweeter = Tweeter();
const renderer = Renderer();

const loadPosts = () => {
  renderer.renderPosts(tweeter.getPosts());
};

const addBtnEventListeners = (buttons, func) => {
  for (const button of buttons) {
    button.addEventListener("click", func);
  }
};

loadPosts();

const twitBtn = document.querySelector("#tweet-btn");
const deletePostBtns = document.querySelectorAll(".delete-tweet-btn");
const deleteCommentBtns = document.querySelectorAll(".delete-comment-btn");
const commentBtns = document.querySelectorAll(".comment-btn");

twitBtn.addEventListener("click", () => {
  const inputElement = document.querySelector("#tweet-input-field");
  console.log("this shid works?");
  tweeter.addPost(inputElement.value);
  loadPosts();
});

addBtnEventListeners(deletePostBtns, () => {});
addBtnEventListeners(deleteCommentBtns, () => {});
addBtnEventListeners(commentBtns, () => {});

// for (const button of deletePostBtns) {
//   button.addEventListener("click", () => {});
// }

// for (const button of deleteCommentBtns) {
//   button.addEventListener("click", () => {});
// }

// for (const button of commentBtns) {
//   button.addEventListener("click", () => {});
// }
