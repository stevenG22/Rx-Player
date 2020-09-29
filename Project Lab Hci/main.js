$(document).ready(function(){
    $(".next").on("click", function(){
         var currentImg = $(".imgbody");
         var nextImg = currentImg.next();

         if(nextImg.length){
             currentImg.removeClass("imgbody").css("z-index", -10);
             nextImg.addClass("imgbody").css("z-index",10);
         }
    });

     $(".prev").on("click",function(){
         var currentImg = $(".imgbody");
         var prevImg = currentImg.prev();

         if(prevImg.length){
             currentImg.removeClass("imgbody").css("z-index",-10);
             prevImg.addClass("imgbody").css("z-index",10);
         }
    });
});