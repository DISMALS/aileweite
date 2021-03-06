﻿$(function () {

    //获取浏览器可视窗口大小
    function getSize() {
        var timer = null;
        timer = setTimeout(function () {
            var menuMain = $(".menuMainUl").height();
            var caseMainT = $(".caseMainT").width();
            var caseMainTH = $(".caseMainT").height();
            var caseMain = $(".caseMain").height();
            var sliderMain = $(".sliderMain").height();
            var winHeight = $(window).height();
            var winWidth = $(window).width();
            $(".menuMainUl").css("top", (winHeight - menuMain) / 2);
            $(".allCase").css("height", winHeight + "px");
            $(".caseMainT").css("left", (winWidth - caseMainT) / 2);
            if (winHeight < caseMain) {
                $(".caseMain").css("top", "75px");
            } else if (winHeight >= caseMain) {
                $(".caseMain").css("top", (winHeight - caseMain) / 2);
            }

            if (winHeight < caseMainTH) {
                $(".caseMainT").css("top", "90px");
            } else {
                $(".caseMainT").css("top", (winHeight - caseMainTH) / 2);
            }
        }, 500);
    };
    getSize();
    $(window).resize(function () {
        getSize();
    });
    //右上角菜单点击展开列表
    function menuMains() {
        $(".menuAll").click(function () {
            var this_ = $(this);
            var Li = this_.siblings(".menuMain").find("li");
            if (!this_.attr("title")) {
                this_.attr("title", "menu");
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
            }
        });
    }
    menuMains();

    //列表页点击弹出详情展示
    function listClickShow(list) {
        $(list).bind("click",function () {
            var winHeight = $(window).height();
            var caseMainTH = $(".caseMainT").height();
            
            $(".caseMain").css("display", "none");
            $(".caseMainT").css("display", "block").addClass("hxLargeTss");
            $(".caseMainT").removeClass("hide");
            $("#scrollbar1").slimScroll({
                alwaysVisible: true,
                railVisible: true
            });
            if (winHeight < caseMainTH) {
                $(".caseMainT").css("top", "90px");
            } else {
                $(".caseMainT").css("top", (winHeight - caseMainTH) / 2);
            }
            $("a.caseClose").click(function () {
                $(".caseMain").css("display", "block");
                $(".caseMainT").css("display", "none").removeClass("hxLargeTss").addClass("hide");
                $("#scrollbar1").slimScroll({
                    alwaysVisible: true,
                    railVisible: true
                });
            });
        });
    }
    listClickShow(".caseMain li");
    listClickShow("a.zpMainText");

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