// Draw the enemies in an svg element.
// Make it so that the enemies move to a new random location every second.
// Make a differently-colored dot to represent the player. Make it draggable.
// Detect when a enemy touches you.
// Keep track of the user's score, and display it.
//
// make a player
//   move relative, move absolute, get and set x and y.
//   needs to be an SVG
// make an enemy
//   has x, y, radius
//   next position
// make an array of enemies
// render the enemies
// make a gameboard (axes)
// make game options and game stats
// make function to actually play (increment scores, generate new enemies, etc.) enter, update, edit
// make collission detection function
// make dragging functionality
// update scores

// append svg tag to the body within a variable

var game = function(height, width, numOfEnemies) {
  // make object gameOptions to hold all the game options
  var gameOptions = {
    height: height,
    width: width,
    numberOfEnemies: numOfEnemies
  };

  // make the svg element
  var svg = d3.select("#gameBoard").append("svg").attr("height", gameOptions.height).attr("width", gameOptions.width);

  // make our enemy class
  var Enemy = function(i) {
    var enemy = {
      "id": i,
      "x": Math.random() * width, // *100 to navigate on x-axis when range is 0-100
      "y": Math.random() * height, // *100 to navigate on y-axis when range is 0-100
      "r": 10
    };
    return enemy;
  };

  var Player = function() {
    var player = {
      "id" : 'player',
      "x": gameOptions.width * 0.5,
      "y": gameOptions.height * 0.5
    };
    return player;
  };

  // makes the array of objects
  var data = _.range(0, gameOptions.numberOfEnemies).map(function(i){
    return Enemy(i);
  });

  var enemies = svg.selectAll("circle.enemy").data(data);

  enemies.enter().append("circle").attr("class", "enemy").attr("fill", "black").attr("cx", function(d){return d.x;}).attr("cy", function(d) {return d.y;}).attr("r", function(d){return d.r;});

  //update function.
  //find new coordinates for all enemies
  //setInterval for once/second
  //animate Tween for all enemies.
  var updateEnemies = function(data) {
    enemies.transition()
      .duration(500)
      .attr('cx', function(d) {return Math.random() * gameOptions.width;})
      .attr('cy', function(d) {return Math.random() * gameOptions.height;});
  };

  setInterval(updateEnemies, 1000);

};













































game(700, 700, 10);
