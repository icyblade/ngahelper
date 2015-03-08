// ==UserScript==
// @name         NGAHelper
// @namespace    http://github.com/icyblade/ngahelper
// @version      0.1
// @description  Something useful about NGA
// @author       Icyblade
// @grant        none
// @include        http://bbs.ngacn.cc/*
// ==/UserScript==

// 干掉兽人图片
document.getElementById("mainmenu").style.margin="0px"

// 版头高度增高
document.getElementById("toppedtopic").style.height="320px"

// 干掉底部版权信息
document.getElementsByClassName("cpinfo")[0].remove()
