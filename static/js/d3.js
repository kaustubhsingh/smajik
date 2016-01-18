(function(d3) {
        'use strict';
        //var dataset = {{ donut_chart_data|safe }};
        //window.alert("myObject is " + dataset.toSource());
        
        var dataset = [
                        { label: 'Positive', count: 72 }, 
                        { label: 'Negative', count: 28 }
                      ];
        
        var width = 180;
        var height = 180;
        var donutWidth = 40;
        var radius = Math.min(width, height) / 2;
        var color = d3.scale.ordinal()
            .range(['green', 'red']); 
        var svg = d3.select('#chart')
          .append('svg')
          .attr('width', width)
          .attr('height', height)
          .append('g')
          .attr('transform', 'translate(' + (width / 2) + 
            ',' + (height / 2) + ')');
        var arc = d3.svg.arc()
          .innerRadius(radius - donutWidth) 
          .outerRadius(radius);
        var pie = d3.layout.pie()
          .value(function(d) { return d.count; })
          .startAngle(-90 * (pi/180))
          .endAngle(90 * (pi/180))
          .sort(null);
        var path = svg.selectAll('path')
          .data(pie(dataset))
          .enter()
          .append('path')
          .attr('d', arc)
          .attr('fill', function(d, i) { 
            return color(d.data.label);
          });
      })(window.d3);