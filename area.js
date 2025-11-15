width = prompt("Enter the width: ")
height = prompt("Enter the height: ")

function calculateArea(width,height){
  var area = width * height;
  return area;
}
document.write("The area of the rectangle is :" + calculateArea(width,height))
