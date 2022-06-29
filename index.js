function myEach(collection, callback) {
    const arr = Object.values(collection)
    for (const elem of arr) {
        callback(elem)
    }
    return collection
}