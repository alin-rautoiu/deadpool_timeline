$(document).ready( function(){
    var mobile = ($(window).width() < 800);;
    var shown = false;
    
    if (mobile === true){
        $("#detail_text").removeClass('affix');
    }
   
    //$('#detail_text').hide();
    
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
            $('#drawing_area').animate({
                left: '-300px',}
                ,300
                );
        }
        
        $('#writing_area').animate({
            opacity: '100',}
            ,300
        );
        
        $(this).siblings('text').animate({
                top: 14
            },{
                step: function(top){
                    $(this).css('font-size', top);
                }  
            }, 100);
        
        var name = $(this).parent().attr('id');
        // $('#detail_text').append('<h1>' + text_dictionary[key(name)].header + '<h1>');
        $('#detail_text').append(text_dictionary[key(name)].body);
        shown = true;       
    });
    
    $('circle').on('mousemove', function(){
           isDragging = isMouseDown && true;
    });
    
    $('circle').on('mouseover', function(){
        var r = $(this).attr('r');
        var name = $(this).attr('id');
        
        $(this).velocity({ r: 28}), { duration: 250 };
                
        $(this).siblings('text').velocity({ fontSize: "16px" }, { duration: 250 });

    });
    
    $('circle').on('mouseout', function(){
        if(!isDragging){
            var r = $(this).attr('r');            
            
            $(this).velocity({ r: 25}, { duration: 250 });
            
            $(this).siblings('text').velocity({ fontSize: "14px" }, { duration: 250 });
        }        
    });
    
    $('path').on('mouseover', function(){
        if(!isDragging && $(this).hasClass('influence')){
            //$(this).css('stroke', 'yellow');
            $(this).velocity({strokeWidth: '6'}, { duration: 250 });
        }
    })
    
    $('path').on('mouseout', function(){
        //$(this).css('stroke', '#ccc');
        $(this).velocity({strokeWidth: '4'}, { duration: 250 });
    })
        
    $('svg').on('click', function(){
        if(isDragging){
            isDragging = false;
            isMouseDown = false;
            $(draggedCircle).siblings('text').animate({
                top: 14
            },{
                step: function(top){
                    $(this).css('font-size', top);
                }  
            }, 250); 
        }
    });   
    
    $('path').on('click', function(){       
        
        var name = $(this).attr('id');
        var source = name.split('_')[0];
        var target = name.split('_')[0];
        if(source.includes('deadpool') && target.includes('deadpool')){
            return;
        }
        
        if (mobile === false){        
            $('#drawing_area').animate({
                left: '-300px',}
                ,300
                );
        }
        
        $('#detail_text').show();
        $('#detail_text').empty();
        
        $('#writing_area').animate({
            opacity: '100',}
            ,300
        );
        
        // $('#detail_text').append('<h1>' + text_dictionary[key(name)].header + '<h1>');
        $('#detail_text').append('<p>' + text_dictionary[key(name)].body + '<p>');
        shown = true;
        
        setMaxHeight();
    })
    
    $('svg').on('mouseout', function(){
        dataset.edges.forEach(function(d){
               $('#' + d.name).css('stroke', '#ccc');
        });
    });
    
    $("#detail_text").on('click', function(d){
        if(d.toElement.localName == 'li'){
            $(".rslides li.active").toggleClass("active");
            $(d.toElement).toggleClass("active");
        }
    })
    
    $(window).on('scroll', function(){

        if(shown && !mobile){
            
            $('#drawing_area').animate({
                left: '0px',}
                ,300
            );
            $('#writing_area').animate({
                opacity: '0',
                }
                ,300
            );
            shown = false;
                
        }
    });
    

});

var setMaxHeight = function (){
    var maxHeight = $(window).height() / 1.5;
    $('.carousel img').css('width', 'auto');
    $('.carousel img').css('max-height', maxHeight);
}