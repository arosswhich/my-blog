
var blogPosts = [];
function storeInput() {
const name = [];
let usernames = JSON.parse(localStorage.getItem('user'));
if (usernames === null) {
     usernames = [];
};
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

}
