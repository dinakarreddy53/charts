"use strict";
window.onload = function() {
    var myChart = DVGraphs({
        container:'newGraph',
        title:"New Graph",
        sub_title:"New Graph",
        legend: "New Graph",
        width: 200,
        height: 200,
        coordinates: {
            LineGraph: {
                x_points:[{
                    title:"Employee",
                    units:"",
                    values:[10, 12, 35, 51, 66, 88, 100] // array/object/JSON formats
                },{
                    title:"Department",
                    units:"",
                    values:['Accounts', 'HR', 'Finance', 'Developer', 'Division Manager', 'Manager'] // array/object/JSON formats
                }],
                y_points:[{
                    name:"Total Cost",
                    units:"",
                    values:[1, 18, 23, 40, 55, 62, 73] // array/object/JSON formats
                },{
                    name:"Total Cost",
                    units:"",
                    values:[1, 18, 23, 40, 55, 62] // array/object/JSON formats
                }],
                points:[
                    {x:[], y:[]}
                ]
            }
        }
    });
}


var DVGraphs = (function() {
    gd = {};

    var cal = function() {

    }

    var Graph = function() {
        
    };

    var Elements = function() {

    };

    var GenerateGraph = function() {
        var element = new Elements();
        var svgContainer = document.getElementById('newGraph');
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

    return function ini(I) {
        alert(I.width);
        return {
            restart: restart(),
            reset: reset(),
            remove:remove()
        };
    };
})();



/*
    1. Logger
    2. 
*/