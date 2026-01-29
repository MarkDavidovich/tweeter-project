export const Renderer = () => {
  const renderPosts = (posts) => {
    const postsContainer = document.querySelector(".posts-container");
    postsContainer.innerHTML = "";

    for (const post of posts) {
      postsContainer.appendChild(_createPostElement(post.text, post.id, post.comments));
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
    commentTextInput.classList.add("comment-input-field");
    commentBtn.classList.add("comment-btn");
    deletePostBtn.classList.add("delete-tweet-btn");

    commentTextInput.setAttribute("placeholder", "Got something to say?");

    postText.textContent = text;
    commentBtn.textContent = "Comment";
    deletePostBtn.textContent = "Delete Post";

    post.appendChild(postText);
    post.appendChild(commentsContainer);
    for (const comment of comments) {
      commentsContainer.appendChild(_createCommentElement(comment.id, comment.text));
    }
    post.appendChild(commentInputContainer);
    commentInputContainer.appendChild(commentTextInput);
    commentInputContainer.appendChild(commentBtn);
    post.appendChild(deletePostBtn);

    return post;
  };

  const _createCommentElement = (id, text) => {
    const comment = document.createElement("li");
    const deleteCommentBtn = document.createElement("button");
    const commentText = document.createElement("p");

    comment.dataset.id = id;
    comment.classList.add("comment");
    commentText.classList.add("comment-text");
    deleteCommentBtn.classList.add("delete-comment-btn");

    commentText.textContent = text;
    deleteCommentBtn.textContent = "✖";

    comment.appendChild(deleteCommentBtn);
    comment.appendChild(commentText);

    return comment;
  };

  return { renderPosts };
};
