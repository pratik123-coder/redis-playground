import client from "./client.js";

async function init() {
    const res = await client.get("msg:4");
    console.log(res);
}

init();