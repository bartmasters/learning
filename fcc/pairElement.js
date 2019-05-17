function pairElement(str) {
    let newArray = [];

    for (let i = 0; i < str.length; i++) {
        let subArray = [];

        subArray.push(str.charAt(i));
        switch (str.charAt(i)) {
            case 'C':
                subArray.push('G');
                break;
            case 'G':
                subArray.push('C');
                break;
            case 'A':
                subArray.push('T');
                break;
            default:
                subArray.push('A');
        }
        newArray.push(subArray);
    }
    return newArray;
}

pairElement('GCG');