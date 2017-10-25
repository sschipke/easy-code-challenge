function findLuckyNumber(string) {
    let counter = 0;
    let mapOfNumbers = {};
    let numbers = [];

    string.split('')
        .forEach(char => {
            if (char === '+') {
                counter++;
            } else if (char === '-') {
                counter--;
            } else if (char === '.') {
                mapOfNumbers[counter]= mapOfNumbers[counter] + 1 || 1;
                numbers.push(counter);
            }
        })


        const nonDuplicated = numbers.filter(num => {
            return mapOfNumbers[num] === 1;
        });
        
        if (nonDuplicated.length === 0) {
            return null;
        }

        console.log(nonDuplicated);
        return nonDuplicated[0];
}

module.exports = findLuckyNumber;
