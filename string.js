import client from "./client.js";

async function init() {
    await client.expire("msg:4", 10);
    const res = await client.get("msg:4");
    console.log(res);
}

init();