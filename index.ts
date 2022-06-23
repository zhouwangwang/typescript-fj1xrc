// 関数

// void省略可
// function greet(name: string): void {
//   console.log(`Hello world! ${name}`);
// }

// 引数省略可
// function greet(name?: string) {
//   console.log(`Hello world! ${name}`);
// }

// 初期値設定
function greet(name: string = 'Yohei') {
  console.log(`Hello world! ${name}`);
}

// greet();

// 可変長引数
function sum(...values: number[]): number {
  return values.reduce(function (prev, current) {
    return prev + current;
  });
}
// console.log(sum(1, 3, 5, 9));

// アロー関数
let add = (x1: number, x2: number): number => {
  return x1 + x2;
};
// console.log(add(1, 2));

let hello = (name) => `Hello, ${name}`;
// console.log(hello('Yohei'));

document.getElementById('button1').addEventListener('click', function () {
  console.log(this); // <button></button>
});

document.getElementById('button1').addEventListener('click', () => {
  console.log(this); // Window
});
