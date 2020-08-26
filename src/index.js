import './style.scss';

(() => {
  const settings = {
    typeInterval: 150,
    clearInterval: 1000,
  };

  let wordIndex = 0;

  const words = ['design', 'frontend', 'backend', 'testing'];
  const typeBlock = document.querySelector('.type');

  function typeWord(word) {
    let letterIndex = 0;
    const wordLength = word.length;
    const interval = setInterval(() => {
      if (letterIndex < wordLength) {
        typeBlock.textContent += word[letterIndex];
        letterIndex++;
      } else {
        clearWord(interval);
      }
    }, settings.typeInterval);
  }

  function clearWord(interval) {
    clearInterval(interval);

    setTimeout(() => {
      typeBlock.textContent = null;
      wordIndex < words.length - 1 ? wordIndex++ : (wordIndex = 0);
      typeWord(words[wordIndex]);
    }, settings.clearInterval);
  }

  typeWord(words[wordIndex]);
})();
