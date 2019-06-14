# Influencer
DE - Influencer Management

# ERD
<img src="https://github.com/truongkhanhduy95/Influencer/blob/master/img/erd.PNG"/>

# Models
[Model defination](https://github.com/truongkhanhduy95/Influencer/tree/master/influencer/src/models)

# MostUsedWords helper
[Code](https://github.com/truongkhanhduy95/Influencer/blob/master/influencer/src/ultilities/string.util.ts)
``` typescript
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
    return words.sort((a,b) => { 
      if (frequencies[b] == frequencies[a]) return a > b ? -1 : 1;
      return frequencies[b] - frequencies[a];
    }).slice(0,nWord);
  }
}
```

# Find largest prime number in sequence
[Code](https://github.com/truongkhanhduy95/Influencer/blob/master/largestPrimeSequence.py)
``` python
def findLargestPrimeNumber(sequence):
  p = lambda n:[n%i for i in range(2,n) if n%i == 0]
  return max(int(N[j:i])for i in range(len(N)+1)for j in range(i)if not p(int(N[j:i])))

print(findLargestPrimeNumber('117')) # expect 17
print(findLargestPrimeNumber('1234')) # expect 23
print(findLargestPrimeNumber('3571')) # expect 3571
```
# Consider
 - Should i encrypt sensitive data (identification_no, bank_no,...)?
 - Current search function use Wildcard search, how about approximate/fuzzy search (Levenshtein,LCS,..)?
 - NoSQL for topics?
