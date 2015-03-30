// ==UserScript==
// @name         NGAHelper
// @namespace    http://github.com/icyblade/ngahelper
// @version      0.1
// @description  Something useful about NGA
// @author       Icyblade
// @run-at       document-body
// @include      http://bbs.ngacn.cc/*
// @include      http://bbs.nga.cn/*
// ==/UserScript==

// 干掉兽人图片
document.getElementById("mainmenu").style.margin="0px"
document.getElementById("custombg").remove()

// 版头高度增高
document.getElementById("toppedtopic").style.height="320px"

// 干掉底部版权信息
document.getElementsByClassName("cpinfo")[0].remove()

// 干掉底部快速发帖
document.getElementById("fast_post_c").remove()
var count = document.getElementsByTagName("a").length
document.getElementsByTagName("a")[count-1].remove()

// 干掉审核字样
<<<<<<< HEAD
var red = document.querySelectorAll("[title=\"待审核\"]")
for(i = 0; i < red.length; i++){
	red[i].parentNode.removeChild(red[i])
=======
var red_font = document.getElementsByClassName("red nobr")
for (i = 0;i < red_font.length; i++) {
    if (red_font[i].innerHTML == "[审核]") {
        document.getElementsByClassName("red nobr")[i].remove()
    }
>>>>>>> origin/master
}
