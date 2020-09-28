function scanAndFilter(freightItems, forbiddenString) {
    const filteredItems = freightItems.filter(o => o !== forbiddenString);
    return filteredItems;
}