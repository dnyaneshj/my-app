/*function sum(n1,n2,n3){
    console.log(n1+n2+n3);
}
function sum(n1,n2){
    console.log(n1+n2);
}
function sum(n1){
    console.log(n1);
}
sum(1,2,3);
sum(1,2);
sum(1);*/

//Every function return true if all the element in array meet your condition only.

let everyArray = [1,2,3,4];
 let result = everyArray.every(function(item,index){
    return item > 5;
})
//console.log(result);

//array some return true if and only one of the condition is true other wise it return false
let someArray = [1,2,3,4,5,6,7];

let results = someArray.some(function(items,index){
  return items < 1;
})
//console.log('somearray', results);

let forEachArray = ['aman', 'shanti','omkr','anna'];

    forEachArray.forEach(function(value,index){
        // console.log(value);
        if(value.includes('omkr')){
        //  console.log(value);
        }
    })

//concat will combine two array and retun new array
let ar1= [1,2];
let e= ar1.concat(10,20);
//console.log(e);

// var array=[10,20,30];
// array.forEach(function(value,index){
// console.log(value,index);
// })


var str  = 'sachin';
var res = str.split('').reverse().join('');
//console.log(res);

//forEach

/*var array1 = [10,20,40,30];
array1.forEach((function(value,index){
    console.log(value,index);
}));*/

// var array=[10,20,30];
// let resf = array.every(function(value,index){
// return value > 5
// })
// console.log(resf);
// let resl =  array.every(function(value,index){
// return value > 15
// })
// console.log(resl);

let p = [9,4,5];
output = p.map((item,index) => {
    return item = item * 2;
});
//console.log(output);

let f = [9,4,5,5,9,1];
function rd(arr) {
    return arr.filter((item,index) => arr.indexOf(item) === index);
}
//console.log(rd(f));

let r = [9,4,5,5,9,1];
//console.log(r.reverse());


let eve = [500,400,200,100];

let evresult = eve.every(function(value,index){
     return value < 50
});
//console.log(evresult);

let sarray = [0,1,2,3,4,5,6,7,11];

let sresult = sarray.some(function(val,index){
    return val > 10;
})
//console.log(sresult);

let marks = [45,55,65,75,85];

let rmarks = marks.map(function(val,index){
      return val = val+ 5;
});
//console.log(rmarks);

let rarray = [1,2,3,4];

let rreduce = rarray.reduce(function(initial, current){
      return initial = initial + current
})
//console.log(rreduce);
 
let slicearray = [10,20,30,40,50];
let sliceResult = slicearray.slice(1,slicearray.length-1);
//console.log(sliceResult);

let spliceArray = [10,20,30,40,50,60];
let spliceArrayResult = spliceArray.splice(3,0,'renuka');
//console.log(spliceArray);

let sortArray = [20,30,40,50,60,10];
let sortResult = sortArray.sort(function(a,b){
    return a - b;
})
//console.log(sortResult);


let nsplice  = [2,5,6,78,9];
let nspliceres = nsplice.splice(2,2,12,87);
//console.log(nsplice);
//console.log(nspliceres);

let list  = [2,5,6,78,9];

// for(let i=0;i<list.length;i++){
//      console.log(list[i]);
// }

let resultf= list.forEach(function(a){
  // console.log(a)
})
//console.log(resultf);

let lists  = [2,5,6,78,9];
let n = lists.find(function(val){
    return val == 7;
});
//console.log('b', n)

const det = [1,2,3];
const [first,second,third] = det;
//console.log(first);
//console.log(second);
//console.log(third);



const d = 'i love my india';

function duplicate(arr){
 return arr.filter((item,index) => arr.indexOf(item) === index);
 
}
let yy = duplicate(d.split(''));

console.log(yy.join(''));
console.log(d);





