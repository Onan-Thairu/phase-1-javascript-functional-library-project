// Collection Functions (Arrays or Objects)

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

function myFind(collection, predicate) {
    const array = Object.values(collection)

    for (const elem of array) {
        if (predicate(elem)) return elem
    }
}

function myFilter(collection, predicate) {
    const array = Object.values(collection)

    const newArray = []
    for (const elem of array) {
        if(predicate(elem)) {
            newArray.push(elem)
        }
    }
    return newArray
}

function mySize(collection) {
    const array = Object.values(collection)
    return array.length
}

// Array Functions

function myFirst(array, n) {
    if (n) {
        return array.slice(0, n)
    } else {
        return array[0]
    }
}

function myLast(array, n) {
    if (n) {
        return array.slice(-n)
    } else {
        return array[-1]
    }
}