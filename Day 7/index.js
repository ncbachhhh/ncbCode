let length = 1, width = 2;
let area = length * width;
let perimeter = (length + width)*2
console.log('Bai 1: ' + 'Area: ' + area + ' ' + 'Perimeter: '+ perimeter)
// -----------------------------------------------------------------
let S = 12345;
let gio=(S - S%3600)/3600;
let phut=((S %3600)-(S % 3600) % 60)/60;
let giay=S - phut*60-gio*3600;
console.log('Bai 2: ' + gio + 'h ' + phut + 'm ' + giay + 's')
// -----------------------------------------------------------------
let luyThua = 2;
let coSo = 5;
let result = Math.pow(coSo,luyThua);
console.log('Bai 3: ' + result);
// -----------------------------------------------------------------
let num1 = 1, num2 = 3, num3 = 4;
let average = (num1 + num2 + num3)/3;
console.log('Bai 4: ' + average);
// -----------------------------------------------------------------
let point1_x = 1, point1_y = 2;
let point2_x = 3, point2_y = 4;
let distance = Math.sqrt(Math.pow((point2_x-point1_x),2) + Math.pow((point2_y-point1_y),2));
console.log('Bai 5: ' + distance);
// -----------------------------------------------------------------
let x1 = prompt('x1: '), x2 = prompt('x2: '), x3 = prompt('x3: ');

if ( x1 > x2 && x1 > x3 ) {
    console.log('Bai 6: ' + true);
}
else {
    console.log('Bai 6: ' + false);
}
// -----------------------------------------------------------------
let string_1 = prompt('string 1: '), string_2 = prompt('string_2: ');
if ( string_1 == string_2 ) {
    console.log('Bai 7: ' + true);
}
else {
    console.log('Bai 7: ' + false);
}
// -----------------------------------------------------------------
let num_ex_8 = prompt('Input: ');
if ( num_ex_8 >= 0 ) {
    console.log('Bai 8: ' + true);
}
else {
    console.log('Bai 8: ' + false);
}
// -----------------------------------------------------------------
let year = prompt('Year: ');
if ( year % 400 == 0 || (year % 4 == 0 && year % 100 != 0) ) {
    console.log('Bai 9: ' + true);
}
else {
    console.log('Bai 9: ' + false);
}
// -----------------------------------------------------------------
let h1 = prompt('h1'), m1 = prompt('m1'), h2 = prompt('h2'), m2 = prompt('m2');
if ( h1 > h2 ) {
    console.log('Bai 10: ' + 'Thoi gian ' + h1 +'h:' + m1 + 'm lon hon ' + h2 +'h:' + m2 + 'm');
}
else if ( h2 > h1 ) {
    console.log('Bai 10: ' + 'Thoi gian ' + h2 +'h:' + m2 + 'm lon hon ' + h1 +'h:' + m1 + 'm');
}
else if ( h1 == h2 && m1 > m2 ) {
    console.log('Bai 10: ' + 'Thoi gian ' + h1 +'h:' + m1 + 'm lon hon ' + h2 +'h:' + m2 + 'm');
}
else {
    console.log('Bai 10: ' + 'Thoi gian ' + h2 +'h:' + m2 + 'm lon hon ' + h1 +'h:' + m1 + 'm');
}
