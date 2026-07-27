/*
    * 형변환 : 데이터 타입을 변환하는 것.
        => 연산 수행 시 피연산자의 타입이 일치해야 하므로 형변환이 발생함!

        - 명시적 형변환 (강제 형변환)
        - 묵시적 형변환 (자동 형변환)
*/

// * 명시적 형변환
console.log(Number(`123`));        // (파란색) 숫자 123
console.log(Number(`123px`));       // NaN (숫자가 아닌 문자가 포함되면 오류 대신 NaN 예약어 표시)
console.log(parseInt(`123px`));     // 123 (시작하는 숫자 부분만 추출하여 변환)
console.log(parseInt(`px123`));     // NaN (숫자로 시작하지 않으면 Nan)

console.log(parseFloat(`99.9kg`));  // 99.9 (소숫점을 포함한 실수로 변환)

// 숫자 -> 문자열
console.log(String(123));           // (검은색) 문자열 "123"
console.log((123).toString());      // "123"

// boolean 타입으로 변환
console.log(Boolean(`ture`));       // true
console.log(Boolean(0));            // false
console.log(Boolean(1));            // true

console.log(!!`abc`);               // true 
console.log(!!``);                  // false (빈 문자열은 false)


// * 묵시적 형변환
    // + 연산자에 문자열이 포함되면, 문자열 연결이 우선 적용 됨
console.log(1+`1`);                 // "11"
console.log(`5`+3);                 // "53"
console.log(parseInt(`5`)+3);       // 8

//  - , * , / , % 연산자는 수학적 연산이 우선되어 피연산자를 숫자로 변환함
console.log(1-`1`);                 // 0
console.log(`5`*`2`);               // 10
console.log(true-`2`);              // -1 (true 는 숫자 1로 변환)

/*
    * true , false 로 취급되는 값
        - falsy 값 (7개)
            1) false
            2) 0
            3) -0
            4) ""
            5) null
            6) undefined
            7) NaN
        
            위의 7개를 제외한 모든 값은 Truthy 로 취급 됨
                => [] -> 빈 배열은 true, {} 빈 객체도 true , "0" 문자열 0 도 true
*/
"" ? console.log(`빈 문자열 "" 은 true`) : console.log(`빈 문자열 "" 은 false`);
false ? console.log(`flase 는 true`) : console.log(`false 는 false`);
0 ? console.log(`0 은 true`) : console.log(`0 은 false`);
-0 ? console.log(`-0 은 true`) : console.log(`-0 은 false`);
null ? console.log(`null 은 true`) : console.log(`null 은 false`);
undefined ? console.log(`undifined 는 true`) : console.log(`undifined 는 false`);
NaN ? console.log(`NaN 은 true`) : console.log(`NaN 은 false`);


[] ? console.log(`빈 배열 [] 은 true`) : console.log(`빈 배열 [] 은 false`);
    // => [] (빈 배열) 은 turethy!

// 배열이 비어있는지 판별
const arr = [];

if (arr) {
    console.log(`배열이 존재함!!`);
}

// 배열이 비어있는지 판별 => Length를 통해 검사!
if (arr.length === 0) {
    console.log(`배열이 비어있음!`);
}

if (arr.length !== 0) {
    console.log(`배열이 비어있지 않음!`);
}