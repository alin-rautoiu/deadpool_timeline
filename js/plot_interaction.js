var ballSizeNormal = 23;
var ballSizeInflated = 27;
var rectSize = 50;
var rectSizeInflated = 56;
var mobile = ($(window).width() < 800);

var writing_area_left = $('#writing_area').css('margin-left');
var writing_area_right = $('#writing_area').css('margin-right');
var writing_area_pleft = $('#writing_area').css('padding-left');
var writing_area_pright= $('#writing_area').css('padding-right');
var writing_area_width = $('#writing_area').css('width');

if (!String.prototype.includes) {
     String.prototype.includes = function() {
         'use strict';
         return String.prototype.indexOf.apply(this, arguments) !== -1;
     };
}

function preloader() {
	if (document.images) {
// 		var deathstroke = new Image();
// 		var deathstroke2 = new Image();
// 		var deathstroke3 = new Image();
//         var spiderman = new Image();
//         var wolverine1 = new Image();
//         var wolverine2 = new Image();
//         var deadpoolv11 = new Image();
//         var deadpoolv12 = new Image();
//         var deadpoolv13 = new Image();
//         var animalman1 = new Image();
//         var animalman2 = new Image();
//         
//         var deadpoolv21 = new Image();
//         var deadpoolv22 = new Image();
//         var deadpoolv25 = new Image();
//         var deadpoolv23 = new Image();
//         var deadpoolv24 = new Image();
//         
//         var shehulk1 = new Image();
//         var shehulk2 = new Image();
//         
//         var deadpoolv251 = new Image();
//         var deadpoolv252 = new Image();
//         
//         var ambushbug = new Image();
//         
//         var deadpoolv31 = new Image();
//         var deadpoolv32 = new Image();
//         var deadpoolv33 = new Image();
//         var deadpoolv34 = new Image();
//         
//         var deadpoolv41 = new Image();
//         var deadpoolv42 = new Image();
//         var deadpoolv43 = new Image();
//         var deadpoolv44 = new Image();
//         var deadpoolv45 = new Image();        
// 
// 		deathstroke.src = "assets/deathstroke.jpg";
// 		deathstroke2.src = "assets/deathstroke2.jpg";
// 		deathstroke3.src = "assets/deathstroke3.jpg";
//         spiderman.src = "assets/spiderman.jpg";
//         wolverine1.src = "assets/wolverine1.jpg";
//         wolverine2.src = "assets/wolverine2.jpg";
//         deadpoolv11.src = "assets/deadpoolv11.jpg";
//         deadpoolv12.src = "assets/deadpoolv12.jpg";
//         deadpoolv13.src = "assets/deadpoolv13.jpg";
//         animalman1.src = "assets/animalman1.jpg";
//         animalman2.src = "assets/animalman2.jpg";
//         
//         deadpoolv21.src = "assets/deadpoolv21.jpg";
//         deadpoolv22.src = "assets/deadpoolv22.jpg";
//         deadpoolv25.src = "assets/deadpoolv25.jpg";
//         deadpoolv23.src = "assets/deadpoolv23.jpg";
//         deadpoolv24.src = "assets/deadpoolv24.jpg";
//         
//         shehulk1.src = "assets/shehulk1.jpg";
//         shehulk2.src = "assets/shehulk2.jpg";
//         
//         deadpoolv251.src = "assets/deadpoolv251.jpg";
//         deadpoolv252.src = "assets/deadpoolv252.jpg";
//         
//         ambushbug.src = "assets/ambushbug.jpg";
//         
//         deadpoolv31.src = "assets/deadpoolv31.jpg";
//         deadpoolv32.src = "assets/deadpoolv32.jpg";
//         deadpoolv33.src = "assets/deadpoolv33.jpg";
//         deadpoolv34.src = "assets/deadpoolv34.jpg";
//         
//         deadpoolv41.src = "assets/deadpoolv41.jpg";
//         deadpoolv42.src = "assets/deadpoolv42.jpg";
//         deadpoolv43.src = "assets/deadpoolv43.jpg";
//         deadpoolv44.src = "assets/deadpoolv44.jpg";
//         deadpoolv45.src = "assets/deadpoolv45.jpg";
	}
}
function addLoadEvent(func) {
	var oldonload = window.onload;
	if (typeof window.onload != 'function') {
		window.onload = func;
	} else {
		window.onload = function() {
			if (oldonload) {
				oldonload();
			}
			func();
		}
	}
}
addLoadEvent(preloader);

var setMaxHeight = function (){
    
    var imageHeight = $('.carousel').height();
    
    if(imageHeight == 0){
        setTimeout(setMaxHeight, 50);
    } else {        
        var windowHeight = $(window).height();
        var heightCorrection = (windowHeight - imageHeight) / 2;
        $('.carousel').velocity({top: heightCorrection});
    }
}

