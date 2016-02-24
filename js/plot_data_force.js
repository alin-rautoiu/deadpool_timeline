var w = 1200;
var h = $(window).height() - 50;
                   
var force = d3.layout.force()
                     .nodes(dataset.nodes)
                     .links(dataset.edges)
                     .size([w, h])
                     .linkStrength(0.2)
                     .gravity(.1)    
                     .charge([-500])
                     .friction(0.1)            
                     .start();

var colors = d3.scale.category10();

var colors = [
    'rgb(254, 243, 3)' //0
    ,'rgb(254, 10, 10)'
    ,'rgb(201, 169, 50)'
    ,'rgb(141, 200, 60)'
    ,'rgb(141, 155, 60)'
    ,'rgb(243, 136, 32)'
    ,'rgb(214, 39, 40)'
    ,'rgb(214, 39, 40)'
    ,'rgb(214, 39, 40)'
    ,'rgb(214, 39, 40)'

]

var svg = d3.select("#drawing_area")
            .append("svg")
            .attr("width", w)
            .attr("height", h);         

        
var edges = svg.selectAll("path")
        .data(dataset.edges)
        .enter()
        .append("path")
        .attr("id", function(d, i) {
            return d.name;
        })
        .attr("class", function(d, i) {
            return d.source.type;
        });       

var gnodes = svg.selectAll("g.gnode")
        .data(dataset.nodes)
        .enter()
        .append("g")
        .attr('type', "button")
        .attr('data-toggle', "modal")
        .attr('data-target', "#myModal")
        .classed('gnode', true);
     
var dragstart = function(d){
    d3.select(this).classed("fixed", d.fixed = true);
}  

var nodeSize = function(d){
    var size = 1;
            dataset.edges.forEach(function(obj){
                if(obj.name.split("_")[0] === d.name){
                    size++;
                }
            });
            return size * 10;
}

var nodes = gnodes
        .each(function(d){
            var g = d3.select(this)
            if(d.type == 'influence'){
                g.append('rect')
                .attr('width', 50
                )
                .attr('height', 50);
            } else if (d.type == 'deadpool'){
                g.append('circle')
                .attr('r', 25);
            }
        })
        .attr("id", function(d, i) {
            return dictionary.nodes[i].name;
        })
        .style("fill", function(d, i) {
                return colors[i];
        })
        .call(force.drag().on("dragstart", dragstart));


svg.selectAll("path").each(
    function(d,i){
        
    });            
           
var isName = function(element, array){
    for(var i = 0; i < array.length; i++){
        if(array[i].name == element.name){
            return array[i].display;
        }
    }
    return '';
}
        
var label = gnodes.append("text")
            .text(function(d) {
                return isName(d, dictionary.nodes);
                })
            .style('stroke', '#FFF')
            .style('stroke-width', '1px')
            .style('paint-order', 'stroke')
            .style('fill', '#000')    
                ;             

label
    .attr("text-anchor", "middle")
    .attr("y", function(d){
        if(d.type === 'influence'){
            return -1 * nodeSize(d) - 5;
        } else {
            return -1 * nodeSize(d) - 20;
        }
    })
    .attr("x", function(d){
        if(d.type === 'influence'){
            return 25;
        } else {
            return $(this).x;
        }
    })
        
force.on("tick", function(e) {
var k = e.alpha;
var left_right = 0;
var distance = 65;
var last_depth;
    edges[0].forEach(function(d, i) {
       
            d.__data__.source.y += d.__data__.source.depth * 120 - d.__data__.source.y;
            
            if(d.__data__.source.type === 'influence'){
                last_depth = d.__data__.target.depth;
                left_right *= -1;
                d.__data__.source.x += (w / 2 - (last_depth * left_right * distance) - d.__data__.source.x) * k;
                left_right += left_right == 0 ? 1 : 0;
            } else {
                d.__data__.source.x += (w / 2 - d.__data__.source.x) * k;   
            }
                             
    });

    edges.attr('d', function(d){
        var dx = d.target.x - d.source.x;
        var dy = d.target.y - d.source.y;
        var dr = Math.sqrt(dx * dx + dy * dy) * dx / dy;
        var jx = (d.target.x + d.source.x) / 2;
        var jy = (d.target.y + d.source.y) / 2;
        
        
        var sourcex = d.source.x < w ? d.source.x : w - 50;
        var sourcey = d.source.y; 
        var targetx = d.target.x < w ? d.target.x : w - 50;
        var targety = d.target.y; 
        
        if(d.source.type === 'influence'){
            return "M " + (sourcex + 25) + " " + (sourcey + 25) + " L " + targetx + " " + targety;                          
        } else {
            return "M" + sourcex + "," + sourcey + "A" + h/2 + "," + h/2 + " 0 0,0 " + targetx + "," + targety;
        }
    });

    gnodes.attr("transform", function(d) {             
        var x = d.x < w ? d.x : w - 50;
        var y = d.y;
        d.x = x; 
        return 'translate(' + [x, y] + ')'; 
    });
            
});

                                                         