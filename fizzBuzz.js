const arg = Number.parseInt(process.argv[2]);

const by3 = (arg % 3) === 0;
const by5 = (arg % 5) === 0;

if (by3 && by5)
    console.log("JavaScript");
else if (by3)
    console.log("Java");
else if (by5)
    console.log("Script");
else
    console.log(arg);