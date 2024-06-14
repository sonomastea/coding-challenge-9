U05721483
document. AddEventListener ("DOMContent- Loaded", function (){
    const data = [1, 2, 3, 4, 5]; //Example Data 

    const container= d3.select("body")
                    .append ("div")
                    .attr("id", "container");


                    container.selectAll('.data-point"')
                           .data(data)
                           .enter()
                           .append("div")
                           .attr("class", "data-point")
                           .text(d=> d);
    //add interactivity  
    d3.selectAll(".data-point")
          .on("mouseover", function(){
            d3.select(this).style ("backround-color", "firebrick");
          })
             .on("mouseout", function(){
    d3.select(this).style("backround-color","lightblue");
             });
});
