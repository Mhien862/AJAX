let name = 'Hien'
let doIt =  ' I am';

let doIt2 = `${doIt} ${name}`

console.log(doIt2)

////

let infor = { Person1: 'Hien', Person2: 'Minh'};

let {Person1, Person2} = infor;

console.log(infor)

///
let [ first ]  = ['Hien ','Minh']
console.log(first)

///

let arr1 = [5, 7, 9];
let arr2 = [1, 2, 6];
let arr3 = [...arr1, ...arr2];

console.log(arr3)


