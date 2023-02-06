import express from "express";
import cors from "cors";
import path from "path";
import dummy from "./data/Dummy.js";

const port = process.env.PORT || 4000;
const server = express();

server.use(express.json());
server.use(cors());

server.get('/', (request, response) => {
  response.format({
    "text/html": () => response.status(200).send(`
        <style>* {font-size: medium; font-family: Helvetica,sans-serif; line-height: 1.6;}</style>
        <b>usage</b>:
        <ul>
            <li>
              <a href="/healthcheck">
                ${request.protocol}://${request.headers.host}/healthcheck
              </a>
            </li>
            <li>
              <a href="/logo">
                ${request.protocol}://${request.headers.host}/logo
              </a>
            </li>
        </ul>
        <img src='/logo' width="200"/>`)
  });

});

server.get('/healthcheck', (request, response) => {
  
  const body = {
    message: "Hello!",
    dummy: dummy()
  };
  
  response.status(200).send(body);

});

server.get('/logo', (request, response) => {
  const filePath = path.join(__dirname, "logo.jpg");
  response.setHeader('Content-Disposition', 'attachment;filename=' + encodeURI(path.basename(filePath)));
  response.sendFile(filePath);
});

server.listen(port, function() {
  console.log(`server is running on port ${this.address().port}!`);
});

