(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);throw new Error("Cannot find module '"+o+"'")}var f=n[o]={exports:{}};t[o][0].call(f.exports,function(e){var n=t[o][1][e];return s(n?n:e)},f,f.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
angular.module('jDillaApp', [])
  .controller('JDillaController', function($scope) {

    $scope.mentions = [
      {
        name:'Questlove',
        image:'assets/images/questlove_big.jpg',
        mention:'"If you were to secretly ask the most praised hip-hop producers, if given a top three, who they fear the most, Dilla’s name would chart on everyone’s list, hands down."'
      },
      {
        name:'Pete Rock',
        image:'assets/images/peterock_big.jpg',
        mention:'"He was one of the greatest, man. He was the greatest to ever do it, for the new cats. And for his mother to tell me that I was his favorite producer – I was like ‘Wow, that’s dope, man."'
      },
      {
        name:'Black Thought',
        image:'assets/images/blackthought_big.jpg',
        mention:'"I can’t begin to explain the influence his mind and ear has had on my band, myself, and the careers of so many other artists. The most humble, modest, worthy and gifted beatmaker I’ve known..."'
      }
    ];
 
  });
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9tYXJpb2lwL3NpdGVzL2pvYi10ZXN0cy9qLWRpbGxhL25vZGVfbW9kdWxlcy9ndWxwLWJyb3dzZXJpZnkvbm9kZV9tb2R1bGVzL2Jyb3dzZXJpZnkvbm9kZV9tb2R1bGVzL2Jyb3dzZXItcGFjay9fcHJlbHVkZS5qcyIsIi9Vc2Vycy9tYXJpb2lwL3NpdGVzL2pvYi10ZXN0cy9qLWRpbGxhL3NyYy9qcy9mYWtlXzE5NmE1YzQ5LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FDQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsImZpbGUiOiJnZW5lcmF0ZWQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIGUodCxuLHIpe2Z1bmN0aW9uIHMobyx1KXtpZighbltvXSl7aWYoIXRbb10pe3ZhciBhPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7aWYoIXUmJmEpcmV0dXJuIGEobywhMCk7aWYoaSlyZXR1cm4gaShvLCEwKTt0aHJvdyBuZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiK28rXCInXCIpfXZhciBmPW5bb109e2V4cG9ydHM6e319O3Rbb11bMF0uY2FsbChmLmV4cG9ydHMsZnVuY3Rpb24oZSl7dmFyIG49dFtvXVsxXVtlXTtyZXR1cm4gcyhuP246ZSl9LGYsZi5leHBvcnRzLGUsdCxuLHIpfXJldHVybiBuW29dLmV4cG9ydHN9dmFyIGk9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtmb3IodmFyIG89MDtvPHIubGVuZ3RoO28rKylzKHJbb10pO3JldHVybiBzfSkiLCJhbmd1bGFyLm1vZHVsZSgnakRpbGxhQXBwJywgW10pXG4gIC5jb250cm9sbGVyKCdKRGlsbGFDb250cm9sbGVyJywgZnVuY3Rpb24oJHNjb3BlKSB7XG5cbiAgICAkc2NvcGUubWVudGlvbnMgPSBbXG4gICAgICB7XG4gICAgICAgIG5hbWU6J1F1ZXN0bG92ZScsXG4gICAgICAgIGltYWdlOidhc3NldHMvaW1hZ2VzL3F1ZXN0bG92ZV9iaWcuanBnJyxcbiAgICAgICAgbWVudGlvbjonXCJJZiB5b3Ugd2VyZSB0byBzZWNyZXRseSBhc2sgdGhlIG1vc3QgcHJhaXNlZCBoaXAtaG9wIHByb2R1Y2VycywgaWYgZ2l2ZW4gYSB0b3AgdGhyZWUsIHdobyB0aGV5IGZlYXIgdGhlIG1vc3QsIERpbGxh4oCZcyBuYW1lIHdvdWxkIGNoYXJ0IG9uIGV2ZXJ5b25l4oCZcyBsaXN0LCBoYW5kcyBkb3duLlwiJ1xuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgbmFtZTonUGV0ZSBSb2NrJyxcbiAgICAgICAgaW1hZ2U6J2Fzc2V0cy9pbWFnZXMvcGV0ZXJvY2tfYmlnLmpwZycsXG4gICAgICAgIG1lbnRpb246J1wiSGUgd2FzIG9uZSBvZiB0aGUgZ3JlYXRlc3QsIG1hbi4gSGUgd2FzIHRoZSBncmVhdGVzdCB0byBldmVyIGRvIGl0LCBmb3IgdGhlIG5ldyBjYXRzLiBBbmQgZm9yIGhpcyBtb3RoZXIgdG8gdGVsbCBtZSB0aGF0IEkgd2FzIGhpcyBmYXZvcml0ZSBwcm9kdWNlciDigJMgSSB3YXMgbGlrZSDigJhXb3csIHRoYXTigJlzIGRvcGUsIG1hbi5cIidcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIG5hbWU6J0JsYWNrIFRob3VnaHQnLFxuICAgICAgICBpbWFnZTonYXNzZXRzL2ltYWdlcy9ibGFja3Rob3VnaHRfYmlnLmpwZycsXG4gICAgICAgIG1lbnRpb246J1wiSSBjYW7igJl0IGJlZ2luIHRvIGV4cGxhaW4gdGhlIGluZmx1ZW5jZSBoaXMgbWluZCBhbmQgZWFyIGhhcyBoYWQgb24gbXkgYmFuZCwgbXlzZWxmLCBhbmQgdGhlIGNhcmVlcnMgb2Ygc28gbWFueSBvdGhlciBhcnRpc3RzLiBUaGUgbW9zdCBodW1ibGUsIG1vZGVzdCwgd29ydGh5IGFuZCBnaWZ0ZWQgYmVhdG1ha2VyIEnigJl2ZSBrbm93bi4uLlwiJ1xuICAgICAgfVxuICAgIF07XG4gXG4gIH0pO1xuKGZ1bmN0aW9uKCl7XG5cblx0dmFyIHZpZGVvU3RhdHVzID0gMTtcblxuXHR2YXIgdmlkZW8gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInZpZGVvY2xpcFwiKTtcblxuXHQvLyBwbGF5IHNjcm9sbGluZ1xuXHR3aW5kb3cub25zY3JvbGwgPSBmdW5jdGlvbiAoKXtcblxuXHQgICAgdmFyIHNjcm9sbCA9IGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5zY3JvbGxUb3AgfHwgZG9jdW1lbnQuYm9keS5zY3JvbGxUb3A7XG5cblx0ICAgIC8vIGlmIGlzIHRoZSBmaXJzdCB0aW1lIGFuZCBzY3JvbGw+IHBsYXkgZGUgdmlkZW9cblx0ICAgIGlmKHNjcm9sbCA+IDIwMCAmJiB2aWRlb1N0YXR1cz09MSl7XG5cdCAgICAgICAgdmlkZW8ucGxheSgpO1xuXHQgICAgfVxuXHR9XG5cblx0dmlkZW8ub25wYXVzZSA9IGZ1bmN0aW9uKCkge1xuXHQgICAgdmlkZW9TdGF0dXMgPSAwO1xuXHR9O1x0XG5cbn0pKCk7Il19
