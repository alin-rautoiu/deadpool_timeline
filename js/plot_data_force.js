var draw = function (){
    var w = $(window).width() > 1200 ? $(window).width() * 2 / 3 : $(window).width() - 20;
    var h = $(window).height() - 25;
    var mobile = ($(window).width() < 800);
    var drawing_size = mobile ? 10 : 23;
    var edge_length = h / 7.5;
                    
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
        'rgb(254, 243, 3)' 
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
            .style('stroke-width', '4')
            .attr("class", function(d, i) {
                return d.source.type;
            });       

    var gnodes = svg.selectAll("g.gnode")
            .data(dataset.nodes)
            .enter()
            .append("g")
            .classed('gnode', true)
            .classed('deadpool', function(d){
                return d.type == 'deadpool';
            })
            .classed('influence', function(d){
                return d.type == 'influence';
            });
        
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
                return size * drawing_size;
    }

    var nodes = gnodes
            .each(function(d){
                var g = d3.select(this)
                if(d.type == 'influence'){
                    g.append('rect')
                    .attr('width', drawing_size * 2
                    )
                    .attr('height', drawing_size * 2)
                    .attr('rx', 15
                    )
                    .attr('ry', 15);
                } else if (d.type == 'deadpool'){
                    g.append('circle')
                    .attr('r', drawing_size)
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

    var correction = mobile ? 10 : 25;

    label
        .attr("text-anchor", "middle")
        .attr("y", function(d){
            if(d.type === 'influence'){
                return -1 * nodeSize(d) + correction + 10;
            } else {
                return -1 * nodeSize(d) + correction - 5;
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
    var distance = w / 13.875;
    var depth;
        edges[0].forEach(function(d, i) {
        
                d.__data__.source.y += d.__data__.source.depth * edge_length - d.__data__.source.y;
                
                if(d.__data__.source.type === 'influence'){
                    depth = d.__data__.target.depth - d.__data__.source.depth;
                    left_right *= -1;
                    d.__data__.source.x += (w / 2 - (depth * left_right * distance) - d.__data__.source.x) * k;
                    left_right += left_right == 0 ? 1 : 0;
                } else {
                    d.__data__.source.x += (w / 2 - d.__data__.source.x);   
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
                return "M " + (sourcex + correction) + " " + (sourcey + correction) + " L " + targetx + " " + targety;                          
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
}

$(document).ready(function(){
    draw();
})

$(window).on('resize', function(){
    d3.select("svg").remove();
    draw();
})