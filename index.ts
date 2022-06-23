// クラス
class Animal {
  age: number = 10;
  private _legs = 4;

  constructor(public isCry: boolean) {
    this.age = 2;
  }

  cry(): void {
    if (this.isCry) {
      alert(`age: ${this.age}`);
    }
  }

  // アクセサメソッド(getter, setter)
  get legs() {
    return this._legs;
  }

  set legs(value: number) {
    this._legs = value;
  }
}

// let dog = new Animal(true);
// dog.cry();
// dog.legs = 12;
// console.log(dog.legs);

// publicは、どこからでもアクセスできる。未指定の場合はpublic
// protectedは、自身のクラスとその派生クラスの中でアクセスできる
// privateは、そのクラスの中でのもアクセス可能

class Dog extends Animal {
  constructor(public isCry: boolean) {
    super(isCry);
    this.age = 12;
  }

  cry(): void {
    // if (this.isCry) {
    //   alert('Bow, wow'!);
    // }
    console.log('dog is crying!');
    super.cry();
  }
}

let dog = new Dog(true);
dog.cry();
