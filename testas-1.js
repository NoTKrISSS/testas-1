const data = [
    {
        name: 'Jonas',
        marks: [10, 2, 8, 4, 6]//6 vidurkis
    },
    {
        name: 'Maryte',
        marks: [3, 7, 9, 5]//6 vidurkis
    },
    {
        name: 'Petras',
        marks: [7, 7, 7]//7 vidurkis
    },
    {
        name: 'Ona',
        marks: [10, 9, 8, 7, 6]//8 vidurkis
    },
]

// Isspausdina mokinio varda ir pazymi, kuris turi prasciausia pazymi
let visuMaziausi = [];
let maziausias = 0;

for (let i = 0; i < data.length; i++){
        //console.log(Math.min(...data[i].marks));
        visuMaziausi[i] = (Math.min(...data[i].marks))
        //console.log(data[i].marks[j]);
    }
    maziausias = Math.min(...visuMaziausi)
for (let i = 0; i < data.length; i++){
    for(let j = 0; j < data[i].marks.length; j++)
    if(data[i].marks[j] === maziausias){
        console.log("Prasciausias: ", data[i].name, maziausias);
        console.log("-----------------");

    }
}
// Isspausdina mokinio varda ir pazymi, kuris turi geriausia pazymi
let visuDidziausi = [];
let didziausias = 0;

for (let i = 0; i < data.length; i++){
        //console.log(Math.max(...data[i].marks));
        visuDidziausi[i] = (Math.max(...data[i].marks))
        //console.log(data[i].marks[j]);
    }
    didziausias = Math.max(...visuDidziausi)
for (let i = 0; i < data.length; i++){
    for(let j = 0; j < data[i].marks.length; j++)
    if(data[i].marks[j] === didziausias){
        console.log("Geriausias: ", data[i].name, didziausias);
        console.log("-----------------");
    }
}

// Isspausdina mokinio varda ir pazymiu vidurki, kuris turi prasciausia pazymiu vidurki
let visuVidurkiai = []
let maziausiasVidurkis = 0;
let sum = 0;

for (let i = 0; i < data.length; i++){
    for(let j = 0; j < data[i].marks.length; j++){
    sum += (data[i].marks[j])
    }
    visuVidurkiai[i] = sum / data[i].marks.length
    sum = 0;
}
maziausiasVidurkis = Math.min(...visuVidurkiai)
for (let i = 0; i < data.length; i++){
    for(let j = 0; j < data[i].marks.length; j++)
    if(data[i].marks[j] === maziausiasVidurkis){
        console.log("Prasciausias vidurkis: ", data[i].name, maziausiasVidurkis);
        console.log("-----------------");
    }
}

// Isspausdina mokinio varda ir pazymiu vidurki, kuris turi geriausia pazymiu vidurki(neissprendziau sito kazkur isivele klaida :///)
let visuVidurkiai2 = []
let didziausiasVidurkis = 0;
let sum2 = 0;

for (let i = 0; i < data.length; i++){
    for(let j = 0; j < data[i].marks.length; j++){
    sum2 += (data[i].marks[j])
    }
    visuVidurkiai2[i] = sum2 / data[i].marks.length
    sum2 = 0;
}
didziausiasVidurkis = Math.max(...visuVidurkiai2)
for (let i = 0; i < data.length; i++){
    for(let j = 0; j < data[i].marks.length; j++)
    if(data[i].marks[j] === didziausiasVidurkis){
        console.log("Geriausias vidurkis: ", data[i].name, didziausiasVidurkis);
        console.log("-----------------");
    }
}

// Isspausdina mokinio varda, jei jis turi pazymi 8
for (let i = 0; i < data.length; i++){
    for(let j = 0; j < data[i].marks.length; j++)
    if(data[i].marks[j] === 8){
        console.log("Turi pazymi 8: ", data[i].name);
        console.log("-----------------");

    }
}

// Isspausdina mokinio varda, jei jis neturi pazymio 7
let x = 0;
for (let i = 0; i < data.length; i++){
    for(let j = 0; j < data[i].marks.length; j++)
    if(data[i].marks[j] === 7){
        x += 1;
}
if(x === 0)
console.log("Neturi pazymio 7", data[i].name);
}
