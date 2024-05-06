import client from "./client.js";

async function init() {
    await client.sadd("set:1", 1);
    await client.sadd("set:1", 2);
    await client.sadd("set:1", 3);
    await client.sadd("set:2", 2);
    await client.sadd("set:2", 3);
    await client.sadd("set:2", 4);

    const res = await client.spop("set:1");
    const res1 = await client.sinter("set:1", "set:2");
    const size = await client.scard("set:1");
    
    console.log(res);
    console.log(res1);
    console.log("Size of set:1 is: ", size);
}

init();