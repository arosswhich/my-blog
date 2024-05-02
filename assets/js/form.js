
//  function newArray(){
    // let input1 = document.getElementById('username').value;
    // let input2 = document.getElementById('title').value;
    // let input3 = document.getElementById('content').value;
    // let userArray = [];
    // userArray.push(input1, input2,input3);
    // console.log(userArray);
    // let info = JSON.stringify(userArray);
    // localStorage.setItem('info', info);
    // let retInfo = localStorage.getItem('info');
    // let retArray = JSON.parse(retInfo);
    // console.log(retArray)
// }

function storeInput() {
   var input1 = document.getElementById('username').value;
   var input2 = document.getElementById('title').value;
   var input3 = document.getElementById('content').value; 
   const blogPosts = [];
   blogPosts.push(input1, input2, input3)
   console.log(blogPosts)
   localStorage.setItem('blogPost', JSON.stringify(blogPosts));
   localStorage.setItem('username', JSON.stringify(input1))
   localStorage.setItem('title', JSON.stringify(input2))
   localStorage.setItem('content', JSON.stringify(input3))
   if (input1 === '' || input2 === '' ||input3 === ''){
    alert("Please enter your username, title, and content")
   } else {
    location.href = 'blog.html'
   }

}
