export const Renderer = () => {
  const posts = document.querySelector(".posts-container");

  const renderPosts = (posts) => {
    //empty the posts
    posts.innerHTML = "";
    //create and add elements

    //loop through and append html to posts
    //both comments and posts are generated
    //post ID is data-id attribute, same for comment ID
    //css styling
    //delete buttons for posts and comments
  };

  return renderPosts;
};
