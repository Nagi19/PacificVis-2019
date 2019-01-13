
// var svg_test =  d3.select(".ploycircle_test").append("svg").attr("width", 64).attr("height", 600).attr("id","test");
// var initCircle = [32,588]
// polyCirleArray(svg_test,870,553,initCircle);

////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////

function polyCirleArray(svg,reported,sur,initCircle, d){

      var circlegroup = svg.append("g");
     
      var total_diamondNumb = Math.ceil(reported/96)
      var sur_diamondNumb = Math.ceil(sur/96)
      var sur_remainder    = sur % 96
      var death_diamondNumb = Math.round(sur/96)

      var gap = 5;

      if (total_diamondNumb>1 && sur_diamondNumb>1) {

        circleArray(gap,initCircle,96,0,circlegroup)

        initCircle = [initCircle[0],initCircle[1]-62]

        polyCirleArray(circlegroup,reported-96,sur-96,initCircle,d);
      }

      if (total_diamondNumb >1 && sur_diamondNumb==1) {

        circleArray(gap,initCircle,sur,96-sur,circlegroup)

        initCircle = [initCircle[0],initCircle[1]-62]

        polyCirleArray(circlegroup,reported-96,0,initCircle,d);
      }

      if (total_diamondNumb > 1 && sur_diamondNumb == 0) {

        circleArray(gap,initCircle,0,reported,circlegroup)

        initCircle = [initCircle[0],initCircle[1]-62]

        polyCirleArray(circlegroup,reported-96,0,initCircle,d);
      }

      if (total_diamondNumb == 1 && sur_diamondNumb == 1) {

        circleArray(gap,initCircle,sur,reported-sur,circlegroup)
      }


      if (total_diamondNumb == 1 && sur_diamondNumb == 0) {

        circleArray(gap,initCircle,0,reported,circlegroup)

      }

      
      return circlegroup;

}


////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////




// here is only computing one circlesquad
function circleArray(gap, initCircle,surviveNumb,deathNumb,circlegroup_svg){
      var counter = 3
      var radius = 1.5

      // this color counter is for later assigning color filling.
      var colorCounter = 0
      var a = 0;

      while (a<12)
          {

              var x = initCircle[0]
              var y = initCircle[1] - a* gap ;

              if (a < 6) {
                for (var b = 0; b < counter; b++) {
                 colorCounter ++;

                 x = x + Math.pow((-1),b)*gap*b
                      circlegroup_svg.append("circle")
                        .attr("cx", x).attr("cy", y).attr("r", radius).style("fill", function(){if (colorCounter<surviveNumb+1) {
                          return "red";
                        }

                        else if (colorCounter<(surviveNumb+deathNumb+1)&& colorCounter>surviveNumb) {

                          return "black";
                        }

                        else {
                          return "none";
                        }});

                }
                counter = counter +2;
              }

              else {

                counter = counter - 2;
                for (var b = 0; b < counter; b++) {
                 colorCounter ++;
                 x = x + Math.pow((-1),b)*gap*b
                      circlegroup_svg.append("circle")
                        .attr("cx", x).attr("cy", y).attr("r", radius).style("fill", function(){if (colorCounter<surviveNumb+1) {
                          return "red";
                        }

                        else if (colorCounter<(surviveNumb+deathNumb+1)&& colorCounter>surviveNumb) {

                          return "black";
                        }

                        else {
                          return "none";
                        }});;
                }

              }

              a++;

          }


}
