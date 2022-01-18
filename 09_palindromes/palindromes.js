const palindromes = function (text) {
    text = text.replaceAll(/\W/g, '');
    let newText = '';
    for (let i = text.length - 1; i >= 0; i--) {
        newText += text.charAt(i);
    }
    return newText.toLowerCase() === text.toLowerCase();
};

// Do not edit below this line
module.exports = palindromes;
