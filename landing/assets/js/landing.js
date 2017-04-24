$(document).ready(function () {

    // SCROLL SCRIPTS 
        $('.scroll-me a').bind('click', function (event) { //just pass scroll-me class and start scrolling
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top
        }, 1000, 'easeInOutQuad');
        event.preventDefault();
        });
    // BACKGROUND VIDEO SCRIPTS
        $(function () {
            $(".player").mb_YTPlayer(); // .player - class to add for playing video ( see the div above to understand)
        });


    //HIDE NAVBAR ON CLICK ON MOBILE
       $('.navbar-collapse .nav a').on('click', function(){
            if($('.navbar-collapse').hasClass('in')){
                $(".navbar-collapse").collapse('hide');
            }
        });
    


    //Show tour if clicked on tour image
    $(".img-tour-modal").on('click', function(event){
        event.stopPropagation();
        event.stopImmediatePropagation();

        var tourId = $(this).attr('id');
        $(".modal-body").append(getTourFrame(tourId));
        $('#myModal').modal('show'); 
        
    });

    //Remove tour if modal dialog is closed
    $('#myModal').on('hidden.bs.modal', function () {
        $(".modal-body").children().remove();
        console.log('removing children');
    });

    
});


function getTourFrame(tourId){
    var urlBase = 'https://akordo.github.io/virtoo';
    var tourBase = '<iframe width="100%" height="70%" allowfullscreen style="border-style:none;" src="'+urlBase+'/pannellum_cust/standalone/pannellum.htm?';
    var tourSpec = 'config='+urlBase+'/landing/assets/tours/' + tourId + '/' + tourId + '_' + getTourSize() + '.json"></iframe>';  
    return tourBase + tourSpec    

}

function isMobile(){
    if($.browser.device = (/android|webos|iphone|ipad|ipod|blackberry|iemobile|opera mini/i.test(navigator.userAgent.toLowerCase()))){
        return true;
    } else {
        return false;
    }
}

function getTourSize(){
    if(isMobile){
        return 'md';
    } else {
        return 'lg';
    }
}



 
