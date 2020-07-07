const express = require("express")
const helmet = require("helmet")
const projectRouter = require("./data/routers/project")
const resourceRouter = require("./data/routers/resources")
const taskRouter = require("./data/routers/task")

const server = express()
const PORT = process.env.PORT || 4000;

server.use(helmet());
server.use(express.json());

server.use(projectRouter);
server.use(resourceRouter);
server.use(taskRouter);

server.get("/", (req, res) => {
    res.send("Sprint DB API for Lambda School");
});

server.use((err, req, res, next) => {
    console.log(err);
    res.status(500).json({
        message: "Something went wrong"
    });
});

server.listen(PORT, () => {
    console.log(`listening on port ${PORT}`);
});