var setInteractions = function(){
   
    var shown = false;
    
    if (mobile === true){
        $("#detail_text").removeClass('affix');
        $("#writing_area").toggleClass('mobile_writing_area')
        
        ballSizeNormal = 10;
        ballSizeInflated = 12;
        rectSize = 20;
        rectSizeInflated = 23;
    } else {
        $("#detail_text").addClass('affix');        
        $("#writing_area").toggleClass('mobile_writing_area');

        ballSizeNormal = 23;           
        ballSizeInflated = 27;
        rectSize = 50;
        rectSizeInflated = 56;
    }
   
    
    var isMouseDown = false;
    var isDragging = false;
    var draggedCircle = '';
        
    $('circle').on('mousedown', function(){
        isMouseDown = true;
        draggedCircle = $(this); 
        dataset.edges.forEach(function(d){
            $('#' + d.name).css('stroke', '#ccc');
        });

        $('#detail_text').show();
        $('#detail_text').empty();
        
        if (mobile === false){
            $('#drawing_area').
            velocity(
                {left: '-300px'}
                ,{duration: 300}
                );
        }
        
        $('#writing_area').velocity({opacity: '100'}, {duration: 100});
        
        $(this).siblings('text').velocity({ fontSize: "14px" }, { duration: 250 });
        
        var name = $(this).parent().attr('id');
        $('#detail_text').append(text_dictionary[key(name)].body);
        shown = true;       
    });
    
    $('circle').on('mousemove', function(){
           isDragging = isMouseDown && true;
    });
    
    $('circle').on('mouseover', function(){
        var r = $(this).attr('r');
        var name = $(this).parent().attr('id');
        
        $(this).velocity({ r: ballSizeInflated}), { duration: 250 };                
        $(this).siblings('text').velocity({ fontSize: "16px" }, { duration: 250 });
        
        $('path').each(function(index, element) {
                if($(element).attr('id').includes(name)){
                    $(this).velocity({strokeWidth: '6'}, {delay:250, duration: 250 });
                }
            }, this);   

    });
    
    $('circle').on('mouseout', function(){
        if(!isDragging){
            var r = $(this).attr('r');            
            var name = $(this).parent().attr('id');
            
            $(this).velocity({ r: ballSizeNormal}, { duration: 250 });            
            $(this).siblings('text').velocity({ fontSize: "14px" }, { duration: 250 });
            
            if(!isDragging){
                $('path').each(function(index, element) {
                    if($(element).attr('id').includes(name)){
                        $(this).velocity({strokeWidth: '4'}, {delay:250, duration: 250 });
                    }
                }, this);            
            }
        }        
    });
    
    /* */
    
    $('rect').on('mousemove', function(){
        isDragging = isMouseDown && true;
    });
    
    $('rect').on('mouseover', function(){
        
        $(this).velocity({ height: rectSizeInflated, width: rectSizeInflated}), { duration: 250 };               
        $(this).siblings('text').velocity({ fontSize: "16px" }, { duration: 250 });
        var name = $(this).parent().attr('id');
        
        if(!isDragging){
            $('path').each(function(index, element) {
                if($(element).attr('id').includes(name)){
                    $(this).velocity({strokeWidth: '6'}, {delay:250, duration: 250 });
                }
            }, this);            
        }

    });
    
    $('rect').on('mouseout', function(){
            if(!isDragging){
                  
            $(this).velocity({ height: rectSize, width: rectSize}), { duration: 250 };                   
            $(this).siblings('text').velocity({ fontSize: "14px" }, { duration: 250 });
            var name = $(this).parent().attr('id');
        
            if(!isDragging){
                $('path').each(function(index, element) {
                    if($(element).attr('id').includes(name)){
                        $(this).velocity({strokeWidth: '4'}, {delay:250, duration: 250 });
                    }
                }, this);            
            }
        }        
    });
    
    $('path').on('mouseover', function(){
        if(!isDragging && $(this).hasClass('influence')){
            $(this).velocity({strokeWidth: '6'}, { duration: 250 });            
        }
    })
    
    $('path').on('mouseout', function(){
        $(this).velocity({strokeWidth: '4'}, { duration: 250 });
    })
        
    $('svg').on('click', function(){
        if(isDragging){
            isDragging = false;
            isMouseDown = false;
            $(draggedCircle).siblings('text').velocity({ fontSize: "14px" }, { duration: 250 });
        }
    });   
    
    $('path, rect').on('click', function(){       
        
        var name = $(this).attr('id') ? $(this).attr('id') : $(this).parent().attr('id');
        var source = name.split('_')[0];
        var target = name.split('_')[0];
        if(source.includes('deadpool') && target.includes('deadpool')){
            return;
        }
        
        $('#detail_text').empty();
        
        if (mobile === false){        
            $('#drawing_area').velocity({left: '-300px'}, {duration: 300});
        }       
        
        $('#writing_area').velocity({opacity: '100'}, {duration: 300});        
        $('#detail_text').append(text_dictionary[key(name)].body);

        shown = true;
        
        setMaxHeight();
    })
   
    
    $("#detail_text").on('click', function(d){        
        if(d.target.localName == 'li'){
            $(".carousel-indicators li.active").toggleClass("active");
            $(d.target).toggleClass("active");
        }
    })
    
    $(window).on('scroll', function(){

        if(shown && !mobile){            
            $('#drawing_area').velocity({left: '0px'}, {duration: 300});
            $('#writing_area').velocity({opacity: '0'}, {duration: 300});
            shown = false;
                
        }
    });
    
    $('#detail_text').on('slid.bs.carousel', function(){
        setMaxHeight();
    })
    
    if(mobile){
        $("#detail_text").swiperight(function() {  
            $("#detail_text").carousel('prev');        
        });  
        $("#detail_text").swipeleft(function() {  
            $("#detail_text").carousel('next');  
        });  
   } else {
       $("#detail_text").swiperight(function() {                      
        });  
        $("#detail_text").swipeleft(function() {              
        }); 
   }
}


$(document).ready( function(){   
     setInteractions();   
});

$(window).on('resize', function(){
    
    clearTimeout($.data(this, 'resizeTimer'));
    $.data(this, 'resizeTimer', setTimeout(function() {
        mobile = ($(window).width() < 800); 
        setInteractions();  
    }, 200));
    
   
});