$(function() {
    /*to top*/
    var ws = $(window).scrollTop();
    var onePage = $(window).height();
    $(window).scroll(function() {
        var ws = $(window).scrollTop();
        var top = $(".to_top");
        ws > onePage ? 'ws>' + onePage + ',' + top.fadeIn().css("display", "block") : top.fadeOut();
    })
    var $top = parseInt($(window).scrollTop() / $(window).height()) + 1;
    $(".to_top").click(function() {
        $("html,body").animate({ scrollTop: 0 }, 500 * $top)
    })

    /*顶部导航*/
    $(".t_nav").slide({ type: "menu", titCell: "li", targetCell: ".nav_con", effect: "fade", delayTime: 300, triggerTime: 0, returnDefault: true });
    
    /*搜索*/
    $(".search_wrap").slide({ type: "menu", titCell: "li", targetCell: ".form", effect: "slideDown", delayTime:100,triggerTime: 0, returnDefault: true });
    
    $('input, textarea').placeholder();
    
})
