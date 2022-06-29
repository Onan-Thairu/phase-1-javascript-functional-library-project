function myEach(collection, callback) {
    const array = Object.values(collection)
    for (const elem of array) {
        callback(elem)
    }
    return collection
}

function myMap(collection, callback) {
    const array = Object.values(collection)
    const newArray = []
    for (const elem of array) {
        newArray.push(callback(elem))
    }
    return newArray
}
