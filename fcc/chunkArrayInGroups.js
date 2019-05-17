function chunkArrayInGroups(arr, size) {
    // Break it up.

    const outputArr = [];
    let start = 0;
    let end = 0;
    // console.log(arr);
    while (start < arr.length) {
        end += size;
        outputArr.push(arr.slice(start, end));
        start += size;
    }

    return outputArr;
}

chunkArrayInGroups(['a', 'b', 'c', 'd'], 2);