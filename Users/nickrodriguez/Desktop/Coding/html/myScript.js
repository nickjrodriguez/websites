

function offset(el) {
    var rect = el.getBoundingClientRect(),
    scrollLeft = window.pageXOffset || document.documentElement.scrollLeft,
    scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    return { top: rect.top + scrollTop, left: rect.left + scrollLeft }
}

function openNav() {
  document.getElementById("mobile-nav").style.width = "100%";
}

function closeNav() {
  document.getElementById("mobile-nav").style.width = "0%";
}

function myMoveFunction(el1, el2) {
	var width1 = el1.offsetWidth;
	var offset1 = offset(el1).left;
	var offset2 = offset(el2).left;

    el1.style.left = ((offset2 - offset1 - width1) * ra_pos) + 'px';

    ra_pos = ra_pos * -1;
}

function addElement(parentId, elementTag, elementId, elementClass, html) {
	// get the parent in which we want to insert a new child
	var p = document.getElementById(parentId);
	console.log(p);
	// create child
	var child = document.createElement(elementTag);
	child.setAttribute('id', elementId);
	child.setAttribute('class', elementClass);
	child.innerHTML = html;
	p.append(child);
}

function removeElement(elementId){
	var element = document.getElementById(elementId);
	element.parentNode.removeChild(element);
}

// Right Arrow Functionality

var ra_pos = 1;
var ra = document.getElementById("right-arrow");
var share = document.getElementById("share");
var wanto = document.getElementById("wanto");


if (wanto) {
	wanto.addEventListener("click", function() {
		if(ra_pos == 1){
			myMoveFunction(ra, share);
		}
	});
}

if (share) {
	share.addEventListener("click", function() {
		if(ra_pos == -1){
			myMoveFunction(ra, share);
		}
	});
}

// Reset on window resize

window.addEventListener("resize", function() {
	if(ra_pos == -1) {
		ra.style.left = 0;
		ra_pos = ra_pos * -1;
	}
});

// Remove Header Image on screen not big enough..

var added = 1;
var elId = "image-container";
var elClass = "top-item";

window.addEventListener("resize", function () {
	var w = window.innerWidth;
	if(w < 900 && added == 1){
		added = 0;
		removeElement(elId);
	} else if(w >= 900 && added == 0){
		console.log("here");
		var phtml = '<img src="photos/nick-header.png" id="header-photo" alt="">'
		addElement('toptile', 'div', elId, elClass, phtml);
		added = 1;
	}
});



// Color Functionality

var colorArray = ['#fae220', '#b7e0d1', '#6ea9d9', '#e9d3e7', '#ed4d2e', '#2fed8e'];

