let blogPost = JSON.parse(localStorage.getItem('post'));
console.log(blogPost)
if (blogPost[0]) {
    console.log('0')
    post1 = blogPost.slice(0,1)
    console.log('Post One')
    console.log((document.getElementById("name1").innerHTML = 'Name: ' + post1[0][0]));
    console.log((document.getElementById("title1").innerHTML = 'Title: ' + post1[0][1]));
    console.log((document.getElementById("content1").innerHTML = 'Content: ' + post1[0][2]));
 }
 if (blogPost[1]) {
    console.log('1')
    post2 = blogPost.slice(1,2)
    console.log('Post Two')
    console.log((document.getElementById("name2").innerHTML = 'Name: ' + post2[0][0]));
    console.log((document.getElementById("title2").innerHTML = 'Title: ' + post2[0][1]));
    console.log((document.getElementById("content2").innerHTML = 'Content: ' + post2[0][2]));
 }
 if (blogPost[2]) {
    console.log('2')
    post3 = blogPost.slice(2,3)
    console.log('Post Three')
    console.log((document.getElementById("name3").innerHTML = 'Name: ' + post3[0][0]));
    console.log((document.getElementById("title3").innerHTML = 'Title: ' + post3[0][1]));
    console.log((document.getElementById("content3").innerHTML = 'Content: ' + post3[0][2]));
 }
 if (blogPost[3]) {
    console.log('3')
    post4 = blogPost.slice(3,4)
    console.log('Post Four')
    console.log((document.getElementById("name4").innerHTML = 'Name: ' + post4[0][0]));
    console.log((document.getElementById("title4").innerHTML = 'Title: ' + post4[0][1]));
    console.log((document.getElementById("content4").innerHTML = 'Content: ' + post4[0][2]));
 }
 if (blogPost[4]) {
    console.log('4')
    post5 = blogPost.slice(4,5)
    console.log('Post Five')
    console.log((document.getElementById("name5").innerHTML = 'Name: ' + post5[0][0]));
    console.log((document.getElementById("title5").innerHTML = 'Title: ' + post5[0][1]));
    console.log((document.getElementById("content5").innerHTML = 'Content: ' + post5[0][2]));
 }





