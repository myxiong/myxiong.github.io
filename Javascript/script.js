$(document).ready( function(){
	 $("#fixed-heading").hide();
	

	/*===== nav bar =====*/
	 $("nav div").hover(function() {
 		$(this).css({"background":"#ffffff"});
 	 	$(this).find("a").css({"color":"#006666"});
 	 	$(this).find("a span").css({"color":"#006666"});
        
    },function(){
 		$(this).css({"background":"#006666"});
 	 	$(this).find("a").css({"color":"#ffffff"});
 	 	$(this).find("a span").css({"color":"#ffffff"});
    });

    /*===== home page subbox =====*/
    $(".home-hover-img").hover(function() {
        $(this).css({"opacity":"1"});        
    },function(){
        $(this).css({"opacity":"0.6"});
    });

    // $(".hover-text").hover(function() {
    //     $(this).find(".home-hover-img").css({"opacity":"1"});        
    // },function(){
    //     $(this).find(".home-hover-img").css({"opacity":"0.6"});
    // });

     $(".home-hover-img-test").hover(function() {
        $(this).css({"opacity":"1"});        
    },function(){
        $(this).css({"opacity":"0.6"});
    });

    function headerEffect (){
        if($(window).scrollTop()>375){
            $("#fixed-heading").fadeIn("fast");
            $("#not-fixed-nav").css({"top":"5.5em", "position":"fixed"});
        }else{
            $("#fixed-heading").fadeOut("fast");
           	$("#not-fixed-nav").css({"top":"30em", "position":"static"});
        }
    }

    $(window).scroll( function(){
        headerEffect();
    });

   	homesubbox();

    $(window).resize(function(){
    	homesubbox();
    });

    function homesubbox (){
    	//if($(window).width() < 1465){
    		$(".anchor-hover").addClass("home-hover-img");
    		$(".anchor-hover").removeClass("home-hover-img-test");
    		
    		$(".anchor-img").addClass("home-img");
    		$(".anchor-img").removeClass("home-img-test");

    		$(".anchor-text").addClass("hover-text");
    		$(".anchor-text").removeClass("hover-text-test");

    		$(".placeholder").removeClass("home-a");
	    	// need to be fixed
	  //   } else {
	  //   	$(".anchor-hover").addClass("home-hover-img-test");
   //  		$(".anchor-hover").removeClass("home-hover-img");

			// $(".anchor-img").addClass("home-img-test");
   //  		$(".anchor-img").removeClass("home-img");

   //  		$(".anchor-text").addClass("hover-text-test");
   //  		$(".anchor-text").removeClass("hover-text");
	    	
	  //   	$(".placeholder").addClass("home-a");
	  //   }
    }
    

});