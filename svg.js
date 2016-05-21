window.onload = function() {
    var svg_graphs = (function() {
        var graph = 'line';
        var xDimensin = '600px';
        var yDimension = '250px';
        var initialize = function() {
            //finding the container dimensions
            //calculating the view box coordinates and x-axis and y-axis coordinates
            //Testing with the percentage and then testing with the pixcel values
        
        };
        
        var Graphs = ['Line', 'Hybrid', 'BarCharts'];

        var Elements = function() {
            if('undefined' != typeof(graph) ) {
                
            }
        };
        
        Elements.prototype.svgElement = function() {
            if('attributes' in this)
                this.attributes();
            var svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
            svg.setAttribute('style', 'border: 1px solid black');
            svg.setAttribute('width', '600');
            svg.setAttribute('height', '250');
            svg.setAttributeNS("http://www.w3.org/2000/xmlns/", "xmlns:xlink", "http://www.w3.org/1999/xlink");
            var svgElement = document.getElementById('svg_graph');
            svgElement.appendChild(svg);
        };
        
        Elements.prototype.gElement = function() {

        };
        
        Elements.prototype.lineElement = function() {
            
        };
        
        Elements.prototype.pElement = function() {
            
        };
        
        Elements.prototype.circleElement = function() {
            
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
            svgEle: new initialize()
        };
    }());
    svg_graphs.svgEle;
};