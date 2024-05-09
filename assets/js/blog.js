let userName = JSON.parse(localStorage.getItem('user'));
document.getElementById("header").innerHTML = "Hello, " + userName[5];
