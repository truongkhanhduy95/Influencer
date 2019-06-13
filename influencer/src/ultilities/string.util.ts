export class StringHelper {
  static mostUsedWords(paragraph: string, nWord: number): string[] {
    // Preprocessing
    let cleanString = paragraph.replace(/[\.,-\/#!$%\^&\*;:{}=\-_`~()]/g,"")
    
    let words = cleanString.split(' ');
    let frequencies:any = {};
    let word: string;

    for(let i = 0; i < words.length; i++ ) {
      word = words[i];
      frequencies[word] = frequencies[word] || 0;
      frequencies[word]++;
    }

    words = Object.keys( frequencies );
    return words.sort((a,b) => { return frequencies[b] -frequencies[a];}).slice(0,nWord);
  }
}