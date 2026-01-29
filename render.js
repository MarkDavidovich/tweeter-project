export const Renderer = () => {
  const renderPosts = (posts) => {
    const posts = document.querySelector(".posts-container");
    posts.innerHTML = "";

    for (const post of posts) {
      posts.appendChild(_createPostElement(post.text, post.id, post.comments));
    }
  };

  const _createPostElement = (text, id, comments) => {
    const post = document.createElement("div");
    const postText = document.createElement("h3");
    const commentsContainer = document.createElement("ul");
    const commentInputContainer = document.createElement("div");
    const commentTextInput = document.createElement("input");
    const commentBtn = document.createElement("button");
    const deletePostBtn = document.createElement("button");

    post.dataset.id = id;
    post.classList.add("post");
    postText.classList.add("post-title");
    commentsContainer.classList.add("comments-container");
    commentInputContainer.classList.add("comment-input-container");
    commentTextInput.id = "comment-input-field";
    commentBtn.id = "comment-btn";
    deletePostBtn.id = "delete-tweet-btn";

    commentTextInput.setAttribute("placeholder", "Got something to say?");

    postText.textContent = text;

    for (const comment of comments) {
      commentsContainer.appendChild(_createCommentElement(comment.id, comment.text));
    }
  };

  const _createCommentElement = (id, text) => {
    const comment = document.createElement("li");
    const deleteCommentBtn = document.createElement("button");
    const commentText = document.createElement("p");

    comment.dataset.id = id;
    comment.classList.add("comment");
    deleteCommentBtn.classList.add("dlete-comment-btn");

    commentText.textContent = text;

    comment.appendChild(deleteCommentBtn);
    comment.appendChild(commentText);

    return comment;
  };
  return renderPosts;
};
