$(function () {
    //获取浏览器可视窗口大小
    function getSize() {
        var menuMain = $(".menuMainUl").height();
        var caseMainT = $(".caseMainT").width();
        var zhishi = $(".zhishi").width();
        var slideOneMain = $(".slideOneMain");
        var textMain = $(".textMain").height();
        var twoMain = $(".twoMain").height();
        var threeMain = $(".threeMain").height();
        var winHeight = $(window).height();
        var winWidth = $(window).width();
        $(".menuMainUl").css("top", (winHeight - menuMain) / 2);
        $(".allCase").css("height", winHeight + "px");
        $(".caseMainT").css("left", (winWidth - caseMainT) / 2);
        $(".zhishi").css("left", (winWidth - zhishi) / 2);
        $(".slideOneMain").css("height", winHeight + "px");
        $(".textMain").css("top", (winHeight - textMain) / 2);
        $(".twoMain").css("top", (winHeight - twoMain) / 2);
        $(".threeMain").css("top", (winHeight - threeMain) / 2);
        //alert(winHeight);
    };
    getSize();
    $(window).resize(function () {
        getSize();
    });

    //首页滚屏
    $("#slider").fullpage({
        navigation: true,
        setAllowScrolling: true,
        afterLoad: function (anchorLink, index) {  //滚屏加载后再该屏运行的动画
            if (index == 1) {
                firstAni();
            }
            if (index == 2) {
                secondAni();
                setTimeout(function () {
                    numberUp();
                }, 700);
                
            }
            if (index == 3) {
                thirdAni();
            }
        },
        onLeave: function (index, nextIndex, direction) {//滚动前的回调函数
            if (index == 1 && nextIndex == 2) {

                $(".mainLeft").removeClass("mainLeftShow");
                $(".syO").removeClass("fromeToLeft");
                $(".syT").removeClass("fromeToLeftO");
                $(".syTh").removeClass("fromeToLeftT");
                $(".syF").removeClass("fromeToLeftTh");
                $(".hx").removeClass("hxLarge");
                $(".hx").removeClass("hxRotate");
                $(".hj").removeClass("hjToTop");
                $(".yh").removeClass("yhLarge");
                $(".fousText").removeClass("textToRight");
                $(".textT").removeClass("textToRightT");
                $(".textTh").removeClass("textToRightTh");
            }
            if ((index == 2 && nextIndex == 3) || (index == 2 && nextIndex == 1)) {

                $(".largeOne").removeClass("fromeToTopTh");
                $(".smallThree").removeClass("fromeToTopT");
                $(".smallsT").removeClass("fromeToTopOne");
                $(".largeFive").removeClass("fromeToLefts");
                $(".normalOne").removeClass("fromeToLeftTs");
                $(".smallOne").removeClass("fromeToLeftThs");
                $(".smallTwo").removeClass("fromeToBottom");
                $(".normalThree").removeClass("fromeToBottomT");
                $(".largeFour").removeClass("fromeToBottomTh");
                $(".largeTwo").removeClass("fromeToRight");
                $(".largeThree").removeClass("fromeToRightT");
                $(".smallsO").removeClass("fromeToRightTh");
                $(".normalTwo").removeClass("fromeToRightF");
                $(".smallFour").removeClass("fromeToRightFi");
                $(".jdt").removeClass("jdtShow");
                $(".fgqg").removeClass("secndTextO");
                $(".yxcs").removeClass("secndTextT");
                $(".yw").removeClass("secndTextTh");
            }
            if (index == 3 && nextIndex == 2) {
                $(".iconOne").removeClass("thirdFromeToLeft");
                $(".iconFive").removeClass("thirdFromeToLeftT");
                $(".iconSix").removeClass("thirdFromeToBottom");
                $(".iconSeven").removeClass("thirdFromeToBottomT");
                $(".iconTwo").removeClass("thirdFromeToRight");
                $(".iconThree").removeClass("thirdFromeToRightT");
                $(".iconFour").removeClass("iconFourAni");
                $(".titleThree").removeClass("thirdFromeToBottoms");
            }
        }
    });
    //第一屏动画
    function firstAni() {
        $(".mainLeft").addClass("mainLeftShow");
        $(".syO").addClass("fromeToLeft");
        $(".syT").addClass("fromeToLeftO");
        $(".syTh").addClass("fromeToLeftT");
        $(".syF").addClass("fromeToLeftTh");
        $(".hx").addClass("hxLarge");
        setTimeout(function () {
            $(".hx").addClass("hxRotate").removeClass("hxLarge");
        }, 2500);
        $(".hj").addClass("hjToTop"); 
        $(".yh").addClass("yhLarge");
        $(".fousText").addClass("textToRight");
        $(".textT").addClass("textToRightT");
        $(".textTh").addClass("textToRightTh");
        
    }
    firstAni();

    //第二屏动画
    function secondAni() {
        $(".largeOne").addClass("fromeToTopTh");
        $(".smallThree").addClass("fromeToTopT");
        $(".smallsT").addClass("fromeToTopOne");
        $(".largeFive").addClass("fromeToLefts");
        $(".normalOne").addClass("fromeToLeftTs");
        $(".smallOne").addClass("fromeToLeftThs");
        $(".smallTwo").addClass("fromeToBottom");
        $(".normalThree").addClass("fromeToBottomT");
        $(".largeFour").addClass("fromeToBottomTh");
        $(".largeTwo").addClass("fromeToRight");
        $(".largeThree").addClass("fromeToRightT");
        $(".smallsO").addClass("fromeToRightTh");
        $(".normalTwo").addClass("fromeToRightF");
        $(".smallFour").addClass("fromeToRightFi");
        $(".jdt").addClass("jdtShow");
        $(".fgqg").addClass("secndTextO");
        $(".yxcs").addClass("secndTextT");
        $(".yw").addClass("secndTextTh");
    }

    //第三屏动画
    function thirdAni() {
        $(".iconOne").addClass("thirdFromeToLeft");
        $(".iconFive").addClass("thirdFromeToLeftT");
        $(".iconSix").addClass("thirdFromeToBottom");
        $(".iconSeven").addClass("thirdFromeToBottomT");
        $(".iconTwo").addClass("thirdFromeToRight");
        $(".iconThree").addClass("thirdFromeToRightT");
        $(".iconFour").addClass("iconFourAni");
        $(".titleThree").addClass("thirdFromeToBottoms");
        $("div.bz").bind({
            mouseover: function () {
                //alert(this.className);
                //$(this).addClass("rotateSy").removeClass("rotateSys");
                $(this).children("img").addClass("rotateSy").removeClass("rotateSys").css("display", "none");
                $(this).children("b").css("display","block").animate({
                    opacity:1
                },300);
            },
            mouseout: function () {
                //$(this).addClass("rotateSys").removeClass("rotateSy");
                $(this).children("img").addClass("rotateSys").removeClass("rotateSy").css("display", "block");
                $(this).children("b").animate({
                    opacity: 0
                }, 300).css("display", "none");
            }
        });
    }

    //第一屏内容跟踪鼠标位移
    function mouseWheel() {
        var index_div_pro = [{
            sx: 50,
            sy: 30,
            mw: 6,
            mh: 20,
            bx: 80.4,
            by: 16.4,
            rx: -0.2
        },//1
        {
            sx: 75,
            sy: 10,
            mw: 3,
            mh: 2.5,
            bx: 6.4,
            by: 9.4,
            rx: -0.1
        },//2
        {
            sx: 80,
            sy: 10,
            mw: 2.6,
            mh: 2.5,
            bx: 6.4,
            by: 8.4,
            rx: -0.1
        },//3
        {
            sx: 80,
            sy: 10,
            mw: 2.6,
            mh: 2.5,
            bx: 6.4,
            by: 7.4,
            rx: -0.1
        },//4
        {
            sx: 35.4,
            sy: -100,
            mw: 0.3,
            mh: 8,
            bx: 6.5,
            by: 150.4,
            rx: -0.1
        },//5
        {
            sx: 150.2,
            sy: -50,
            mw: 3,
            mh: 8,
            bx: 9.5,
            by: 20,
            rx: -0.3
        }//6
        ];

        var ePageX = null;
        var ePageY = null;

        function getMousePos(expression) {
            if (ePageX == null || ePageY == null) return null;
            var _x = $(expression).position().left;
            _x += ePageX - $(expression).parent().position().left;
            var _y = $(expression).position().top;
            _y += ePageY - $(expression).parent().position().top;
            return {
                x: _x,
                y: _y
            }
        };

        var index_xh = setInterval(function () {
            for (var i = 0; i < 7; i++) {
                var mousepos = getMousePos("#indexg" + i);
                if (mousepos != null) {
                    var left = parseInt($("#indexg" + i).css("left"));
                    var l = left + (index_div_pro[i].sx + index_div_pro[i].mw - (mousepos.x - 2000) / index_div_pro[i].bx * index_div_pro[i].rx - left) * 0.2;
                    var top = parseInt($("#indexg" + i).css("top"));
                    var t = top + (index_div_pro[i].sy + index_div_pro[i].mh - (mousepos.y - 2000) / index_div_pro[i].by - top) * 0.2;
                    $("#indexg" + i).css({
                        left: l,
                        top: t
                    })
                }
            }
        },
        15);

        $("body").mousemove(function (event) {
            event = event || window.event;
            ePageX = event.pageX;
            ePageY = event.pageY;
        });
    }

    //第二屏数字动态累加
    function numberUp() {
        var decimal_places = 0;
        var decimal_factor = decimal_places === 0 ? 1 : decimal_places * 10;
        $('#numberUp').animateNumber({
            number: 89 * decimal_factor,
            numberStep: function (now, tween) {
                var floored_number = Math.floor(now) / decimal_factor, target = $(tween.elem);
                if (decimal_places > 0) {
                    floored_number = floored_number.toFixed(decimal_places);
                }
                target.text(floored_number + '%');
            }
        }, 1500);
    }

    //右上角菜单点击展开列表
    function menuMains() {
        $(".menuAll").click(function () {
            var this_ = $(this);
            var Li = this_.siblings(".menuMain").find("li");
            if (!this_.attr("title")) {
                this_.attr("title", "menu");
                $("#slider").fullpage.setAllowScrolling(false, "up,down");
                this_.addClass("menuClose").removeClass("menu");
                this_.siblings(".menuMain").css("display", "block").animate({
                    opacity: 1
                }, 800, function () {
                    Li.bind({
                        click: function () {
                            this_.removeAttr("title");
                            this_.removeClass("menuClose").addClass("menu");
                            this_.siblings(".menuMain").css("display", "none").animate({
                                opacity: 0
                            }, 800);
                            $("#slider").fullpage.setAllowScrolling(true, "up,down");
                        },
                        mouseenter: function () {
                            var this_o = $(this);
                            //console.log(this_o.has(".ons"));
                            if (this_o.hasClass("ons")) {
                                this_o.unbind("mouseenter");
                            } else {
                                biankuang(this_o);
                            }
                            
                        },
                        mouseleave: function () {
                            var this_ou = $(this);
                            biankuang1(this_ou);
                        }
                    });
                    //Li.click(function () {
                        
                    //});
                });
            } else if (this_.attr("title")) {
                this_.removeAttr("title");
                this_.removeClass("menuClose").addClass("menu");
                this_.siblings(".menuMain").css("display", "none").animate({
                    opacity: 0
                }, 800);
                $("#slider").fullpage.setAllowScrolling(true, "up,down");
            }
        });
    }
    menuMains();

    //边框效果--移入
    function biankuang(Li) {
        Li.children('.biankuang_1').stop(true).animate({
            height: '124px'
        }, 300)
        Li.children('.biankuang_2').stop(true).delay(300).animate({
            width: '127px'
        }, 300)
        Li.children('.biankuang_3').stop(true).animate({
            height: '124px'
        }, 300)
        Li.children('.biankuang_4').stop(true).delay(300).animate({
            width: '127px'
        }, 300)
    }
    //边框效果--移出
    function biankuang1(Li) {
        Li.children('.biankuang_1').stop(true).delay(100).animate({
            height: '0px'
        }, 100)
        Li.children('.biankuang_2').stop(true).animate({
            width: '0px'
        }, 100)
        Li.children('.biankuang_3').stop(true).delay(100).animate({
            height: '0px'
        }, 100)
        Li.children('.biankuang_4').stop(true).animate({
            width: '0px'
        }, 100)
    }
});