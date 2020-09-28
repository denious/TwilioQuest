function scan(arr) {
    let contrabandIndexes = [];

    for (let i = 0; i < arr.length; i++) {
        const element = arr[i];

        if (element === "contraband")
            contrabandIndexes.push(i);
    }

    return contrabandIndexes;
}