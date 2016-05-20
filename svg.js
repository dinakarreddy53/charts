window.onload = function() {
    var svg_graphs = (function() {
        var svgElement = function() {
            alert('attributes' in this);
            alert(this.attributes());
            var svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
            svg.setAttribute('style', 'border: 1px solid black');
            svg.setAttribute('width', '600');
            svg.setAttribute('height', '250');
            svg.setAttributeNS("http://www.w3.org/2000/xmlns/", "xmlns:xlink", "http://www.w3.org/1999/xlink");
            var svgElement = document.getElementById('svg_graph');
            svgElement.appendChild(svg);
        };
        svgElement.prototype.setEvents = function() {
            alert('Events Set');
        }
        svgElement.prototype.attributes = function() {
            //svgElement.prototype.setEvents();
            //svgElement.prototype.setEvents.call(this);
            svgElement.prototype.setEvents.apply(this);
            return 'Test';
        }
        return {
            svgEle: new svgElement()
        }
    }());
    svg_graphs.svgEle;
}