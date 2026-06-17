// 🤔DESCRITION
// Complete the solution so that it reverses the string passed into it.

// 'world'  =>  'dlrow'
// 'word'   =>  'drow'

// 😉TEST
    // assert.strictEqual(solution('world'), 'dlrow');
    // assert.strictEqual(solution('hello'), 'olleh');
    // assert.strictEqual(solution(''), '');
    // assert.strictEqual(solution('h'), 'h');


// 😎SOLUTIN
function solution(str){
  return str.split('').reverse().join('')
}

console.log(solution('world'))
console.log(solution('word'))


// 😎SOLUTIN for
function solution(str) {
  let result = ''
  for (let i = str.length - 1; i >= 0; i--) {
    result = result + str[i]
  }
  return result
}

console.log(solution('slovo'))