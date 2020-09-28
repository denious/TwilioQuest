class Ducktypium {
    constructor(color) {
        this.validColors = [
            "red",
            "blue",
            "yellow"
        ];

        this.validateColor(color);

        this.color = color;
        this.calibrationSequence = [];
    }

    validateColor(color) {
        if (this.validColors.indexOf(color) === -1)
            throw "Wrong color";
    }

    refract(color2) {
        this.validateColor(color2);

        if (color2 === this.color)
            return color2;

        const colorMap = [
            ["red", "blue", "purple"],
            ["red", "yellow", "orange"],
            ["yellow", "blue", "green"]
        ];

        return colorMap.find(o => o.indexOf(this.color) !== -1 && o.indexOf(color2) !== -1)[2];
    }

    calibrate(numbers) {
        this.calibrationSequence = numbers
            .sort()
            .map(o => o * 3);
    }
}