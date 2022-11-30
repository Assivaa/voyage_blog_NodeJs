// let person = {
//        name:  'Joseph',
//        age: 32,
//        'my age': 28,
//        sayHi: function() {
//               return 'Hello, I am person'
//        }
// }

const { ThemeConsumer } = require("styled-components");

// console.log(person.sayHi());

//object literall
// let calculator = {
//        add: function(num1, num2) {
//               return num1 + num2;
//        },
//        sub: function(num1, num2) {
//               return num1 - num2;
//        },
//        mul: function(num1, num2) {
//               return num1 * num2;
//        },
//        div: function(num1, num2) {
//               return num1 / num2;
//        }
// };

// console.log(calculator.add(4,5)); //9
// console.log(calculator.sub(10, 2)); //8
// console.log(calculator.mul(7, 12)); //84
// console.log(calculator.div(100, 25)); //4 

//object destructuring
// const school = {
//        name: 'Great Hight School',
//        studenCount: 559,
//        foundingYear: 1978,
// };

// let {
//        name,
//        studenCount,
//        foundingYear,
// } = school;

// console.log(name);
// console.log(studenCount);
// console.log(foundingYear);

//array destructuring
// let names = ["James", "sara", "victor"];
// let [p1, p2, p3] = names;
// console.log(p1);
// console.log(p2);
// console.log(p3);


// let myAge = 35;
// let hisAge = 87;

// let temp;

// temp = myAge;
// myAge = hisAge;
// hisAge = temp;

// console.log('myAge', myAge);
// console.log('hisAge', hisAge);

//make it easier
// let myAge = 35;
// let hisAge = 87;
// [myAge, hisAge] = [hisAge, myAge];

// console.log('myAge', myAge);
// console.log('hisAge', hisAge);

// let names= ['Jo', 'sara', 'kim', 567];

// for(let name of names) {
//        try{
//        console.log(name.toUpperCase());
//        } catch(err) {
//               console.log(err.message);
//        }
// }

// console.log('I AM FINISHED****');

//example simple backend
// function withdrawMoney(account, amount) {
//        if(account.balance < amount) {
//               throw new Error("Not enough balance");
//        }
//        account.balance -= amount;
//        return amount;
// }
// let myAccount = {
//        name: 'Joseph',
//        balance: 1000,
// };
// console.log(withdrawMoney(myAccount, 1010));
// console.log(myAccount);

// function updateAccount(account){
//        try{
//               //make network request
//               account.name = account.name.toUpperCase();
//        } catch(err){
//               console.log(err.message);
//        } finally {
//               //email the admin
//               console.log('SEND EMAIL TO ADMIN');
//        }
// }

// let myAccount = {
//        // name: 'Joseph'
//        name: 10234
// }
// //send emai to admin
// updateAccount(myAccount);
// //deelete
// console.log(myAccount);


// class BreadMold {

// }
// let myBread = new BreadMold();

// myBread.tastiness = 9000;
// myBread.temperature = 23.5;

// console.log(myBread.tastiness);
// console.log(myBread.temperature);

//constructor
// class User {
//        constructor(name, age, job){
//               this.name = name;
//               this.age = age;
//               this.job = job;
//        }
//        sayName() {
//               return this.name + '!!!';
//        }
// }

// let userA = new User('Joseph', 32, 'Potato slicer');
// let userB = new User('Assiva', 20, 'Watermelon');

// console.log(userA.name, userB.name);
// console.log(userA.age);
// console.log(userA.job);
// console.log(userA.sayName());
// console.log(userB.sayName());

//inheritance
//super function itu constructor parent class gitu
// class Parent {
//        //super function
//        constructor(name, age) {
//               this.name = name;
//               this.age = age;
//               console.log('name of parent is ' + name);
//        }
//        sayName(){
//               console.log('Hi, i am ' + this.name);
//        }
// }
// //inherit 
// class Child extends Parent {
//        constructor(name, age, job){
//               super(name, age);
//               this.job = job;
//               console.log('Job of child is ' + job);
//        }
//        sayJob(){
//               console.log('My job is ' + this.job);
//        }
// }

// let child = new Child('sara', 23, 'Fire eater');
// console.log(child.name);
// console.log(child.age);
// child.sayName();

// let parent = new Parent('Jimmy', 56);
// parent.sayName()

//hoisting
// var name;

// console.log(name)
// name = 'Joseph';

//quiz
class Unit{
       constructor(name, hp) {
              this.name = name;
              this.hp = hp;
       }
       healing(hp){
              if(this.hp <= 0) return;
              this.hp += hp;
              if(this.hp > 100) this.hp = 100;
       }
       damaged(hp){
              if(this.hp <= 0) return;
              this.hp -= hp;
              if(this.hp <= 0) this.hp = 0;
       }
}

const unit = new Unit('Zergling', 100);
unit.damaged(89);
unit.healing(100);
console.log(unit.hp);


