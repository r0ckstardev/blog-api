import express from "express";
import { categoryRouter } from "./routes/category.js";
import { postRouter } from "./routes/post.js";
import { tagRouter } from "./routes/tag.js";
import { userRouter } from "./routes/user.js";
import { authRouter } from "./routes/auth.js";
const app = express();
const PORT = process.env.PORT || 8080;

app.use(express.json());

app.get("/api", (req, res, next) => {
    res.status(200).send({ code: 200, message: "Api is up and running.", reaction: "💫" })
})

app.use("/api/v1/user", userRouter)
app.use("/api/v1/post", postRouter)
app.use("/api/v1/category", categoryRouter)
app.use("/api/v1/tag", tagRouter)
app.use("/api/v1/auth", authRouter)

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`)
});