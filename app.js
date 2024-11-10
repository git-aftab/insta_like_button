const like = document.querySelector("i");
const img = document.querySelector("#container");

img.addEventListener("dblclick",function(){
    like.style.transform = "scale(1)"
    like.style.opacity = 0.8

    setTimeout(() => {
        like.style.opacity = 0
    }, 1000);
})




// var islike = true;

// img.addEventListener("dblclick", function () {
//   if (islike == true) {
//     console.log("double click");
//     like.style.transform = "scale(1.1)";
//     islike = false;
//   } else {
//     like.style.transform = "scale(0)";
//     islike = true;
//   }
// });
