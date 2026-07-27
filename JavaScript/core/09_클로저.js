/*
    * 클로저 (closure)
        : 내부 함수가 외부 함수의 변수를 기억하고 접근할 수 있는 상태
        : 외부 함수의 실행이 종료되어 메모리에서 사라져도, 
          내부 함수가 살아있는 한(실행중) 참조하는 변수는 계속 유지 됨
*/

function getCounter() {
    let count = 0;

    function increase() {
        count++;
        return count;
    }

    return increase;
}

const run = getCounter();
    // => getCounter 실행 후 increase 함수를 반환

console.log(run());     // 출력 : 1
console.log(run());     // 출력 : 2
    // getCounter 실행 후 함수 실행은 종료 되었으나, count 변수는 메모리에 유지

const run2 = getCounter();
console.log(run2());    // 출력 : 1
    // 독립 된 렉시컬 환경
        // => getCounter() 호출 할 때마다 매번 새로운 렉시컬 환경이 생성
        // run과 run2 의 count 는 서로 영향을 주지 않음!

// getter, setter 패턴 적용
    // 여러 개의 클로저 함수를 객체 형태로 반환하여 인터페이스를 제공
function createStore(init = 0) {
    let value = init;

    return {
        get: () => value,
        set: (v) => {value = v;},
        increase: () => {
            value++;
            return value;
        }
    }
}

const store = createStore(10);
    // store -> (get: 함수, set: 함수, increate: 함수)

console.log(store.get());       // 10
store.increase();
console.log(store.get());       // 11
store.set(100);
console.log(store.get());       // 100

