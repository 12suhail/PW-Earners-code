let student = {
    name: "varad",
    rollNo: 34,
    subjects: ["math", "english", "hindi"],
    totalMarks: 600
}

// how to rename key
const { subjects: vishay, totalMarks = 500, ...variable } = student
// subjects -> vishay
// let vishay = subjects
// console.log(vishay);
// console.log(totalMarks);


// object merging using spread operator
let obj1 = {
    name: "yash",
    phone: 7825763245
}

let obj2 = {
    address: "india",
    adharCard: 5223452345543,
    name: "nishant",
}


let obj3 = { ...obj1, ...obj2 }

// console.log(obj3);


// array and object update

let arr = [1, 2, 3, 4]

arr[1] = "updated"

// console.log(arr);

const obj = {
    name: "kasturi",
    rollNo: 23,
    address : "Home",
    street : "90th feet",
};

// const obj = {
//     address: {
//         city: "Mumbai",
//         street: "90th feet"
//     }
// };

obj["name"] = "vanshika"
obj.name = "sumit"


// delete obj.rollNo  // property deleted - > this is for object

// console.log(obj);

// optional chaning (obj.address?.street)
// console.log(obj.address?.street);

let arr1 = [10, 2, 4, 5, 3]

// arr1.splice(1, 3) // delete splice(index, deleteCount)
// arr1.splice(3, 0 , ["add"])  // add splice(index, 0, element)
// arr1.splice(3, 2 , ["replace"])  //replace splice(index, deleteCount, element)
// arr1.splice(1,3,2)
// console.log(arr1);


// let trimArr = arr1.slice(1 , 3) // idx 1 to 3-1

// console.log(trimArr);


// console.log(arr1.indexOf(4));
// console.log(arr1.indexOf(4331));


let res = arr1.find((value) => {

    if (value === 3) {
        return value
    } 
})

// let res1 = arr1.find((value) => (value === 3) ? true : false);
// let res1 = arr1.find((value) => (value === 3));

// console.log(res);
// console.log(res1);

let resIndex = arr1.findIndex((value) => {
    return value === 3;
})
// console.log(resIndex);

//flat

let arr3 = [1, 2, 3, 4, 5, [6, 7, 8, [9, 10, 11]]]

// console.log(arr3.flat(Infinity));
// flat() remove 1 level bracket
// flat(2) remove 2 level bracket
// flat(3) remove 3 level bracket
// flat(Infinity) remove all level bracket


// mutability

let arr4 = [4, 5, 6, 62, 213, 13]

let arrCopy = arr4;
let arrCopy2 = [...arr4]; // spread operator

arrCopy.pop() // arrCopy and arr4 are same array point to one single array in memory
// updating or changing one affect the other 
arrCopy2.pop() // but using spread to create copy is create another array in memory and point to it 
// change cannot affect another array

console.log("arr4",arr4);
console.log("arrCopy",arrCopy);
console.log("arrCopy",arrCopy2);


