var key = function(name){
    var source = name.split('_')[0];
    switch (source) {
            case 'spiderman':
                return 0;
            break;
            case 'deathstroke':
              return 1;
            break;
            case 'wolverine':
              return 2;
            case 'animalman':
                return 3;
                break;
            case 'shehulk':
                return 4;
            break;
            case 'ambushbug':
               return 5;
            break;
            case 'deadpoolv1':
                return 6;
                break;
            case 'deadpoolv2':
                return 7;
            break;
            case 'deadpoolv25':
                return 8;
            break;
            case 'deadpoolv3':
              return 9;
            break;
            case 'deadpoolv4':
                return 10;
            break;
            default:
                return 0;
                break;
        }
}

var createCarouselText = function(stringArray){
    var carouselText = "";
    if(stringArray.length == 1){
        carouselText += 
        '<ol class="rslides carousel-indicators">'  
            +'<li data-target="#detail_text" data-slide-to="0" style="visibility:hidden" class="active"></li>'  
        +'</ol>'
        +'<div class="carousel-inner" role="listbox">' 
            + ' <div class="item active"> <img src="' + stringArray[0].img + '"alt=""/><div class="carousel-caption"><h3>'+      stringArray[0].header + '</h3><p>'+ stringArray[0].text + '</p></div></div>'       
        + '</div>';
    } else {
        carouselText += '<ol class="rslides carousel-indicators">' 
        for(var i = 0; i < stringArray.length; i++){
            carouselText +=( '<li data-target="#detail_text" data-slide-to="' + i + '"class="' + (i == 0 ? 'active' : "") + '"></li>' )
        } 
            carouselText +='</ol><div class="carousel-inner" role="listbox">';
            
        for(var i = 0; i < stringArray.length; i++){            
            carouselText += ('<div class="item ' + (i == 0 ? ' active' : "") +  '"> <img src="' + stringArray[i].img + '"alt=""/><div class="carousel-caption">'          + (i == 0 ? '<h3>'+ stringArray[0].header + '</h3>' : "") + '<p>'+ stringArray[i].text + '</p></div></div>');
        }
         carouselText +='</div>';
    }
    return carouselText;
}

var deathstrokeArray = [
    {img: 'assets/deathstroke.jpg',
    header: 'Deathstroke the Terminator',
    text: '<b>Deadpool\'s</b> main mold is <b>Deathstroke the Terminator</b>, The New Teen Titans villain.'},
    {img: 'assets/deathstroke2.jpg',
    header: '',
    text: 'Going beyond the similar costumes and names, <b>Deathstroke</b> is also a merciless mercenary who uses a varied arsenal counting explosives, swords, firearms and his own healing factor.'},
    {img: 'assets/deathstroke3.jpg',
    header: '',
    text: 'On the other hand, <b>Deathstroke</b> is more sober and never went cuckoo in the head. As <b>Joe Kelly</b> and <b>Ed McGuinness</b> later demonstred in <b>Superman/Man Annual #1</b> when they created an alternate version of <b>Deathstroke</b> closely resembling their <b>Deadpool</b>.'}
];

var deathstroke_deadpoolv1 = createCarouselText(deathstrokeArray);

var spidermanArray = [
    {img: 'assets/spiderman.jpg',
    header: 'Spider-Man',
    text: 'Beyond their similar masks and color, <b>Deadpool</b> wouldn\'t be what he\'s today without his banter during the fights.'},
];

var spiderman_deadpoolv1 = createCarouselText(spidermanArray);

var wolverineArray = [
    {img: 'assets/wolverine1.jpg',
    header: 'Wolverine',
    text: 'Wolverine</b> got their trademark abilities and mental derangements from the Weapon X program.'},
    {img: 'assets/wolverine2.jpg',
    header: '',
    text: 'And from all the various supergroups in Marvel Comics he\'s most closely associated with the X-Men over the years. Not surprising, having debuted in one of their books.'}
];

var wolverine_deadpoolv1 = createCarouselText(wolverineArray);    

var deadpoolv1Array = [
    {img: 'assets/wolverine1.jpg',
    header: 'Deadpool - phase 1',
    text: '<b>Deadpool</b> was created by <b>Rob Liefeld</b>, making his first appearance in #98 of the New Mutants from 1991, written by <b>Fabian Nicieza</b>.'},
    {img: 'assets/wolverine1.jpg',
    header: '',
    text: 'He appeared as a synthesis of multiple chracters which interested <b>Liefeld</b> at the time resulting in a talkative mercenary, armed with swords, guns, an extraordinay healing factor coupled with an ugly mug and a defective teleportation belt.'},
    {img: 'assets/wolverine1.jpg',
    header: '',
    text: 'This is the version kept for different appearences and two miniseries, none of which remarked itself through humor or metatextuality, other than the main characters mean spirited pop-culture references from his dialogue, which were more of an warped verion of Spidey\'s trademark banter.'}
];

