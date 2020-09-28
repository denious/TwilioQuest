function calculatePower(powerSettings) {
    return powerSettings
        .map(o => o * 2)
        .reduce((prev, next) => prev += next, 0);
}

// The following lines of code are not required for the solution, but can be
// used by you to test your solution.
const laserPower = calculatePower([1, 3, 8]);
console.log('Required laser power is ' + laserPower); // should be 24