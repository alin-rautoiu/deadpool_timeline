$(document).ready( function(){
    var mobile = ($(window).width() < 800);;
    
    if (mobile === true){
        $("#edge_detail").removeClass('affix');
    }
    
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
        if (mobile === false){
            $('#drawing_area').animate({
                left: '-300px',}
                ,300
                );
        }
        
        var name = $(this).parent().attr('id');
        
        switch (name) {
            case 'deadpoolv1':
                $('#edge_detail').append('<h1>  Deadpool - Nicieza și Liefeld </h1>');
                $('#edge_detail').append('<p>' + deadpoolv1 + '<p>');
                break;
            case 'deadpoolv2':
                $('#edge_detail').append('<h1> Deadpool de Kelly și McGuinness </h1>');
                $('#edge_detail').append('<p>' + deadpoolv2 + '<p>');
            break;
            case 'deadpoolv25':
                $('#edge_detail').append('<h1> Deadpool de Priest </h1>');
                $('#edge_detail').append('<p>' + deadpoolv25 + '<p>');
            break;
            case 'deadpoolv3':
                $('#edge_detail').append('<h1> Deadpool de Way </h1>');
                $('#edge_detail').append('<p>' + deadpoolv3 + '<p>');
            break;
            case 'deadpoolv4':
                $('#edge_detail').append('<h1> Deadpool contemporan </h1>');
                $('#edge_detail').append('<p>' + deadpoolv4 + '<p>');
            break;
            default:
                break;
        }        
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
        if(!isDragging && $(this).hasClass('influence')){
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
        
        $('#edge_detail').show();
        $('#edge_detail').empty();
        
        
        
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
            case 'animalman_deadpoolv2':
                $('#edge_detail').append('<h1> Animal Man </h1>');
                $('#edge_detail').append('<p>' + animalman_deadpoolv2 + '<p>');
                break;
            case 'shehulk_deadpoolv25':
                $('#edge_detail').append('<h1> Sensational She-Hulk </h1>');
                $('#edge_detail').append('<p>' + shehulk_deadpoolv25 + '<p>');
            break;
            case 'ambushbug_deadpoolv3':
                $('#edge_detail').append('<h1> Ambush Bug </h1>');
                $('#edge_detail').append('<p>' + ambushbug_deadpoolv3 + '<p>');
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



var deathstroke_deadpoolv1 = 'Principalul șablon peste care a fost contruit este Deathstroke The Terminator, principalul antagonist din The New Teen Titans. Trecînd peste numele și costumele asemănătoare, La fel ca Deadpool și acesta este un mercenar nemilos care dispune de săbii, arme de foc și factor de regenerare. Deathstroke e ceva mai sobru și are toate doagele acasă.';

var spiderman_deadpoolv1 = 'Asemănarea costumului este evidentă, dar probabil principalul lucru preluat de la Spider-Man este logoreea verbală din timpul luptelor.';

var wolverine_deadpoolv1 = 'Asemenea lui Wolverine și Deadpool și-a primit abilitățile regenerative, cît și deranjamentele psihice în urma programului Weapon X.';

var deadpoolv1 = 'Deadpool a fost creat de Rob Liefeld, făcîndu-și apariția în numărul 98 al New Mutants din 1991. A venit ca o sinteză a mai multor personaje care-l interesau pe Liefeld la avea vreme, fiind un mercenar guraliv, înarmat atît cu săbii, arme de foc, cît și capacități extraordinare de regenerare. Această versiune s-a păstrat de-a lungul a două miniserii și diferite apariții care nu se remarcă prin calități comice sau prin metatextualitate. Face totuși diferite referințe la cultura pop în dialogul său și probabil de aici a pornit totul.'

var animalman_deadpoolv2 = 'În Animal Man, Grant Morrison a luat un personaj minor, folosindu-l folosit pentru a comenta asupra naturii poveștilor cu supereroi. Există numeroase antecedente pentru o astfel de poveste, însă jocul metaficțional cu codurile benzilor desenate care putea fi motivat prin metafizica poveștii sau starea psihică alterată a personajelor, precum și momentul apariției o situează ca un premergător al primei mutații semnificative suferite de Deadpool.';

var deadpoolv2 = 'Sub Joe Kelly și Ed McGuiness banda capată un caracter comic, fără a deveni pe deplin comedie, plasînd personajul mai degrabă în rolul unui erou șovăitor, cu accese de violență. Pentru a contrapuncta nebunia personajului principal, autorii cultivă o menajerie de personaje secundare care îl supun la dileme morale. Joe Kelly introduce punctual jocuri cu codurile benzii desenate, cum ar fi în numărul 11, unde Deadpool și Blind Al sunt trasportați în timp, ca atare fiind desenați în stilul lui John Romita Sr. de la The Amazing Spider-Man.';

var shehulk_deadpoolv25 = 'Înainte de Deadpool, la Marvel a fost She Hulk. Mai exact Sensational She-Hulk de John Byrne. She-Hulk, mai ales pe coperte, dar și în interiorul unor povești, comentează asupra relației dintre ea și autorii ei, genul de povești spuse, (in)succesul titlului și practicile necesare pentru a-l obține.';

var deadpoolv25 = 'Un moment des ignorat în cronologia lui Deadpool este stagiațiunea lui Christopher Priest la titlu, care a luat elementele de satiră, umor și metaficțiune, puternic accentuîndu-le. Personajul a continuat, în cea mai mare parte, să apară în benzi de acțiune.';

var ambushbug_deadpoolv3 = 'Ambush Bug este un personaj capabil de teleportare, a cărui instabilitate psihică îl poartă prin povești exagerate, absurde, care deseori parodiază alte benzi cu supereroi.';

var deadpoolv3 = 'Sub Daniel Way titlul capătă accente de farsă. E mai puțin interesat să identifice absurdul inerent în banda cu supereroi, cît să-l creeze. De exemplu, un motiv deseori prezent ar fi animale exotice care folosesc arme de foc. Way introduce un al doilea set de casete pentru narațiunea interioară a personajului, renunțînd în schimb la personaje stabile ca Weasel, Blind Al sau Cable care să echilibreze tonul. De asemenea, ridică gradul de violență.';

var deadpoolv4 = 'Pînă acum, momentele în care Deadpool sparge al patrulea zid erau limitate, măcar procentual. Însă mai degrabă ele s-au propagat pe Internet sub formă de "meme", iar seria actuală, apariția lui Deadpool în seriale de animație, jocul, pînă și filmul, sunt croite după acestă impresie a personajului. Spre deosebire de poveștile din a doua jumătate a anilor 2000, cele de acum încă încearcă să ajungă la o anumită seriozitate emoțională și reintroduc personajele secundare. Departe totuși de a fi o revenire, întrucît acum momentele pline de patos coabiteze cu cele ridicole, iar metatextul este mult mai direct și mai des.';