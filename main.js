let newArray = [];

let numbers = [2, 4, 9, 10, 45, 67, 8, 90];
for(i = 0; i < numbers.length; i++){
    if(numbers[i] % 2 == 0){
        newArray.push(numbers[i]);
    }
}

console.log(`
${numbers} : Начальные числа

${newArray}: Четные числа
`);