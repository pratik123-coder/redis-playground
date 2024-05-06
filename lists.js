import client from "./client.js";

async function init() {
    await client.lpush("list:1", 1);
    await client.lpush("list:1", 2);
    await client.lpush("list:1", 3);
    await client.lpush("list:2", "Block pop");


    const res = await client.rpop("list:1");
    const res1 = await client.blpop("list:2",10);
    console.log(res);   
    console.log(res1);
}

init();