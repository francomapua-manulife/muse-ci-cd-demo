const express = require("express")
const app = express()

app.get("/", (req, res) => {
    res.json({ message: "Welcome to my Express app!" })
})

app.get("/math/add/:addendA/:addedndB", (req, res) => {
    const { addendA, addedndB } = req.params
    const sum = Number(addendA) + Number(addedndB)
    res.json({ addendA, addedndB, sum })
})

app.get("/math/subtract/:minuend/:subtrahend", (req, res) => {
    const { minuend, subtrahend } = req.params
    const difference = Number(minuend) - Number(subtrahend)
    res.json({ minuend, subtrahend, difference })
})

app.get("/math/multiply/:multiplicand/:multiplier", (req, res) => {
    const { multiplicand, multiplier } = req.params
    const product = Number(multiplicand) * Number(multiplier)
    res.json({ multiplicand, multiplier, product })
})

app.get("/math/divide/:dividend/:divisor", (req, res) => {
    const { dividend, divisor } = req.params
    const quotient = Number(dividend) / Number(divisor)
    res.json({ dividend, divisor, quotient })
})

app.listen(3000, () => {
    console.log("Server is running on port 3000")
})