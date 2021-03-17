
let noteValues = [
    {name: "Redonda", value: 192},
    {name: "Blanca", value: 96},
    {name: "Negra", value: 48},
    {name: "Corchea", value: 24},
    {name: "Semicorchea", value: 12},
    {name: "Fusa", value: 6},
    {name: "Semifusa", value: 3}
];

let silentNotes = [];
let dottedNotes = [];
let tripletNotes = [];

function fillNoteValues(){
    for (let i=0; i<noteValues.length; i++){
        silentNotes[i] = {name: noteValues[i].name + ".S", value: noteValues[i].value}
    }
    for (let i=0; i<noteValues.length; i++){
        let value = noteValues[i].value + (noteValues[i].value / 2);
        dottedNotes[i] = {name: noteValues[i].name + ".*", value: value}
    }
    for (let i=0; i<noteValues.length; i++){
        let value = (noteValues[i].value * 2) / 3;
        tripletNotes[i] = {name: noteValues[i].name + ".3", value: value}
    }
}

/*
fillNoteValues();

console.log(noteValues)
console.log("---------------")
console.log(silentNotes)
console.log("---------------")
console.log(dottedNotes)
console.log("---------------")
console.log(tripletNotes)
console.log("---------------")
*/



let wantedValue = 192;
let allValues = [3, 6, 12, 24, 48, 96, 192];
//let allValues = [24, 48, 96, 192];
//let allValues = [1,2, 3, 4];



const randomSum = require('./randomSum');
//console.log(randomSum.randomSum(allValues, wantedValue))



let array =         [3, 6, 12, 24, 48, 96, 192];
let probabilities = [3, 5, 7,  20, 30, 25, 10]

console.log(randomSum.randomSum(wantedValue, array, probabilities))
