var namespace = "http://www.w3.org/2000/svg"

// Write your code here!
function quiz(){
  var quizzScore = 0
  var one = document.querySelector("input[name='number']:checked").value
  if(one == "4"){
    quizzScore = quizzScore + 1
  }
  var two = document.querySelector("input[name='numberz']:checked").value
  if(two =="134"){
    quizzScore = quizzScore + 1
  }
  var three = document.querySelector("input[name='type']:checked").value
if(three=="Moba"){
  quizzScore = quizzScore + 1
}
var four = document.querySelector("input[name='mode']:checked").value
if(four=="80% cdr"){
  quizzScore = quizzScore + 1
}
var five = document.querySelector("input[name='company']:checked").value
if(five=="Riot Games"){
  quizzScore = quizzScore + 1
}
alert("Your score is")
alert(quizzScore)

}
var score = 0
var scoreText = makeText(score, 10, 20, 20, 'Roboto', "cyan")
var bird = makeImage("data:image/jpeg;base64,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",230,75,50,50)

var obstacle1 =
    makeRect(100,0,30,50,"Red")
var obstacle2 = makeRect(70,120,30,90,"Red")
var obstacle3 = makeRect(30,0,30,70,"red")
var obstacle4 = makeRect(150,100,30,150,"red")
addEventListener("keydown",moveBird)


function moveBird(event){


  if(event.key == "ArrowUp" ){
    move(bird,0,-14)
  }


}


function obstacles(){
  var x = getX(bird)
  var y = getY(bird)
  var ox = getX(obstacle1)
  var ox2 = getX(obstacle2)
  var ox3 = getX(obstacle3)
  var ox4 = getX(obstacle4)
  var oy = getY(obstacle1)
   move(bird,0,1)
  move(obstacle1,1,0)
  move(obstacle2,1,0)
  move(obstacle3,1,0)
  move(obstacle4,1,0)
  if(ox > 300){
    setX(obstacle1,0)
  }
  if(ox2 > 300){
    setX(obstacle2,0)
  }
  if(ox3 > 300){
    setX(obstacle3,0)
  }
  if(ox4 > 300){
    setX(obstacle4,0)
  }
   if(y <200){
   score= score+1
    scoreText.innerHTML = score
  }
  if( y >200){
    makeText("You Fell", 80, 100, 50, 'Roboto', "cyan",1)
  }
  if(collides(bird,obstacle1)){
    makeText("You Fail", 80, 100, 50, 'Roboto', "cyan",1)


  }
  else if(collides(bird,obstacle2)){
 makeText("You Fail", 80, 100, 50, 'Roboto', "cyan",1)


  }
   else if(collides(bird,obstacle3)){
    makeText("You Fail", 80, 100, 50, 'Roboto', "cyan",1)


  }
   else if(collides(bird,obstacle4)){
  makeText("You Fail", 80, 100, 50, 'Roboto', "cyan",1)

  }

 else{
  requestAnimationFrame(obstacles)
}}


// DO NOT EDIT CODE BELOW THIS LINE!
function getX(shape) {
  if (!shape) {
    throw "Uh oh, you tried to get the x coordinate of a shape that doesn't exist!"
  }
  try {
    if (shape.hasAttribute("x")) {
      return parseFloat(shape.getAttribute("x"))
    } else if (shape.hasAttribute("cx")) {
      return parseFloat(shape.getAttribute("cx"))
    }  else if (shape.hasAttribute("x1")) {
      return parseFloat(shape.getAttribute("x1"))
    }
  } catch(err) {
    throw "You're trying to get the x coordinate of something that isn't a shape!"
  }
}

function getY(shape) {
  if (!shape) {
    throw "Uh oh, you tried to get the y coordinate of a shape that doesn't exist!"
  }
  try {
    if (shape.hasAttribute("y")) {
      return parseFloat(shape.getAttribute("y"))
    } else if (shape.hasAttribute("cy")) {
      return parseFloat(shape.getAttribute("cy"))
    } else if (shape.hasAttribute("y1")) {
      return parseFloat(shape.getAttribute("y1"))
    }
  } catch (err) {
    throw "You're trying to get the y coordinate of something that isn't a shape!"
  }
}

