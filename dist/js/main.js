(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);throw new Error("Cannot find module '"+o+"'")}var f=n[o]={exports:{}};t[o][0].call(f.exports,function(e){var n=t[o][1][e];return s(n?n:e)},f,f.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
(function(){

	var videoStatus = 1;

	var video = document.getElementById("videoclip");

	// play scrolling
	window.onscroll = function (){

	    var scroll = document.documentElement.scrollTop || document.body.scrollTop;

	    // if is the first time and scroll> play de video
	    if(scroll > 200 && videoStatus==1){
	        video.play();
	    }
	}

	video.onpause = function() {
	    videoStatus = 0;
	};	

})();
},{}]},{},[1])
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9tYXJpb2lwL3NpdGVzL2pvYi10ZXN0cy9qLWRpbGxhL25vZGVfbW9kdWxlcy9ndWxwLWJyb3dzZXJpZnkvbm9kZV9tb2R1bGVzL2Jyb3dzZXJpZnkvbm9kZV9tb2R1bGVzL2Jyb3dzZXItcGFjay9fcHJlbHVkZS5qcyIsIi9Vc2Vycy9tYXJpb2lwL3NpdGVzL2pvYi10ZXN0cy9qLWRpbGxhL3NyYy9qcy9mYWtlX2ZlOGRhMjA3LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FDQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJmaWxlIjoiZ2VuZXJhdGVkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiBlKHQsbixyKXtmdW5jdGlvbiBzKG8sdSl7aWYoIW5bb10pe2lmKCF0W29dKXt2YXIgYT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2lmKCF1JiZhKXJldHVybiBhKG8sITApO2lmKGkpcmV0dXJuIGkobywhMCk7dGhyb3cgbmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIitvK1wiJ1wiKX12YXIgZj1uW29dPXtleHBvcnRzOnt9fTt0W29dWzBdLmNhbGwoZi5leHBvcnRzLGZ1bmN0aW9uKGUpe3ZhciBuPXRbb11bMV1bZV07cmV0dXJuIHMobj9uOmUpfSxmLGYuZXhwb3J0cyxlLHQsbixyKX1yZXR1cm4gbltvXS5leHBvcnRzfXZhciBpPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7Zm9yKHZhciBvPTA7bzxyLmxlbmd0aDtvKyspcyhyW29dKTtyZXR1cm4gc30pIiwiKGZ1bmN0aW9uKCl7XG5cblx0dmFyIHZpZGVvU3RhdHVzID0gMTtcblxuXHR2YXIgdmlkZW8gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInZpZGVvY2xpcFwiKTtcblxuXHQvLyBwbGF5IHNjcm9sbGluZ1xuXHR3aW5kb3cub25zY3JvbGwgPSBmdW5jdGlvbiAoKXtcblxuXHQgICAgdmFyIHNjcm9sbCA9IGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5zY3JvbGxUb3AgfHwgZG9jdW1lbnQuYm9keS5zY3JvbGxUb3A7XG5cblx0ICAgIC8vIGlmIGlzIHRoZSBmaXJzdCB0aW1lIGFuZCBzY3JvbGw+IHBsYXkgZGUgdmlkZW9cblx0ICAgIGlmKHNjcm9sbCA+IDIwMCAmJiB2aWRlb1N0YXR1cz09MSl7XG5cdCAgICAgICAgdmlkZW8ucGxheSgpO1xuXHQgICAgfVxuXHR9XG5cblx0dmlkZW8ub25wYXVzZSA9IGZ1bmN0aW9uKCkge1xuXHQgICAgdmlkZW9TdGF0dXMgPSAwO1xuXHR9O1x0XG5cbn0pKCk7Il19
