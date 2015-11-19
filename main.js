// $(document).ready(function(){
//     $(".content").css("padding-bottom", function () {
//         var h = $(window).height();
//         var c2 = $(".detail-row").outerHeight();
//         var c3 = $(".content").height() + 50;
//         return h - (c2 + c3);
//     });

//     // $(document).scroll(function() {
//     //     var scrollTop = $(document).scrollTop();
//     //     if(scrollTop >= 240) {
//     //         $(".head-row").css("position", "fixed");
//     //         $(".head-row").css("padding-top", 0);
//     //     }
//     // });
// });

$(document).ready(function () {
    var magic = $(".magic");
    setInterval(function () {
        var r = Math.random() * 256;
        var g = Math.random() * 256;
        var b = Math.random() * 256;
        magic.animate({ color: jQuery.Color(r, g, b, 1)}, 1500)
    }, 8000);
});