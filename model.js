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

    _posts.push({ id, text });
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
      const lastIdx = _findLastIndex(_posts.comments);
      const id = _generateId(true, lastIdx);

      targetPost.comments.push({ id, text });
    }
  };

  const removeComment = (postId, commentId) => {
    const targetPost = _findPost(postId);

    if (targetPost) {
      const commentIdx = targetPost.findIndex((comment) => comment.id === commentId);

      if (commentId !== -1) {
        targetPost.comments.splice(commentIdx, 1);
      }
    }
  };

  const _generateId = (isPost, currLastIdx) => {
    const char = isPost ? "p" : "c";
    const idx = currLastIdx++;
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

const tweeter = Tweeter();

// Test adding a post
tweeter.addPost("This is my own post!");
console.log(tweeter.getPosts());
// Should add: {text: "This is my own post!", id: "p3", comments: []}

// Test removing a post
tweeter.removePost("p1");
console.log(tweeter.getPosts());
// Should only have two posts left

// Test adding comments
tweeter.addComment("p3", "Damn straight it is!");
tweeter.addComment("p2", "Second the best!");
console.log(tweeter.getPosts());

// Test removing comments
tweeter.removeComment("p2", "c6");
console.log(tweeter.getPosts());
