export const Tweeter = () => {
  const _posts = [
    {
      text: "First post!",
      id: "p1",
      comments: [
        { id: "c1", text: "First comment on first post!" },
        { id: "c2", text: "Second comment on first post!!" },
        { id: "c3", text: "Third comment on first post!!!" },
      ],
    },
    {
      text: "Aw man, I wanted to be first",
      id: "p2",
      comments: [
        { id: "c4", text: "Don't worry second poster, you'll be first one day." },
        { id: "c5", text: "Yeah, believe in yourself!" },
        { id: "c6", text: "Haha second place what a joke." },
      ],
    },
  ];
  let _postIdCounter;
  let _commentIdCounter;

  const getPosts = () => {
    return [..._posts];
  };

  const addPost = (text) => {
    //!validation of text?

    const lastIdx = _findLastIndex(_posts);
    const id = _generateId(true, lastIdx);

    _posts.push({ text, id, comments: [] });
  };

  const removePost = (postId) => {
    const postIdx = _posts.findIndex((post) => post.id === postId);

    if (postIdx !== -1) {
      _posts.splice(postIdx, 1);
    }
  };

  const addComment = (postId, text) => {
    const targetPost = _findPost(postId);
    //!validation of text?
    //!check if comments exist?

    if (targetPost) {
      const lastIdx = _findLastIndex(targetPost.comments);
      const id = _generateId(false, lastIdx);

      targetPost.comments.push({ id, text });
    }
  };

  const removeComment = (postId, commentId) => {
    const targetPost = _findPost(postId);
    console.log(targetPost);
    if (targetPost) {
      const commentIdx = targetPost.comments.findIndex((comment) => comment.id === commentId);

      if (commentId !== -1) {
        targetPost.comments.splice(commentIdx, 1);
      }
    }
  };

  const _generateId = (isPost, currLastIdx) => {
    const char = isPost ? "p" : "c";
    const idx = +currLastIdx + 1;
    return `${char + idx}`;
  };

  const _findLastIndex = (array) => {
    //check posts for the last element, then access the last comment or post, parseInt and return it
    if (array.length > 0) {
      const id = array[array.length - 1].id;
      return id.slice(1);
    }

    return 1;
  };

  const _findPost = (postId) => {
    return _posts.find((post) => post.id === postId);
  };

  return {
    getPosts,
    addPost,
    removePost,
    addComment,
    removeComment,
  };
};
