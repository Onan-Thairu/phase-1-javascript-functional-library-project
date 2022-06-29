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

function myReduce(collection, callback, acc) {
    const array = Object.values(collection)
    
    if (acc) {
        for (let i=0; i<array.length; i++) {
          acc = callback(acc, array[i], array)
        }
        return acc
    } else {
        let acc = array[0]
        for (let i=1; i<array.length; i++) {
          acc = callback(acc, array[i], array)
        }
        return acc
    }
}