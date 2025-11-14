num1 = prompt("Enter base:  ")
num2 = prompt("Enter perpendicular: ")
function calculateHypotenuse(base, perpendicular) {

    function calculateSquare(num) {
        return num * num;
    }

    let hypotenuse = Math.sqrt(
        calculateSquare(base) + calculateSquare(perpendicular)
    );

    return hypotenuse;
}

console.log(calculateHypotenuse(num1, num2))
