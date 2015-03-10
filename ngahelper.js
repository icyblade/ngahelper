// ==UserScript==
// @name         NGAHelper
// @namespace    http://github.com/icyblade/ngahelper
// @version      0.1
// @description  Something useful about NGA
// @author       Icyblade
// @grant        none
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