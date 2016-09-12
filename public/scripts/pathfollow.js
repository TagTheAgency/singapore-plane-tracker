queue()
.defer(d3.xml, "../templates/path.svg", "image/svg+xml")
.await(ready);

function ready(error, xml) {

  //Adding our svg file to HTML document
  var importedNode = document.importNode(xml.documentElement, true);
  d3.select("#plane-animation").node().appendChild(importedNode);

  var svg = d3.select("svg");

  var path = svg.select("path#plane-path"),
  startPoint = pathStartPoint(path);

  var marker = svg.append("svg:image")
    .attr("xlink:href", "../imgs/plane.png")
    .attr("width", 50)
    .attr("height", 50)
    .attr("x", -30)
    .attr("y", -30)

  marker.attr("r",   7)
    .attr("transform", "translate(" + startPoint + ")")

  transition();

  function pathStartPoint(path) {
    var d = path.attr("d"),
    dsplitted = d.split(" ");
    return dsplitted[1].split(",");
  }

  function transition() {
    marker.transition()
        .duration(7500)
        .attrTween("transform", translateAlong(path.node()))
        .each("end", transition);// infinite loop
  }
  
  function translateAlong(path) {
    var l = path.getTotalLength();
    return function(i) {
      return function(t) {
        var p = path.getPointAtLength(t * l);
        return "translate(" + p.x + "," + p.y + ")";//Move marker
      }
    }
  }
}