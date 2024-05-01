
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
   if (input1 === '' || input2 === '' ||input3 === ''){
    alert("Please enter your username, title, and content")
   } else {
    location.href = 'blog.html'
   }
var usernameStr = JSON.stringify(input1)
var titleStr = JSON.stringify(input2)
var contentStr = JSON.stringify(input3)
localStorage.setItem('username', usernameStr)
localStorage.setItem('title', titleStr)
localStorage.setItem('content', contentStr)

}
