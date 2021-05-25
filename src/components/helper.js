export const _countScore = (wordObj)=>{
    let score = 0;
    const letterArr = wordObj.letters;
    letterArr.map(letterObj => {
      score = score + (letterObj.value * letterObj.multiplier);
      return score;
    })
    score = score*wordObj.multiplier;
    return score;
}