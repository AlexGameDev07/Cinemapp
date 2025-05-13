import app from "./app.js";
import { config } from "./src/config.js";

import "./database.js";

async function main() {
    const PORT = config.server.PORT;
    app.listen(PORT);
    console.log("El sevidor está encendido");
}

main();