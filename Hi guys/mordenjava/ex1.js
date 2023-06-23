var userId = 1;
var userName = 'lee';
var user={id: 1, name: 'yun'};
var users = [{id: 1, name:'kim'},{id:2,name:'park'}];
users[1].name=userName;
// console.log(users[1]);
console.log(score);//결과 undefined 이유 호이스팅으로 인해 먼저 변수가 생성됨-콘솔로그 출력-80이란 값 대입 순서라 undefined
score=80;
var score;
console.log(score);
console.log('======');
console.log('hello "iam" java');
console.log('=======')
var person = {
    name:'lee',
    sayHello: function(){
        console.log('hello my name is' + this.name)
    }
}
console.log(person)
console.log(sayHello)