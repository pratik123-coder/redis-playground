import client from "./client.js";

async function init() {
    await client.hset("car:1", "name", "BMW");
    await client.hset("car:1", "price", 2000);
    await client.hset("car:1", "speed", "340 km/h");
    await client.hset("car:1", "model", "M4");
    await client.hset("car:1", "location", "Germany");
    await client.hset("car:1", "person", "Pratik");

    const name = await client.hget("car:1", "name");
    const res1 = await client.hgetall("car:1");
    const size = await client.hlen("car:1");
    console.log("Name of the Car:1 is: ", name);
    console.log(res1);
    console.log("Size of car:1 is: ", size);
}

init();