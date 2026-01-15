// Calculate the area and perimeter of a rectangle
// Description: Given length and width, calculate and display both area and perimeter.

// Perimeter -> the outside edge of any area(the total distance around the outside.)
// Area -> Area represents the total space inside the boundary

// Length l: The longer side of the rectangle.
// Width w: The shorter side of the rectangle.

// Area of a rectangle -> length * width/ طول x عرض
// Perimeter of a rectangle -> 2 * (length + width)

function getAreaAndPerimeter(length, width) {
  let area = length * width;
  let perimeter = 2 * (length + width);
  const keyName = "Rectangle Perimeter"; /* Computed Property Name. */
  return {
    "Rectangle Area": `${area}cm2` /* Later use Bracket Notation to access keys with spaces, results["Rectangle Area"] */,
    [keyName]: `${perimeter}cm` /* Template Literals */,
  };
}
console.log(getAreaAndPerimeter(35, 10));
