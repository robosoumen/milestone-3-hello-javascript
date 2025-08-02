const sentence = 'i am learning web development course.';

let reverse = ''
for(const latter of sentence){
    // console.log(latter);
    reverse = latter + reverse;
}
// console.log(reverse);

let rev = ''
for(let i = 0;i < sentence.length;i++){
    // console.log(i);
    // console.log(sentence[i])
    const latter = sentence[i];
    rev = latter + rev;
}
// console.log(rev);

//shortcut
const reversed = sentence.split('').reverse().join('');
console.log(reversed)
