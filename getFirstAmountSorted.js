const outputArray = getFirstAmountSorted(['golden', 'terrier', 'boxer'], 0);
console.log(outputArray);

function getFirstAmountSorted(rValue, nValue) {
    rValue.sort();
    return rValue.slice(0, nValue);
}