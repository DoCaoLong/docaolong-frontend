import $ from "jquery";
$(document).ready(function() {
    $(".accordion .item .header").click(function(e) {
        e.preventDefault(); // ngăn sự kiện chuyển trang
        $(this).toggleClass(".item");
        $(".accordion .item .panel").not($(this).next()).slideUp(400);
        $(this).next().slideToggle();
    });
});