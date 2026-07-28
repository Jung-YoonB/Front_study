console.log(`---------------------------- 13_ES6_문법 ----------------------------`);
// node.js 로 실행 (터미널 창)
// > node 파일명
    // node 13_ + tab 키 => node 13_ES6_문법.js 자동 완성
        // 이후 화살표 윗키 (▲) 를 누르면 자동 완성 

/*
    * 스프레드 연산자 (Spread Operator)
        : 배열/객체의 요소를 펼쳐서 복사, 전달 사용하는 연산자
            => `...`
*/

// 배열 : 기존 배열의 요소를 하나씩 펼쳐서 새로운 배열을 생성
const arr = [`핑크`, `보라`];
const arr2 = [...arr, `파랑`, `검정`];
console.log(arr2);      // [ '핑크', '보라', '파랑', '검정' ]

const arr3 = [1, 2];
const arr4 = [3, 4];
console.log([...arr3, ...arr4]);    // [ 1, 2, 3, 4 ]

// 객체 : 기존 객체의 속성을 복사하여 새로운 객체를 만들거나, 일부 속성을 안전하게 추가/수정 (불변성 유지)
let user = {
    id: `ididid`,
    pwd: `passwordpass`,
    name: `gildong`,
    age: 20,
    height: 162.7
};

// 비밀번호 변경
user = {...user, pwd: `pass123`};
console.log(user);

// 새로운 속성 추가. address 속성 추가
user = {...user, address: `seoul`};
console.log(user);

/*
    * 구조 분해 할당 : 배열/객체에서 값을 추출하여 개별 변수에 할당
 */

// 배열 : 배열의 요소를 순서에 맞춰서 변수로 쉽게 추출 (순서 기반)
const personList = [`gildong`, `cloud`, `dante`];

// * 순서대로 할당
const [hong, ff7, dmc] = personList;
console.log(hong, ff7, dmc);    // gildong cloud dante
console.log(hong);              // gildong

// * 특정 요소 건너뛰고 할당 (쉼표로 구분)
const [one, , three] = personList;
console.log(one, three);        // gildong dante

// * 첫번째 요소만 변수에 담고, 나머지는 배열로 묶어서 할당 (...)
const [my, ...rest] = personList;
console.log(my, rest);          // gildong [ 'cloud', 'dante' ]


// 객체 : 객체의 key(속성명) 와 일치하는 변수의 값을 추출
user = {
    id: `ididid`,
    pwd: `passwordpass`,
    name: `gildong`,
    age: 20,
    height: 162.7
};

// * 기본 할당 방법 : 속성명과 동일하게 할당
const {id, name} = user;
console.log(id, name);              // ididid gildong

// * 변수명을 지정하여 할당 (기존속성명: 새로운변수명)
const {id: userID, name: userName} = user;
console.log(userID, userName);      // ididid gildong

// * 기본 값 설정   => 해당 속성이 존재하지 않을 경우 적용
const {job = `학생`} = user;
console.log(job);                   // 학생

// 함수의 매개변수에서 객체 구조 분해 할당 사용
function showUserInfo({name, age}) {
    console.log(`이름 : ${name}, 나이 : ${age}`);
}
showUserInfo(user);                 // 이름 : gildong, 나이 : 20