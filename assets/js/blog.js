//let userName = JSON.parse(localStorage.getItem('user'));
//document.getElementById("header").innerHTML = "Hello, " + userName[0];
//function displayPosts() {
let blogPost = JSON.parse(localStorage.getItem('post'));
console.log(blogPost)

if (blogPost[4]){
    console.log('4')
    post5 = blogPost.slice(4,5)
    post4 = blogPost.slice(3,4)
    post3 = blogPost.slice(2,3)
    post2 = blogPost.slice(1,2)
    post1 = blogPost.slice(0,1)
    console.log((document.getElementById("name5").innerHTML = 'Hello, ' + post5[0][0]))
} else if (blogPost[3]){
    console.log('3')
    post4 = blogPost.slice(3,4)
    post3 = blogPost.slice(2,3)
    post2 = blogPost.slice(1,2)
    post1 = blogPost.slice(0,1)
    console.log((document.getElementById("name4").innerHTML = 'Hello, ' + post4[0][0]))
} else if (blogPost[2]){
    console.log('2')
    post3 = blogPost.slice(2,3)
    post2 = blogPost.slice(1,2)
    post1 = blogPost.slice(0,1)
    console.log((document.getElementById("name3").innerHTML = 'Hello, ' + post3[0][0]))
} else if (blogPost[1]){
    console.log('1')
    post2 = blogPost.slice(1,2)
    post1 = blogPost.slice(0,1)
    console.log((document.getElementById("name2").innerHTML = 'Hello, ' + post2[0][0]))
} 
else {
    console.log('0')
    post1 = blogPost.slice(0,1)
    console.log((document.getElementById("name1").innerHTML = 'Hello, ' + post1[0][0]))
} 




//}
//displayPosts();