function setX(shape, x) {
  if (!shape) {
    throw "I can't set the x of a shape that doesn't exist!"
  }
  if (isNaN(x)) {
    throw "You need to tell me what to set the x coordinate to!"
  }
  if (shape.hasAttribute("x")) {
    shape.setAttribute("x", x)
  } else if (shape.hasAttribute("cx")) {
    shape.setAttribute("cx", x)
  } else if (shape.hasAttribute("x1")) {
    var xDiff = parseFloat(shape.getAttribute("x2")) - parseFloat(shape.getAttribute("x1"))
    shape.setAttribute("x1", x)
    shape.setAttribute("x2", x + xDiff)
  }
}

function setY(shape, y) {
  if (!shape) {
    throw "I can't set the y of a shape that doesn't exist!"
  }
  if (isNaN(y)) {
    throw "You need to tell me what to set the y coordinate to!"
  }
  if (shape.hasAttribute("y")) {
    shape.setAttribute("y", y)
  } else if (shape.hasAttribute("cy")) {
    shape.setAttribute("cy", y)
  } else if (shape.hasAttribute("y1")) {
    var yDiff = parseFloat(shape.getAttribute("y2")) - parseFloat(shape.getAttribute("y1"))
    shape.setAttribute("y1", y)
    shape.setAttribute("y2", y + yDiff)
  }
}

function move(shape, dx, dy) {
  if (!shape) {
    throw "I can't move a shape that doesn't exist!"
  }
  if (isNaN(dx)) {
    throw "You need to tell me how much to move the shape in the x direction!"
  }
  if (isNaN(dy)) {
    throw "You need to tell me how much to move the shape in the y direction!"
  }
  if (shape.hasAttribute("x") && shape.hasAttribute("y")) {
    var x = parseFloat(shape.getAttribute("x"))
    var y = parseFloat(shape.getAttribute("y"))
    shape.setAttribute("x", x + dx)
    shape.setAttribute("y", y + dy)
  } else if (shape.hasAttribute("cx")) {
    var cx = parseFloat(shape.getAttribute("cx"))
    var cy = parseFloat(shape.getAttribute("cy"))
    shape.setAttribute("cx", cx + dx)
    shape.setAttribute("cy", cy + dy)
  } else if (shape.hasAttribute("x1")) {
    var x1 = parseFloat(shape.getAttribute("x1"))
    var y1 = parseFloat(shape.getAttribute("x1"))
    setX(shape, x1 + dx)
    setY(shape, y1 + dy)
  }
}

function makeCircle(cx, cy, r, fill, opacity) {
  var circle = document.createElementNS(namespace, "circle")
  circle.setAttribute("cx", cx)
  circle.setAttribute("cy", cy)
  circle.setAttribute("r", r)
  circle.setAttribute("fill", fill)
  circle.setAttribute("opacity", opacity)

  var canvas = document.getElementById("canvas")
  canvas.appendChild(circle)
  return circle
}

function makeRect(x, y, width, height, fill, opacity) {
  var rect = document.createElementNS(namespace, "rect")
  rect.setAttribute("x", x)
  rect.setAttribute("y", y)
  rect.setAttribute("width", width)
  rect.setAttribute("height", height)
  rect.setAttribute("fill", fill)
  rect.setAttribute("opacity", opacity)

  var canvas = document.getElementById("canvas")
  canvas.appendChild(rect)
  return rect
}

function makeEllipse(cx, cy, rx, ry, fill, opacity) {
  var ellipse = document.createElementNS(namespace, "ellipse")
  ellipse.setAttribute("cx", cx)
  ellipse.setAttribute("cy", cy)
  ellipse.setAttribute("rx", rx)
  ellipse.setAttribute("ry", ry)
  ellipse.setAttribute("fill", fill)
  ellipse.setAttribute("opacity", opacity)

  var canvas = document.getElementById("canvas")
  canvas.appendChild(ellipse)
  return ellipse
}

