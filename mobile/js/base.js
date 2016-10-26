$(document).ready(function () {
    var menuBtn = $("a.menuBtn");
    var menuMain = $("ul.menuMain");
    var close = $("i.close");
    var mainOne = $(".mainOne h3");
    var winHeight = $(window).height();

    //动态获取滚动条距离顶部的距离
    $(window).scroll(function () {
        var $window = $(window).scrollTop();
        //console.log($window);
        if ($window <= 5) {
            $(".head").css("background", "none");
        }
        if ($window > 5) {
            $(".head").css("background", "#101125");
        }
        if ($window >= 540) {
            $("a.liOne").addClass("indexOne");
            $("a.liTwo").addClass("indexTwo");
            $("a.liThree").addClass("indexThree");
        }
    });

    //左上角菜单点击打开
    menuBtn.bind("click", function () {
        var this_ = $(this);
        this_.animate({
            opacity:0
        }, 100, function () {
            menuMain.css("height", winHeight + "px");
            $("body").css("overflow", "hidden");
            menuMain.animate({
                width: '100%',
                opacity:1
            }, 100);
            close.click(function () {
                menuMain.animate({
                    width: '0%',
                    opacity: 0
                }, 100);
                this_.animate({
                    opacity: 1
                }, 100);
                $("body").css("overflow", "initial");
            });
            menuMain.find("li").click(function () {
                menuMain.animate({
                    width: '0%',
                    opacity: 0
                }, 100);
                this_.animate({
                    opacity: 1
                }, 100);
                $("body").css("overflow", "initial");
            });
        });
    });


    //人才招聘内容显示和隐藏
    function slideUpDown(cl,main) {
        $(cl).click(function () {
            var this_ = $(this);
            if (this_.hasClass("title")) {
                this_.removeClass("title");
                this_.next(main).slideUp(300);
            } else {
                this_.addClass("title");
                this_.next(main).slideDown(300);
            }
        });
    }
    slideUpDown(".mainOne a", ".textMain");


    //选项卡
    function tabS() {
        var abstractMenuA = $(".abstractMenu").children("a");
        var MTextOne = $("div.MTextOne");
        abstractMenuA.bind("click", function () {
            var this_ = $(this);
            if (this_.hasClass("on")) {
                MTextOne.eq(abstractMenuA.index(this)).show().siblings().hide();
            } else {
                this_.addClass("on").siblings("a").removeClass("on");
                MTextOne.eq(abstractMenuA.index(this)).show().siblings().hide();
            }
        });
    }
    tabS();
});