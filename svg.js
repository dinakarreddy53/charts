window.onload = function() {
    DynamicVectorGraphs.set({
        container:'svg_graph',
        coordinates: {
            x_axis:[{
                    name:"Employee",
                    units:"",
                    values:[10, 12, 35, 51, 66, 88, 100] // array/object/jsoon formats
                }],
            y_axis:[{
                    name:"Total Cost",
                    units:"",
                    values:[01, 18, 23, 40, 55, 62, 73] // array/object/jsoon formats
                }],
            xy_axis:{
                Jan:[10, 20], Feb:[30, 40], Mar:[50, 60], Apr:[30, 60], May:[30, 30]
            }
        }
    });
}

var DynamicVectorGraphs = (function() {
    var x_width;
    var y_height;
    var graphs = ['line','bar','pi','hybrid'];

    var initialize = function() {
        //finding the dimensions of the container
        //dimension of a cotainer is not needed

        x_width = '100%';
        y_height = '100%';

        //finding the container dimensions
        //calculating the view box coordinates and x-axis and y-axis coordinates
        //testing with the percentage and then testing with the pixcel values
        //GenerateGraph();
    };

    var Elements = function() {

    };

    var GenerateGraph = function() {
        var element = new Elements();
        var svgContainer = document.getElementById('svg_graph');
        var app1 = element.svgElement();
        var app2 = element.pathElement();
        alert(app1.appendChild(app2));
        svgContainer.appendChild(app1);
    }

    Elements.prototype.svgElement = function() {
        if('attributes' in this)
            this.attributes();
        var svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
        svg.setAttribute('style', 'border: 1px solid black');
        svg.setAttribute('width', x_width);
        svg.setAttribute('height', y_height);
        svg.setAttribute('viewBox', '0 0 '+x_width+' '+y_height);
        svg.setAttributeNS("http://www.w3.org/2000/xmlns/", "xmlns:xlink", "http://www.w3.org/1999/xlink");
        return svg;
    };

    Elements.prototype.symbolElement = function() {

    };

    Elements.prototype.gElement = function() {

    };

    Elements.prototype.lineElement = function() {

    };

    Elements.prototype.circleElement = function() {

    };

    Elements.prototype.pathElement = function() {
        var pathEle = document.createElementNS("http://www.w3.org/2000/svg", "path");
        pathEle.setAttribute('d', 'M0.1 0.1V100');
        pathEle.setAttribute('style', 'border: 1px solid black');
        pathEle.setAttribute('stroke', 'black');
        pathEle.setAttribute('stroke-width', '3');
        return pathEle;
    };

    Elements.prototype.markerElement = function() {

    };

    Elements.prototype.setEvents = function() {
        alert('Events Set');
    };

    Elements.prototype.attributes = function() {
        //svgElement.prototype.setEvents();
        //svgElement.prototype.setEvents.call(this);
        Elements.prototype.setEvents.apply(this);
        return 'Test';
    };

    return {
        set: new initialize()
    };
}());