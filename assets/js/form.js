/* function storeInput() {
     const name = [];
     let usernames = JSON.parse(localStorage.getItem('user'));
     if (usernames === null) {
          usernames = [];
     };
     if (usernames.length >= 10) {
          usernames.length = 0;
     }
     const newUsername = document.getElementById('username').value;
     
      if (usernames === null) {
          name.push(newUsername);
          localStorage.setItem("user",JSON.stringify(name));
     }
     else {
          usernames.push(newUsername);
          localStorage.setItem("user", JSON.stringify(usernames));   
     }
     if (newUsername !== '') {
          window.location.assign('blog.html')
     } else {
          alert("Please enter your Username to proceed")
     }
     
     } */

     function storeInput() {
          const blogPost = [];
          let posts = JSON.parse(localStorage.getItem('post'));
          if (posts === null) {
               posts = [];
          };
          if (posts.length > 5) {
               posts.length = 0;
          }
          var username = document.getElementById('username').value;
          var title = document.getElementById('title').value;
          var content = document.getElementById('content').value;
          const newPost = [username, title, content]
          if (posts === null) {
               blogPost.push(newPost);
               localStorage.setItem('post',JSON.stringify(blogPost));
          }
          else {
               posts.push(newPost);
               localStorage.setItem("post", JSON.stringify(posts));   
          }
          if (username !== '' && title !== '' && content !== '') {
               window.location.assign('blog.html')
          } else {
               alert("Please enter your Username, Title, and Content to proceed")
          }

     }
