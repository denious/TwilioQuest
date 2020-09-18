console.log(addFirstToLast(["1", "2", "3"]));

function addFirstToLast(params) {
    return params.length > 0 ? params[0] + params[params.length - 1] : "";
}