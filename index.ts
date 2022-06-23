// インターフェイス
interface Animal {
  name: string;
  legs: number;
  isCry: boolean;
  cry(): void;
}

interface SuperAnimal extends Animal {
  canRun: boolean;
}

// class Dog implements SuperAnimal {
//   name: string = 'Maru';
//   legs: number = 4;
//   isCry: boolean = true;
//   cry(): void {
//     if (this.isCry) {
//       console.log('Bow, wow!');
//     }
//   }

//   get canRun(): boolean {
//     return false;
//   }
// }

// // let maru = new Dog();
// let maru: SuperAnimal = new Dog();
// maru.canRun = true; //　効がない、Dogクラスに、canRunのsetterが定義されてないので
// maru.cry();
// console.log(maru.canRun);

let dog: Animal = {
  name: 'Maru',
  legs: 4,
  isCry: true,
  cry: function () {
    console.log('Bow wow!');
  },
};
dog.cry();
