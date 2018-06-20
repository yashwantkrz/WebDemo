
$(document).ready(function(){

    
    $('.slide-section').click(function(e){
        var linkHref = $(this).attr('href')
        $('html, body').animate({
            scrollTop: $(linkHref).offset().top
        });
        e.preventDefault()
    });
    
    
    
	// Init ScrollMagic
	var controller = new ScrollMagic.Controller();

	var parallaxTl = new TimelineMax();
	parallaxTl
		.from('.content-wrapper', 0.4, {autoAlpha: 0, ease:Power0.easeNone}, 0.4)
		.from('.bcg', 2, {y: '-30%', ease:Power0.easeNone}, 0)
		;

	var slideParallaxScene = new ScrollMagic.Scene({
		triggerElement: '.bcg-parallax',
		triggerHook: 1,
		duration: '100%'
	})
	.setTween(parallaxTl)
	.addTo(controller);
    
    
    
   var parallaxTl2 = new TimelineMax(); 
   parallaxTl2
		.from('.content-wrapper2', 0.4, {autoAlpha: 0, ease:Power0.easeNone}, 0.4)
		.from('.bcg2', 2, {y: '-30%', ease:Power0.easeNone}, 0)
		;

	var slideParallaxScene2 = new ScrollMagic.Scene({
		triggerElement: '.bcg-parallax2',
		triggerHook: 1,
		duration: '100%'
	})
	.setTween(parallaxTl2)
	.addTo(controller);

	
    
    
    var parallaxTl3 = new TimelineMax(); 
   parallaxTl3
		.from('.content-wrapper3', 0.4, {autoAlpha: 0, ease:Power0.easeNone}, 0.4)
		.from('.bcg3', 2, {y: '-30%', ease:Power0.easeNone}, 0)
		;

	var slideParallaxScene2 = new ScrollMagic.Scene({
		triggerElement: '.bcg-parallax3',
		triggerHook: 1,
		duration: '100%'
	})
	.setTween(parallaxTl3)
	.addTo(controller);

    
    
    
    
    
    // loop through each .project element
	$('.project').each(function(){
        // build a scene
	   var ourScene = new ScrollMagic.Scene({
		triggerElement: this.children[0],
        duration: '30%',
        triggerHook: 0.5 ,
        //reverse:false
	   })
	   .setClassToggle(this, 'fade-in') // add class to project01
	   .addIndicators({
		name: 'fade scene',
		colorTrigger: 'black',
		
		colorStart: '#75C695'
	}) // this requires a plugin
	.addTo(controller);
    });
});

















