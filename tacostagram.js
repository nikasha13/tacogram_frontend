function getPostsFromAPI() {
  // Replace this with the URL of the JSON API that returns an array of image URLs
  const url = 'https://3000-nikasha13-cssweek9-ppzv11nzzyi.ws-us120.gitpod.io/posts.json';
  if (url == 'YOUR_URL_GOES_HERE') {
    alert('Error: Replace url value in tacostagram.js')
  }

  // Make a GET request to the API
  fetch(url)
    .then(response => response.json())
    .then(posts => {
      const postsDiv = document.querySelector('#posts');
      postsDiv.innerHTML = ''; // Clear any existing posts

      for (let post of posts) {
        // Safely get user's first name or default to 'anonymous'
        const userName = post.user && post.user.first_name ? post.user.first_name : 'anonymous';

        // Build HTML for each post
        const html = `
          <div class="col-12 col-md-6 col-lg-4 col-xl-3 col-xxl-2">
            <h4>${userName}</h4>
            <img src="${post.image}" class="img-fluid" alt="Post image">
            <p>${post.body}</p>
          </div>
        `;

        postsDiv.innerHTML += html;
      }
    })
    .catch(error => {
      console.error('Error fetching posts:', error);
    });
}

const getPostsButton = document.querySelector('#get-posts-button');
getPostsButton.addEventListener('click', getPostsFromAPI);
