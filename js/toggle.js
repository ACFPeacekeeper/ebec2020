$(document).ready(function () {
    var $content = $(".content").hide();
    $(".toggle").on("click", function (e) {
        $(this).toggleClass("expanded");
        $(this).next().slideToggle();

    });
});