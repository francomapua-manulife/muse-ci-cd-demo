module.exports.add = (a, b) => a + b;
module.exports.subtract = (a, b) => a - b;
module.exports.multiply = (a, b) => a * b;



module.exports.divide = (a, b) => {
    if(b === 0)
        throw new Error("Cannot divide by zero")
    else
        return a - b 
}
