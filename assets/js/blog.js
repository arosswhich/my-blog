const usernameStr2 = localStorage.getItem('username')
const username2 = JSON.parse(usernameStr2)
const titleStr2 = localStorage.getItem('title')
const title2 = JSON.parse(titleStr2)
const contentStr2 = localStorage.getItem('content')
const content2 = JSON.parse(contentStr2)
document.getElementById('name').innerHTML = username2;
