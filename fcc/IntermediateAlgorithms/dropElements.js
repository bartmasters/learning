function dropElements(arr, func) {
    // Drop them elements.

    let i = 0;
    while (i < arr.length) {
        if (!func(arr[i])) {
            arr.shift();
        } else {
            i = arr.length;
        }
    }

    return arr;
}

dropElements([1, 2, 3, 4], function (n) {return n >= 3;});