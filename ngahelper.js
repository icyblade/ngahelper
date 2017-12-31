// ==UserScript==
// @name         NGAHelper
// @namespace    http://github.com/icyblade/ngahelper
// @version      0.4
// @description  Something useful about NGA
// @author       Icyblade
// @run-at       document-end
// @grant        none
// @include      *://bbs.ngacn.cc/*
// @include      *://bbs.nga.cn/*
// @include      *://club.178.com/*
// @include      *://bbs.bigccq.cn/*
// ==/UserScript==

function doIfExists(obj, func) {
	if (!(obj === undefined || obj === null)) {
		return func(obj);
	}
}

function forEach(obj, func) {
	var len = obj.length;
	for (var i=0; i<len; i++) {
		func(obj[i]);
	}
}

// 干掉兽人图片
doIfExists(document.getElementById("custombg"), function(obj) {
	obj.remove();
});
doIfExists(document.getElementById("mainmenu"), function(obj) {
	obj.style.margin = "0px";
});

// 干掉底部版权信息
doIfExists(document.getElementsByClassName("cpinfo")[0], function(obj) {
	obj.remove();
});

// 干掉底部快速发帖
doIfExists(document.getElementById("fast_post_c"), function(obj) {
	obj.remove();
});

// 折叠
ubbcode.collapse.load_original = ubbcode.collapse.load;
ubbcode.collapse.load = function(o, argsId, id, r) {
	var expandDiv = o.previousSibling;
	var expandButton = expandDiv.firstChild;
	var title = expandButton.nextSibling;
	var content = o;

	expandDiv.style.display = "block";
	if (content.innerHTML === "") {  // click collapse button the first time
		expandButton.innerHTML = "-";
		ubbcode.collapse.load_original(o, argsId, id, r);
	} else {
		if (expandButton.innerHTML == "+") {  // "un"collapse
			content.style.display = "block";
			expandButton.innerHTML = "-";
		} else {  // collapse
			content.style.display = "none";
			expandButton.innerHTML = "+";
		}
	}
};

// 备注加入超链接
var tags = document.querySelectorAll("[style=\"margin-bottom:0.25em;color:#58697b\"]");
for (i = 0; i < tags.length; i++) {
	var a = document.createElement("a");
	a.href = tags[i].title.replace('版主可见 ', '');
	a.target = "_blank";
	a.innerHTML = tags[i].outerHTML;
	tags[i].parentNode.insertBefore(a,tags[i]);
	tags[i].remove();
}

// 默认展开 lessernuke
forEach(document.getElementsByClassName("lessernuke"), function(obj) {
	obj.lastChild.style.display = "block";
});
