window.onload = function () {
    function winWid() {
        var winWidth = window.innerWidth || document.documentElement.clientWidth;
        //console.log(winWidth); // 屏幕宽度
        var domHead = document.getElementsByTagName("head")[0];
        var domCss = document.createElement("link");
        domCss.id = "dom";
        domCss.type = "text/css";
        domCss.rel = "stylesheet";
        domCss.href = "css/domCss.css";
        if (winWidth <= 1600) {
            domHead.appendChild(domCss);
            //alert(domCss.href);
        } else if (winWidth > 1600) {
            domCss.href = "";
        }  

    }
    winWid();
    window.onresize = function () {
        winWid();
    }
}