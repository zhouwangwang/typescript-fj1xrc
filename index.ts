// スプレッド演算子(spread operator)
let categories = ['post', 'news', 'info'];

// 複製
let copyCat = [...categories];
// console.log(copyCat);

// 連結
let pushCat = ['other', ...copyCat];
// console.log(pushCat);

let unshiftCat = [...categories, 'other'];
// console.log(unshiftCat);

// 途中に挿入
let insertCat = ['other', ...categories, 'Q&A'];
// console.log(insertCat);

// 二つの配列をマージ
let mergeCat = [...categories, ...copyCat];
// console.log(mergeCat);

// オブジェクト
let post = { id: 1, content: 'dummy', created: '2020-04-01' };

let copyObj = { ...post };
// console.log(copyObj);

let pushObj = { ...post, updated: '2020-04-05' };
// console.log(pushObj);

let mergeObj = { ...post, ...pushObj };
// console.log(mergeObj);

// let test = [...pushObj]; // ダメ
let test = { ...categories };
console.log(test);
