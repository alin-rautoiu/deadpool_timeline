$(document).ready( function(){
    $('#hawkeye').on('click', function(){
       console.log("Hawkeye"); 
    });
    
    $('#edge_detail').hide();
    
    $('[data-toggle="popover"]').popover();
    
    $('body').on('mouseover', 'path', function (event) {
        $(".popover").offset({ top: 0, left: 0 + 20 });
    });
    var isMouseDown = false;
    var isDragging = false;
    var draggedCircle = '';
        
    $('circle').on('mousedown', function(){
        isMouseDown = true;
        draggedCircle = $(this); 
        dataset.edges.forEach(function(d){
            $('#' + d.name).css('stroke', '#ccc');
        });

        $('#edge_detail').show();
        $('#edge_detail').empty();
        
        var name = $(this).parent().attr('id');
        
        $('#edge_detail').append('<h1>' + name + '</h1>');
        $('#edge_detail').append('<p>' + deadpoolv1 + '<p>');
        
    });
    
    $('circle').on('mousemove', function(){
           isDragging = isMouseDown && true;
    });
    
    $('circle').on('mouseover', function(){
        var r = $(this).attr('r');
        var name = $(this).attr('id');
        var color = $(this).css('fill');
        dataset.edges.forEach(function(d){
            $('#' + d.name).css('stroke', '#ccc');
        });
        $(this).siblings('text').animate({
           top: 20
        },{
          step: function(top){
              $(this).css('font-size', top);
          }  
        }, 250);
        
        if(!isDragging){
            dataset.edges.forEach(function(d){
                if(d.name.includes(name)){                   
                    $('#' + d.name).css('stroke', color);                    
                } 
            });
        }
    });
    
    $('circle').on('mouseout', function(){
        if(!isDragging){
            var r = $(this).attr('r');
            $(this).siblings('text').animate({
                top: 14
            },{
                step: function(top){
                    $(this).css('font-size', top);
                }  
            }, 250);
        }
        dataset.edges.forEach(function(d){
               $('#' + d.name).css('stroke', '#ccc');
        });
    });
    
    $('path').on('mouseover', function(){
        if(!isDragging){
            $(this).css('stroke', 'yellow');
        }
    })
    
    $('path').on('mouseout', function(){
        $(this).css('stroke', '#ccc');
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
        $('#drawing_area').animate({
            left: '-300px',}
            ,300
            );
        
        $('#edge_detail').show();
        $('#edge_detail').empty();
        var name = $(this).attr('id');
        
        switch (name) {
            case 'spiderman_deadpoolv1':
                $('#edge_detail').append('<h1> The Amazing Spider-Man </h1>');
                $('#edge_detail').append('<p>' + spiderman_deadpoolv1 + '<p>');
                break;
            case 'deathstroke_deadpoolv1':
                $('#edge_detail').append('<h1> Deathstroke </h1>');
                $('#edge_detail').append('<p>' + deathstroke_deadpoolv1 + '<p>');
            break;
            case 'wolverine_deadpoolv1':
                $('#edge_detail').append('<h1> Wolverine </h1>');
                $('#edge_detail').append('<p>' + wolverine_deadpoolv1 + '<p>');
            break;
            default:
                break;
        }

    })
    
    $('svg').on('mouseout', function(){
        dataset.edges.forEach(function(d){
               $('#' + d.name).css('stroke', '#ccc');
        });
    });
});



var deadpoolv1 = 'Deadpool a fost creat de Rob Liefeld, făcîndu-și apariția în numărul 98 al New Mutants din 1991. A venit ca o sinteză a mai multor personaje care-l interesau pe Liefeld la avea vreme, fiind un mercenar guraliv, înarmat atît cu săbii, arme de foc și capacități extraordinare de regenerare. Această versiune s-a păstrat de-a lungul a două miniserii și diferite apariții care nu se remarcă prin calități comice sau prin metatextualitate.'

var deathstroke_deadpoolv1 = 'Principalul șablon peste care a fost contruit este Deathstroke The Terminator, principalul antagonist din The New Teen Titans. Trecînd peste numele și costumele asemănătoare, La fel ca Deadpool și acesta este un mercenar nemilos care dispune de săbii, arme de foc, factor de regenerare.';

var spiderman_deadpoolv1 = 'Asemănarea costumului este evidentă, dar probabil principalul lucru preluat de la Spider-Man este logoreea verbală din timpul luptelor.';

var wolverine_deadpoolv1 = 'Asemenea lui Wolverine și Deadpool și-a primit abilitățile regenerative, cît și deranjamentele psihice în urma programului Weapon X.';

var animalman_deadpoolv2 = 'În Animal Man, Grant Morrison a luat un personaj minor, folosindu-l folosit pentru a comenta asupra naturii poveștilor cu supereroi. Există numeroase antecedente pentru o astfel de poveste, însă jocul metaficțional cu codurile benzilor desenate care putea fi motivat prin metafizica poveștii sau starea psihică alterată a personajelor, precum și momentul apariției o situează ca un premergător al primei mutații semnificative suferite de Deadpool.';

var deadpoolv2 = 'Sub Joe Kelly și Ed McGuiness banda capată un caracter comic, fără a deveni pe deplin comedie, plasînd personajul mai degrabă în rolul unui erou șovăitor, cu accese de violență. Joe Kelly introduce punctual jocuri cu codurile benzii desenate, cum ar fi în numărul 11, unde Deadpool și Blind Al sunt trasportați în timp, ca atare fiind desenați în stilul lui John Romita Sr. de la The Amazing Spider-Man.';

var deadpoolv25 = 'Un moment des ignorat în cronologia lui Deadpool este stagiațiunea lui Christopher Priest la titlu, care a luat elementele de satiră, umor și metaficțiune, puternic accentuîndu-le.';

var deadpoolv3 = 'Sub Daniel Way titlul capătă accente de farsă. E mai puțin interesat să identifice absurdul inerent în banda cu supereroi, cît să-l creeze. De exemplu, un motiv deseori prezent ar fi animale exotice care folosesc arme de foc. Way introduce un al doilea set de narațiune internă, care se află în dialog cu cea normală, precum și ridică gradul de violență.';

var deadpoolv4 = 'Pînă acum, momentele în care Deadpool sparge al patrulea zid erau limitate, măcar procentual. Însă mai degrabă ele s-au propagat pe Internet sub formă de meme, iar seria actuală, apariția lui Deadpool în seriale de animație, jocul, pînă și filmul sunt croite după acestă impresie a personajului. Spre deosebire de poveștile din a doua jumătate a anilor 2000, cele de acum încă ';