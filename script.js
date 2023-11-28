$(document).ready(function(){
    $("#image").hover(function(){
        $(this).css("filter","grayscale(100%)")
    })
    $("#image").click(function(){
        $(this).css("filter","blur(10px)")
    })
})