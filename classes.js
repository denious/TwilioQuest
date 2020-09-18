class Materializer {
    constructor(target) {
        this.target = target;
        this.activated = false;

    }

    activate() {
        this.activated = true;
    }

    materialize() {
        return this.activated ? this.target : undefined;
    }
}

var target = process.argv[2];
let materializer = new Materializer(target);
console.log(materializer.materialize());

materializer.activate();
console.log(materializer.materialize());