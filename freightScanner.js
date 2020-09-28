function scan(arr) {
    let contrabandCount = 0;

    for (let i = 0; i < arr.length; i++) {
        const element = arr[i];

        if (element === "contraband")
            contrabandCount++;
    }

    return contrabandCount;
}