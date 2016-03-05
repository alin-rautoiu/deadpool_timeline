var ballSizeNormal = 25;
var ballSizeInflated = 28;
var rectSize = 50;
var rectSizeInflated = 56;

$(document).ready( function(){
    
     if (!String.prototype.includes) {
     String.prototype.includes = function() {
         'use strict';
         return String.prototype.indexOf.apply(this, arguments) !== -1;
     };
}
    
    var mobile = ($(window).width() < 800);;
    var shown = false;
    
    if (mobile === true){
        $("#detail_text").removeClass('affix');
        $('#writing_area').css('margin-left', '0px');
        $('#writing_area').css('margin-right', '0px');
        $('#writing_area').css('padding-left', '0px');
        $('#writing_area').css('padding-right', '0px');
        $('#writing_area').css('width', '100vw');
        
        ballSizeNormal = 10;
        ballSizeInflated = 12;
        rectSize = 20;
        rectSizeInflated = 23;
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
        var name = $(this).attr('id');
        
        $(this).velocity({ r: ballSizeInflated}), { duration: 250 };
                
        $(this).siblings('text').velocity({ fontSize: "16px" }, { duration: 250 });

    });
    
    $('circle').on('mouseout', function(){
        if(!isDragging){
            var r = $(this).attr('r');            
            
            $(this).velocity({ r: ballSizeNormal}, { duration: 250 });            
            $(this).siblings('text').velocity({ fontSize: "14px" }, { duration: 250 });
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
   }

});

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