function resolveAfter3Seconds() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve([1, 2, 3, 4]);
        }, 3000);
    });
}

function filterOddNumbers(numbers) {
    return new Promise((resolve) => {
        setTimeout(() => {
            const evenNumbers = numbers.filter(number => number % 2 === 0);
            document.getElementById('output').innerText = evenNumbers;
            resolve(evenNumbers);
        }, 1000);
    });
}

function multiplyEvenNumbers(numbers) {
    return new Promise((resolve) => {
        setTimeout(() => {
            const multipliedNumbers = numbers.map(number => number * 2);
            document.getElementById('output').innerText = multipliedNumbers;
            resolve(multipliedNumbers);
        }, 2000);
    });
}

// Usage example:
resolveAfter3Seconds()
    .then(filterOddNumbers)
    .then(multiplyEvenNumbers)
    // .then((finalResult) => {
    //     console.log('Final result:', finalResult);
    // });
