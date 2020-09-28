function mutate(freightItems) {
    return freightItems.map(o => o.toUpperCase());
}

// The following lines of code are not required for the solution, but can be
// used by you to test your solution.
const mutated = mutate(['dog', 'ray gun', 'cat']);
console.log('Mutated Items');
console.log(mutated); // should be ['DOG', 'CAT', 'ZIPPERS']