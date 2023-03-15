let col = ["red", "blue", "green"];

  // @ts-ignore
  function shuffle(array) {
    // 使用 Fisher-Yates shuffle 算法
    let currentIndex = array.length;
    let temporaryValue, randomIndex;

    // While there remain elements to shuffle...
    while (currentIndex !== 0) {

      // Pick a remaining element...
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;

      // And swap it with the current element.
      temporaryValue = array[currentIndex];
      array[currentIndex] = array[randomIndex];
      array[randomIndex] = temporaryValue;
    }

    return array;
  }

  export function shuffleCol() {
    col = shuffle(col);
  }
