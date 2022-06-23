// ジェネリック(Generics)
class Store<T> {
  data: T;
  getStore(): T {
    return this.data;
  }
}

let stringData = new Store<string>();
let booleanData = new Store<boolean>();

function hello<T>(keyword: T) {
  console.log(`Log: ${keyword}.`);
}
hello('Hello, Yohei!');
hello<string>('Hello, Yohei!');
hello<number>(123);

class Component<T, U> {
  name: T;
  created: U;
}

let component = new Component<string, number>();
component.created = '2020/04/01';