function makeLine(x1, y1, x2, y2, stroke, strokeWidth, opacity) {
  var line = document.createElementNS(namespace, "line")
  line.setAttribute("x1", x1)
  line.setAttribute("y1", y1)
  line.setAttribute("x2", x2)
  line.setAttribute("y2", y2)
  line.setAttribute("stroke", stroke)
  line.setAttribute("stroke-width", strokeWidth)
  line.setAttribute("opacity", opacity)

  var canvas = document.getElementById("canvas")
  canvas.appendChild(line)
  return line
}

function makePolyline(points, stroke, strokeWidth, opacity) {
  var polyline = document.createElementNS(namespace, "polyline")
  polyline.setAttribute("points", points)
  polyline.setAttribute("stroke", stroke)
  polyline.setAttribute("stroke-width", strokeWidth)
  polyline.setAttribute("opacity", opacity)
  polyline.setAttribute("fill", "none")

  var canvas = document.getElementById("canvas")
  canvas.appendChild(polyline)
  return polyline
}

function makePolygon(points, fill, opacity) {
  var polygon = document.createElementNS(namespace, "polygon")
  polygon.setAttribute("points", points)
  polygon.setAttribute("opacity", opacity)
  polygon.setAttribute("fill", fill)

  var canvas = document.getElementById("canvas")
  canvas.appendChild(polygon)
  return polygon
}

function makeText(message, x, y, fontSize, fontFamily, fill, opacity) {
  var text = document.createElementNS(namespace, "text")
  text.innerHTML = message
  text.setAttribute("x", x)
  text.setAttribute("y", y)
  text.setAttribute("font-size", fontSize)
  text.setAttribute("font-family", fontFamily)
  text.setAttribute("fill", fill)
  text.setAttribute("opacity", opacity)

  var canvas = document.getElementById("canvas")
  canvas.appendChild(text)
  return text
}

function makeImage(url, x, y, width, height, opacity) {
  var image = document.createElementNS(namespace, "image")
  image.setAttributeNS("http://www.w3.org/1999/xlink", "xlink:href", url)
  image.setAttribute("x", x)
  image.setAttribute("y", y)
  image.setAttribute("width", width)
  image.setAttribute("height", height)
  image.setAttribute("opacity", opacity)

  var canvas = document.getElementById("canvas")
  canvas.appendChild(image)
  return image
}

function collides(shape1, shape2) {
  var centerX, centerY
  if (shape1.hasAttribute("x")) {
    centerX = getX(shape1) + parseFloat(shape1.getAttribute("width"))/2
    centerY = getY(shape1) + parseFloat(shape1.getAttribute("height"))/2
  } else if (shape1.hasAttribute("cx")) {
    centerX = getX(shape1)
    centerY = getY(shape1)
  } else {
    throw "Oops, that kind of shape isn't supported by the collide function!"
  }

  var xMin, xMax, yMin, yMax
  if (shape2.hasAttribute("x")) {
    xMin = getX(shape2)
    yMin = getY(shape2)
    xMax = getX(shape2) + parseFloat(shape2.getAttribute("width"))
    yMax = getY(shape2) + parseFloat(shape2.getAttribute("height"))
  } else if (shape2.hasAttribute("cx")) {
    if (shape2.hasAttribute("rx")) {
      var rx = parseFloat(shape2.getAttribute("rx"))
      var ry = parseFloat(shape2.getAttribute("ry"))
      xMin = getX(shape2) - rx
      yMin = getY(shape2) - ry
      xMax = getX(shape2) + rx
      yMax = getY(shape2) + ry
    } else {
      var r = parseFloat(shape2.getAttribute("r"))
      xMin = getX(shape2) - r
      yMin = getY(shape2) - r
      xMax = getX(shape2) + r
      yMax = getY(shape2) + r
    }
  } else {
    throw "Oops, that kind of shape isn't supported by the collide function!"
  }
  return (centerX > xMin &&
          centerX < xMax &&
         centerY > yMin &&
         centerY < yMax)
}
