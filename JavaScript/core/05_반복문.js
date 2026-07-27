/*
    * 반복문
        - for / while / do-while

        - for..of (값 순회) / for..in(key 순회)
        
        - 분기문 : break / continue
*/

// for : 반복 횟수가 정해져 있을 때 사용
    // for(초기식;조건식;증감식) {}

// 1 ~ 7 까지 반복
for (let i = 1;i<8;i++) console.log(`i값 : ${i}`);

// while : 조건이 참인 동안 반복 할 때 사용 
    // while (조건식) {}

console.log(`======================================`);
// 1 ~ 7 까지 반복
let i = 1;
while (i<8) {
    console.log(`i값 : ${i}`);
    i++;
}

// do-while : 최소 1번은 무조건 실행하고 조건을 만족하는 경우 반복

console.log(`======================================`);
// 1 ~ 7 까지 반복
i = 1;          // 위에서 사용한 i 값 초기화
do {
    console.log(`i값 : ${i}`);
    i++;
} while (i<8);

// break    : 즉시 반복문을 종료
// continue : 이번 회차의 남은 코드 실행을 건너뛰고, 다음 회차로 이동
for (let i = 1;i<=10;i++){
    if (i===5) continue;
    if (i===8) break;
    console.log(i);
}
    //  출력 결과 : 1 2 3 4 6 7

// ----------------------------------------------------------------------------
// for .. of : 배열 등 순회 가능한 객체의 "값"을 순회
const persons = [`홍길동`, `고길동`, `김길동`, `오길동`, `박길동`];
// for (자료형 변수명 : 배열) {} => 자바
    // for (const 변수명 of 배열) {} => 자바스크립트
for (const p of persons) console.log(p);
    // 출력 결과 : 홍길동 고길동 김길동 오길동 박길동

// -----------------------------------------------------------------------------
// for .. in : 객체의 "키값" 을 순회
    // for (const 변수명(키명) in 객체) {}
const student = {
    name: `홍길동`,
    java: 80,
    SQL: 78
};

for (const key in student) {
    console.log(key);
        // 출력 결과 키값(속성명) : name java SQL
        // console.log(student.key);       // 실제로 "key" 라는 값을 가지고 있는 지를 찾는 것
            // => undifined 로 출력
    console.log(student[key]);
        // 키값의 value 값 조회
}

// --> 배열에서 for .. in 사용 시 주의
for(const index in persons) console.log(index, typeof index);
    // 출력 결과 : 0 1 2 3 4 (String)
    // => 배열의 요소(아이템)를 순회할 때는 for .. in 대신 for .. of 방식을 권장함!