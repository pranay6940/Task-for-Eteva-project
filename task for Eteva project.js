let List1 = ['RolceRoyce', 'Kia', 'Maruthi', 'Ferrari', 'Tesla', 'Toyota'];
let List2 = ['Kia', 'Honda', 'Ferrari', 'Toyota', 'Bugati', 'Ford'];

let InList1 = [];
let Inlist2 = [];
let sameCars = [];

//unique Cars from List1 which are not in the List2 without using Array methods
for (let i = 0; i < List1.length; i=i+1) {
    let findOut = false;
    for (let j = 0; j < List2.length; j=j+1) {
        if (List1[i] === List2[j]) {
            findOut = true;
            break;
        }
    }
    if (!findOut) 
    InList1.push(List1[i]);
}
console.log(InList1);
//unique Cars from List2 which are not in the List1 without using Array Methods
for (let i = 0; i < List2.length; i=i+1) {
    let findOut = false;
    for (let j = 0; j < List1.length; j = j+ 1) {
        if (List2[i] === List1[j]) {
            findOut = true;
            break;
        }
    }
    if (!findOut)
    Inlist2.push(List2[i]);
}

console.log(Inlist2);

//sameCars from List1 and List2 without using Array Methods
for (let i = 0; i < List1.length; i= i+1) {
    for (let j = 0; j < List2.length; j = j+1) {
        if (List1[i] === List2[j]) {
            sameCars.push(List1[i]);
            break;
        }
    }
}
console.log(sameCars);