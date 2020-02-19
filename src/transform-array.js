module.exports = function transform(arr) {
    if (!Array.isArray(arr)) throw new Error;
    const resultArr = [];
    for (let i = 0; i < arr.length; i++) {
            if (arr[i] === '--discard-next') {
                i++;
            } else if (arr[i] === '--discard-prev') {
                    resultArr.pop();
            } else if (arr[i] === '--double-next') {
                if (i + 1 !== arr.length) {
                    resultArr.push(arr[i + 1]);
                }
            } else if (arr[i] === '--double-prev') {
                if (i - 1 >= 0) {
                    resultArr.push(arr[i - 1]);
                }
            } else {
                resultArr.push(arr[i]);
            }
        }
    return resultArr;
};
/*

    if (Array.isArray(arr)) {
        for(let i=0; i<arr.length; i++) {
            if (arr[i] === '--discard-next') arr.splice(arr.indexOf(arr[i]), 2);
            if (arr[i] === '--discard-prev') {
                if (arr[i]>0) {
                    arr.splice(arr.indexOf(arr[i - 1]), 2);
                } else {
                    arr.splice(arr.indexOf(arr[i]), 1);
                }
            }
            if (arr[i] === '--double-next') {
                if (i + 1 !== arr.length) {
                    arr.splice(arr.indexOf(arr[i]), 1, arr[i + 1]);
                }
            }
            if (arr[i] === '--double-prev') {
                if (i - 1 >=0) {
                    arr.splice(arr.indexOf(arr[i]), 1, arr[i - 1]);
                }
            }
            if (arr[i] === undefined) arr.splice(arr.indexOf(arr[i]), 1);
        }
    } else {
        throw Error;
    }
    return arr;
};

// Не все тесты проходит!!!

*/
