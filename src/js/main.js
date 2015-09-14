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