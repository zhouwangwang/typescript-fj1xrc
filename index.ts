// 分割代入
let categories = ['post', 'news', 'info', 'other'];
// let [a, b] = categories;
// console.log(a, b);

// let [a, b, , d] = categories;
// console.log(a, b, d);

// let [a, b, ...rest] = categories;
// console.log(a, b, rest);

// let [a = 10, b = 7] = [1];
// console.log(a, b);

let post = { id: 1, content: 'dummy', created: '2020-04-01' };
// const { id } = post;
// console.log(id);

// const { id, content: body } = post;
// console.log(id, body);

function test({ a, b, c }) {}
