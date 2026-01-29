import { Tweeter } from "./model.js";
import { Renderer } from "./render.js";

const tweeter = Tweeter();
const renderer = Renderer();

const loadPosts = () => {
  renderer.renderPosts(tweeter.getPosts());
};

loadPosts();

const twitBtn = document.querySelector("#tweet-btn");
const deletePostBtn = document.querySelectorAll(".delete-tweet-btn");
const deleteCommentBtn = document.querySelectorAll(".delete-comment-btn");
const commentBtn = document.querySelectorAll(".comment-btn");

twitBtn.addEventListener("click", () => {
  const inputElement = document.querySelector("#tweet-input-field");
  console.log("this shid works?");
  tweeter.addPost(inputElement.value);
  loadPosts();
});
