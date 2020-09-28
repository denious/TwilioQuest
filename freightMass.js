function calculateMass(freightItems) {
    return freightItems.reduce((prev, next) => prev + next.length, 0);
}