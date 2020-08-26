import './style.scss';

(() => {
  const words = ['design', 'frontend', 'backend', 'testing'];
  const typeBlock = document.querySelector('.type');

  let wordIndex = 0;
  let letterIndex = 0;

  let timer;

  const startTyping = () => timer = setInterval(typeWord, 120);

  const typeWord = () => {
    const currentWord = words[wordIndex];
    const nextLetterIndex = letterIndex + 1;
    const wordChanged = nextLetterIndex > currentWord.length - 1;

    typeBlock.textContent = currentWord.slice(0, nextLetterIndex);
    letterIndex = wordChanged ? 0 : nextLetterIndex;

    if (wordChanged) {
      wordIndex = wordIndex === words.length - 1 ? 0 : wordIndex + 1;
      clearInterval(timer);
      setTimeout(startTyping, 800);
    };
  }

  startTyping();
})();
