$(function () {
    var menuHeader = function () {
        $("#icon-bar").click(function(){
            $(".menu-header-mobile").addClass("active");
            $("body").addClass("overflow-hidden");
        });
        $("#close-mobile-menu, .menu-header-mobile .overlay").click(function(){
            $(".menu-header-mobile").removeClass("active");
            $("body").removeClass("overflow-hidden");
        })
    };
    var footerTitle = function () {
       if($(window).width() < 992) {
            $(".footer-title.has-dropdown").next().css('display', 'none');
        }
        $(".footer-title.has-dropdown").click(function() {
            $(this).toggleClass('active').next().slideToggle();
        })
    };
    menuHeader();
    footerTitle();
});