var deadpoolv1 = createCarouselText(deadpoolv1Array);   

var animalmanArray = [
    {img: 'assets/wolverine1.jpg',
    header: 'Animal Man',
    text: 'In <b>Animal Man</b>, <b>Grant Morrison</b> took a minor character, using him to comment on the nature of superhero stories.'},
    {img: 'assets/wolverine1.jpg',
    header: '',
    text: 'There are numerous antecendets for this, but the metafictional play with comics\' language, which could for the most part still be explained by the stories metaphysics or by the character\'s altered mental state, opened the gates for the kind of comic <b>Deadpool</b> would become.'}
];

var animalman_deadpoolv2 = createCarouselText(animalmanArray);

var deadpoolv2Array = [
    {img: 'assets/wolverine1.jpg',
    header: 'Deadpool - phase 2',
    text: 'Under <b>Joe Kelly</b> and <b>Ed McGuinness</b> the comic becomes humorous in nature, without becoming a full-on comedy, placing it\'s character in the place of a reluctant hero, with often fits of violence.'},
    {img: 'assets/wolverine1.jpg',
    header: '',
    text: 'To counterpoint <b>Deadpool\'s</b> insanity, the authors grow around him a recurring cast of characters who present him with moral dillemas.'},
    {img: 'assets/wolverine1.jpg',
    header: '',
    text: 'They also introduce a slightly more self-aware narration from Wade\'s point of view and punctual plays with the comics\'s language, such as in issues 11, where <b>Deadpool</b> and <b>Blind Al</b> are transported back in time and drew in the style <b>John Romita Jr.</b> would have used to drew his issues of <b>The Amazing Spider-Man</b> that would have happened at the time.'},
    {img: 'assets/wolverine1.jpg',
    header: '',
    text: 'It\'s worth noting that at the around the same time, <b>Garth Ennis</b> and <b>John McCrea</b> were taking a similar route at <b>DC</b> with <b>Hitman</b>.'}
];

var deadpoolv2 = createCarouselText(deadpoolv2Array);;

var shehulk_deadpoolv25 = "Before <b>Deadpool</b>, there was <b>She-Hulk</b>. <b>The Sensational She-Hulk</b> by </b>John Byrne</b>, to be more exact. <b>She-Hulk</b>, especially on covers, but from time to time also inside the stories, would break the fourth wall comment about the relationship between her, her authors, the type of stories she appered in, the title's (lack of) success and the techniques neccesary to maintain it.";

var deadpoolv25 = "A moment usually ignored in <b>Deadpool's</b> chronology is <b>Christopher Priest's</b> run on the title. <b>Priest</b> took the elements of satire, humor, metafiction and ran with them. Most striking of all is a village that Wade hallucinates where he meets all the characters written up to that point by <b>Priest</b>, whose series were canceled. <b>Priest's</b> take on the character is prescient, being the closest we've had to the current approach.";

var ambushbug_deadpoolv3 = '<b>Ambush Bug</b> is a character capable of teleportation, resistent to physical harm and with a psyhical instability that carries him through exaggerated, absurd, even cartoonish stories that for the most part are parodying current events in superhero stories.';

var deadpoolv3 = "Under <b>Daniel Way</b> the title becomes farcical in nature. While fidgeting around the big events at <b>Marvel</b> and mocking them, it's much less interested in showcasing the absurd inherent in superhero comics, than to creat something ludicrous of it's own. Way introduces a second set of narration -the one that usually breaks the fourth wall-, leaving behind secondary characters like Weasel, Blind Al or Cable. It also raises the violence on display.";

var deadpoolv4 = 'Up to this point, the moments when Deadpool broke the Fourth Wall.';

var text_dictionary = [
    {header: 'The Amazing Spider-Man', body: spiderman_deadpoolv1},
    {header: 'Deathstroke', body: deathstroke_deadpoolv1},
    {header: 'Wolverine', body: wolverine_deadpoolv1},
    {header: 'Animal Man', body: animalman_deadpoolv2},
    {header: 'Sensational She-Hulk', body: shehulk_deadpoolv25},
    {header: 'Ambush Bug', body: ambushbug_deadpoolv3},
    {header: 'Deadpool - Nicieza și Liefeld', body: deadpoolv1},
    {header: 'Deadpool - Joe Kelly și Ed McGuinness', body: deadpoolv2},
    {header: 'Deadpool - Christopher Priest', body: deadpoolv25},
    {header: 'Deadpool - Daniel Way', body: deadpoolv3},
    {header: 'Deadpool contemporan', body: deadpoolv4}
]

                    
