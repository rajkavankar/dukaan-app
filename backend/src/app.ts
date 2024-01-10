import express, { Application } from "express"

const app: Application = express()

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.get("/", (req, res) => {
  res.status(200).json({
    msg: "Welcome",
  })
})

export default app
