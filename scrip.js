
   var side = document.querySelector(".side-nav")

   var menu = document.querySelector(".menu")

   var flag = 1

   menu.addEventListene("click", function(){
    if(flag == 1){
        side.style.right = "0px"
        flag = 0
    }
    else{
        side.style.right = "-300px"
        flage = 1
    }
   })