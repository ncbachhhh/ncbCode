// Bai 1
function myFunction_1(arr) {
    for ( let i = 0; i < arr.length; i++ ) {
        let transNumber;
        for ( let j = i; j < arr.length; j++) {
            if (arr[i] > arr[j]) {
                transNumber = arr[i];
                arr[i] = arr[j];
                arr[j] = transNumber;
            }
        }
    }
    return arr;
}

const array = myFunction_1([12, 33, 45, 7, 89])
console.log('Bai 1');
console.log(array);

// Bai 2
function myFunction_2(arr,k) {
    let count_2 = 0;
    for ( let i = 0; i < arr.length; i++) {
        for ( let j = 0; j < arr.length; j++) {
            if (i != j) {
                if (arr[j] == arr[i]) {
                    for ( let k = j; k < arr.length;k++ ) {
                        arr[k] = arr[k+1];
                        
                    }
                    arr.pop();
                }
            }
        }
    }
    if ( k > arr.length) {
        return ('Error')
    }
    for ( let i = 0; i < arr.length; i++ ) {
        let transNumber;
        for ( let j = i; j < arr.length; j++) {
            if (arr[i] > arr[j]) {
                transNumber = arr[i];
                arr[i] = arr[j];
                arr[j] = transNumber;
            }
        }
    }
    return (arr[arr.length - k])
}

const answer_2 = myFunction_2([2,5,2,7,9,10], 3);
console.log('Bai 2');
console.log(answer_2);
// Bai 3
function myFunction_3(arr) {
    let count_3 = [], max_number = 0, max_count_3 = 0;
    for ( let i = 0; i < arr.length; i++) {
        count_3[i] = 0;
        for ( let j = i; j < arr.length; j++ ) {
            if (arr[i] == arr[j] ) {
                count_3[i]++;
            }
        }
    }
    max_count_3 = count_3[0];
    for ( let i = 0; i < arr.length; i++) {
        for ( let j = i; j < arr.length; j++ ) {
            if (max_count_3 < count_3[i]) {
                max_count_3 = count_3[i];
            }
        }
    }
    for ( let i = 0; i < arr.length; i++) {
        if (max_count_3 == count_3[i]) {
            max_number = arr[i]
        }
    }
    return max_number;
}   
console.log('Bai 3');
console.log(myFunction_3([1, 2, 3, 2, 1, 1, 4, 5, 10]));
// Bai 4 
function splitWords(string) {
    string += ' ';
    let arr = [], arr_2 = [], count_4 = 0, k = 0;
    for ( let i = 0; i < string.length; i++) {
        if (string[i] != " ") {
            count_4++;
        }
        else {
            arr[k] = count_4;
            count_4 = 0;
            k++;         
        }
    }
    
    let temp_1 = 0, temp_2 = arr[0];
    for ( let i = 0; i < k; i++) {
        arr_2[i] = '';
        for ( let j = temp_1; j <= temp_2 - 1; j++ ) {
            arr_2[i] += string[j]
        }

        temp_1 = temp_1 + arr[i] + 1;
        temp_2 = temp_2 + arr[i+1] + 1;     
    }
    return arr_2;
}


console.log('Bai 4');
console.log(splitWords("This is a test"))
// Bai 5
const data = { a: 1, b: 'hello', c: 3, d: 'world' };
let arr = Object.keys(data);
let checkType, sum_5 = 0;
for ( let i = 0; i < (arr.length); i++ ) {
    if ( typeof data[arr[i]] === 'number') {
        sum_5 += data[arr[i]];
    }
}
console.log(sum_5);


