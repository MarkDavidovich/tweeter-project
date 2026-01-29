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

  getPosts = () => {
    return [..._posts];
  };

  addPost = (text) => {
    //!validation of text?
    _posts.push(text);
  };

  removePost = (postId) => {
    const postIdx = _posts.findIndex((post) => post.id === postId);

    if (postIdx !== -1) {
      _posts.splice(postIdx, 1);
    }
  };

  addComment = (postId, text) => {
    const targetPost = _findPost(postId);

    if (targetPost) {
      targetPost.comments.push(text);
    }
  };

  removeComment = (postId, commentId) => {
    const targetPost = _findPost(postId);

    if (targetPost) {
      const commentIdx = targetPost.findIndex((comment) => comment.id === commentId);

      if (commentId !== -1) {
        targetPost.comments.splice(commentIdx, 1);
      }
    }
  };

  _findPost = (postId) => {
    return _posts.find((post) => post.id === postId);
  };
};
