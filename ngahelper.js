// ==UserScript==
// @name         NGAHelper
// @namespace    http://github.com/icyblade/ngahelper
// @version      0.1
// @description  Something useful about NGA
// @author       Icyblade
// @run-at       document-end
// @grant        none
// @include      http://bbs.ngacn.cc/*
// @include      http://bbs.nga.cn/*
// @include      http://club.178.com/*
// ==/UserScript==

// 干掉兽人图片
var mainmenu = document.getElementById("mainmenu");
if (mainmenu) {
	mainmenu.style.margin="0px";
}
var custombg = document.getElementById("custombg");
if (custombg) {
	custombg.remove();
}

// 版头高度增高
var mainmenu = document.getElementById("toppedtopic");
if (mainmenu) {
	mainmenu.style.height="320px";
}

// 干掉底部版权信息
var cpinfo = document.getElementsByClassName("cpinfo");
if (cpinfo) {
    cpinfo[0].remove();
}

// 干掉底部快速发帖
var fast_post_c = document.getElementById("fast_post_c");
if (fast_post_c) {
	fast_post_c.remove();
}
var a = document.getElementsByTagName("a")
if (a) {
	var count = a.length
	a[count-1].remove();
}

// 干掉审核字样
var red = document.querySelectorAll("[title=\"待审核\"]");
for(i = 0; i < red.length; i++) {
	red[i].remove();
}

// 干掉迅游
var a = document.getElementsByTagName("a");
for (i = 0; i < a.length; i++) {
    if (a[i].href == 'http://www.xunyou.com/ep/dj/') {
        a[i].remove();
    }
}

// 折叠
ubbcode.collapse.load_original = ubbcode.collapse.load;
ubbcode.collapse.load = function(content,id){
	var title = content.previousSibling;
	title.style.display = 'block';
	button = title.getElementsByTagName('button')[0];
	if (content.innerHTML=="") {		// click collapse button the first time
		button.innerHTML = "-";
		button.style.width = "17px";
		ubbcode.collapse.load_original(content,id);
	} else {
		if (button.innerHTML == "+") {
			content.style.display="block";
			button.innerHTML = "-";
		} else {
			content.style.display="none";
			button.innerHTML = "+";
		}
	}
}

// 备注加入超链接
var tag = document.querySelectorAll("[style=\"background:#E0C19E;padding:0 0.5em;border-radius:0.25em;color:#2E526E\"]");
for (i = 0; i < tag.length; i++) {
	if (tag[i].title.substr(0,4) == 'http') {
		var a = document.createElement("a");
		a.href = tag[i].title;
		a.target = '_blank';
		a.innerHTML = tag[i].outerHTML;
		tag[i].parentNode.insertBefore(a,tag[i]);
		tag[i].remove();
	}
}
