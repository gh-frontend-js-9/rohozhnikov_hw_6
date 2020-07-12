let checkStrings = (firstWord, secondWord) => {
    let match = 0;
    for (let i = 0; i < firstWord.length; i++) {
        for (let j = 0; j < secondWord.length; j++) {
            (firstWord[i] === secondWord[j]) ? match++ : 'Нет совпадений'
        }
    }
    let percent = match / (firstWord.length + secondWord.length) * 200
    console.log(`
        Совпадений: ${match} 
        Процент совпадений: ${percent} 
    `);
}

checkStrings("l", "landrt");