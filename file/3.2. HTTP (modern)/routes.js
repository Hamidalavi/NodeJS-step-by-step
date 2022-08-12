const fs = require("fs");

const requestHandler = (request, response) => {
  const url = request.url;
  const method = request.method;

  if (url === "/") {
    response.write(`
      <html>
  <head>
      <title>Form</title>
  </head>

  <body>
      <form method="POST" action="/message">
          <input type="text" name="message">
          <button type="submit">Send</button>
      </form>
  </body>

  </html>
      `);
    return response.end();
  }

  if (url === "/message" && method === "POST") {
    const body = [];
    request.on("data", chunk => {
      console.log(chunk);
      body.push(chunk);
    });
    return request.on("end", () => {
      const parsedBody = Buffer.concat(body).toString();
      const message = parsedBody.split("=")[1];
      fs.writeFile("message.txt", message, err => {
        console.log(err);
        response.statusCode = 302;
        response.setHeader("Location", "/");
        return response.end();
      });
    });
  }
  response.setHeader("Content-Type", "text/html");
  response.write(`
    <html lang="en">

  <head>
      <title>Document</title>
  </head>

  <body>
      <h1>Hello world!</h1>
  </body>

  </html>
    `);
  response.end();
};

// exports.handler = requestHandler;

// module.exports = {
//   handler: requestHandler,
//   someText: "Some hard coded text!"
// };

exports.handler = requestHandler;
exports.someText = "Some hard coded text";
