const PORT = 8000;
const app = require("./app");
const listener = () => console.log("listening");
app.listen(PORT, listener);
