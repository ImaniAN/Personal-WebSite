function setActiveCarouselItem(card){
   var $target = $(card).find('.carousel-item:first');
   $target.addClass('active');
} 
function initTestimonialsCarousel(card){
    var $target = $(card),
        $carouselID = $target.attr('ID') +"-carousel"; 

    $target.find('.carousel').attr('id',$carouselID);
    $target.find('.carousel-controls a').attr('href','#'+$carouselID);
    $target.find('.carousel-indicators li').attr('data-target','#'+$carouselID);
    setActiveCarouselItem($target);  
}

// Mobirise initialization
var isBuilder = $('html').hasClass('is-builder');
if (isBuilder) {
    $(document).on('add.cards', function(event) {
        if($(event.target).hasClass('testimonials-slider')){
            initTestimonialsCarousel(event.target);
        }

    }).on('changeParameter.cards', function(event, paramName, value) {
        if (paramName === 'testimonialsSlides') {
            if ($(event.target).find('.carousel-item.active').length==0) {
                setActiveCarouselItem(event.target);
            }
        }
    });;
} else{
    if(typeof window.initTestimonialsPlugin === 'undefined'){
        window.initTestimonialsPlugin = true;
        $('.testimonials-slider').each(function(){
            initTestimonialsCarousel(this);
        });      
    }
}