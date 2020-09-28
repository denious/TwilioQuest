const lifeStatus = Number.parseInt(process.argv[2]);
const dryness = Number.parseInt(process.argv[3]);

if (lifeStatus === 0 && dryness > 10)
    console.log("WATER");