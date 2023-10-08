const posts = [];
let lastActivityTime = null;

function createPost(post) {
  return new Promise((resolve) => {
    setTimeout(() => {
      posts.push(post);
      updateLastUserActivityTime().then((updatedTime) => {
        console.log("Posts:", posts);
        console.log("Last Activity Time:", updatedTime);
        resolve(post);
      });
    }, 1000);
  });
}

function deletePost() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (posts.length > 0) {
        const deletedPost = posts.pop();
        console.log(`Deleted Post: ${deletedPost}`);
        resolve(posts);
      } else {
        reject("No posts to delete.");
      }
    }, 1000);
  });
}

function updateLastUserActivityTime() {
  return new Promise((resolve) => {
    setTimeout(() => {
      lastActivityTime = new Date();
      console.log(`Last Activity Time Updated: ${lastActivityTime}`);
      resolve(lastActivityTime);
    }, 1000);
  });
}
