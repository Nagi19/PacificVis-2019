var svg3 =  d3.select(".ploycircle_test").append("svg").attr("width", 800).attr("height", 800);


var initCircle = [50,500]
var radius = 2
var unit = 5
var sur = 53
var death = 30


var circlegroup = svg3.append("g")

circleArray(unit,initCircle,radius,sur,death,(70-sur-death))

function circleArray(unit, initCircle,radius,surviveNumb,deathNumb,emptyNumb){
      var counter = 3

      // this color counter is for later assigning color filling.
      var colorCounter = 0
      var a = 0;

      while (a<12)
          {

              var x = initCircle[0]
              var y = initCircle[1] - a* unit;

              if (a < 6) {
                for (var b = 0; b < counter; b++) {
                 colorCounter ++;

                 x = x + Math.pow((-1),b)*unit*b
                      circlegroup.append("circle")
                        .attr("cx", x).attr("cy", y).attr("r", 2).style("fill", function(){if (colorCounter<surviveNumb+1) {
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
                 x = x + Math.pow((-1),b)*unit*b
                      circlegroup.append("circle")
                        .attr("cx", x).attr("cy", y).attr("r", 2).style("fill", function(){if (colorCounter<surviveNumb+1) {
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
