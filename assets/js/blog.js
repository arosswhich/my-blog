let blogPost = JSON.parse(localStorage.getItem('post'));
console.log(blogPost)
if (blogPost[0]) {
    console.log('0')
    post1 = blogPost.slice(0,1)
    console.log('Post One')
    console.log((document.getElementById("name1").innerHTML = 'Posted by: ' + post1[0][0]));
    console.log((document.getElementById("title1").innerHTML =  post1[0][1]));
    console.log((document.getElementById("content1").innerHTML =  post1[0][2]));
 } else {
   document.getElementById("post1").classList.add("hide");
 }
 if (blogPost[1]) {
    console.log('1')
    post2 = blogPost.slice(1,2)
    console.log('Post Two')
    console.log((document.getElementById("name2").innerHTML = 'Posted by: ' + post2[0][0]));
    console.log((document.getElementById("title2").innerHTML = post2[0][1]));
    console.log((document.getElementById("content2").innerHTML = post2[0][2]));
 }  else {
   document.getElementById("post2").classList.add("hide");
 }
 if (blogPost[2]) {
    console.log('2')
    post3 = blogPost.slice(2,3)
    console.log('Post Three')
    console.log((document.getElementById("name3").innerHTML = 'Posted by: ' + post3[0][0]));
    console.log((document.getElementById("title3").innerHTML = post3[0][1]));
    console.log((document.getElementById("content3").innerHTML = post3[0][2]));
 } else {
   document.getElementById("post3").classList.add("hide");
 }
 if (blogPost[3]) {
    console.log('3')
    post4 = blogPost.slice(3,4)
    console.log('Post Four')
    console.log((document.getElementById("name4").innerHTML = 'Posted by: ' + post4[0][0]));
    console.log((document.getElementById("title4").innerHTML = post4[0][1]));
    console.log((document.getElementById("content4").innerHTML = post4[0][2]));
 } else {
   document.getElementById("post4").classList.add("hide");
 }
 if (blogPost[4]) {
    console.log('4')
    post5 = blogPost.slice(4,5)
    console.log('Post Five')
    console.log((document.getElementById("name5").innerHTML = 'Posted by: ' + post5[0][0]));
    console.log((document.getElementById("title5").innerHTML = post5[0][1]));
    console.log((document.getElementById("content5").innerHTML = post5[0][2]));
 } else {
   document.getElementById("post5").classList.add("hide");
 }




