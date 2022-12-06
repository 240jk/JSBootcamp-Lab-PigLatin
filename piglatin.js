module.exports = {lowercase, translatePigLatin}

function lowercase(string) {
    return string.toLowerCase();
};

function translatePigLatin(string) {
    function isVowelFirstLetter() {
      let vowels = ['a', 'e', 'i', 'o', 'u', 'y'];
      for (i = 0; i < vowels.length; i++) {
        if (vowels[i] === string[0]) {
          return true;
        }
      }
      return false;
    }

    if (isVowelFirstLetter()) {
      string += 'way';
    }
    else {
      let consonants = '';  
      while (isVowelFirstLetter() === false) {
        consonants += string.slice(0,1);
        string = string.slice(1);
      }  
      string += consonants + 'ay';
    }
  
    return string;
  }
