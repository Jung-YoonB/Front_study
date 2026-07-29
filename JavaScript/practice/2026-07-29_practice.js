//모든 요소가 브라우저에 로드 된 후 스크립트가 실행
window.onload = function () {
    /*
        JS 코드 작성 시
            1) 대상 요소 확인
            2) 어떤 이벤트가 발생했을 때 동작해야 하는지 확인
            3) 동작 할 내용을 이벤트 핸들러(함수)에 정의
    */
//----------------------------------------------------------------------------------------------------------------------------
    ////// 문자열 길이 및 공백 계산
    //// 1) 각 요소 선택
    const textInput = document.querySelector(`#textInput`);
    const totalLength = document.querySelector(`#totalLength`);
    const noSpaceLength = document.querySelector(`#noSpaceLength`)

    //// 2) keyup 이벤트 발생 시 실행
    // textInput.addEventListener(`keyup`, function() {    

    //// 2) input 이벤트 발생 시 실행
    textInput.addEventListener(`input`, function () {

        // 3) 입력 받은 값 저장 후 length 계산
        const totalVal = textInput.value;
        totalLength.textContent = totalVal.length;

        // 3) 입력 받은 값을 공백 제거하여 replace 한 후 length 계산
        // const noSpaceVal = totalVal.replace(/ /g, ``);       => space 빈칸만 제거
        const noSpaceVal = totalVal.replace(/\s/g, ``);       //=> space, tab, enter 등의 모든 빈칸 제거
        noSpaceLength.textContent = noSpaceVal.length;
    });

//----------------------------------------------------------------------------------------------------------------------------
    ////// 배열 요소를 활용한 할 일 목록
    //// 1) 각 요소 선택
    const addTodoBtn = document.querySelector(`#addTodoBtn`);
    const todoInput = document.querySelector(`#todoInput`);
    const todoList = document.querySelector(`#todoList`);
    
    /* 배열 사용 버전 */
    // 배열 선언 => 입력 된 값들을 저장
    const todos = ["커피 한잔"];

    function renderTodos() {
        // 기존 내용 제거
        todoList.innerHTML = ``;

        // todo 배열에 있는 데이터를 #todoList 영역에 모두 출력
        todos.forEach((value, index) => {

        const liEl = document.createElement(`li`);
        // 생성한 리스트 그룹으로 합류
        liEl.className = `list-group-item`;
        // 배열에 저장 된 데이터를 출력
        liEl.textContent = value;

        // 추가한 리스트를 해당 리스트 영역에 추가
        todoList.appendChild(liEl);
        });    
    }

    //// 2) click 이벤트 발생 시 실행
    addTodoBtn.addEventListener(`click`, function() {
        // 3) 입력 된 값을 하단에 list 형식으로 추가해 출력 ul#rodoList > li
        const todoVal = todoInput.value;

        /*
        바로 render 해서 추가 하기 (배열 사용 X)
        // <li></li> 리스트 생성
        const liEl = document.createElement(`li`);
        // 생성한 리스트 그룹으로 합류
        liEl.className = `list-group-item`;
        // 입력 된 텍스트 리스트에 출력
        liEl.textContent = todoVal;

        // 추가한 리스트를 해당 리스트 영역에 추가
        todoList.appendChild(liEl);
        */

        // todos 배열에 입력 된 값을 추가
        todos.push(todoVal);
        // renderTodos() 호출
        renderTodos();

    });

    // 초기 목록 랜더링을 위해 함수 호출 (화면에 출력) => 초기값 표시 해주기 위함
    renderTodos();

//----------------------------------------------------------------------------------------------------------------------------
    ////// 카운트 다운 타이머
    //// 1) 각 요소 선택
    const startBtn = document.querySelector(`#startTimerBtn`);
    const pauseBtn = document.querySelector(`#pauseTimerBtn`);
    const resetBtn = document.querySelector(`#resetTimerBtn`);
    const timer = document.querySelector(`#timerDisplay`);
    // 타이머 id를 저장하기 위한 변수
    let timerId = null;
    
    //// 2) 이벤트 등록 click 시
    startBtn.addEventListener(`click`, function() {
        // 이미 타이머가 등록되어 있으면 추가로 등록하지 않도록 함수 종료
        if (timerId !== null) return;

        // 3) #timerDisplay 안 영역의 값을 1씩 감소 (1초마다) 출력
            // setInterval (반복)
        timerId = setInterval(function() {
        
        // String 으로 받아온 기본 값을 int 로 변환 
        let timerVal = parseInt(timer.textContent);


        // 0에 도달하면 타이머 종료
        if (timerVal > 0) {
            // 1 씩 카운트 다운
            timerVal--;

            // 1씩 감소한 값 출력
            timer.textContent = timerVal;
        }} ,1000);
    });

    //// 2) 이벤트 등록 click 시    
    pauseBtn.addEventListener(`click`, function() {
        clearInterval(timerId);
        timerId = null;
    });

    //// 2) 이벤트 등록 click 시
    resetBtn.addEventListener(`click`, function() {
        // #timerDisplay 영역에 초기값(10) 으로 출력
        timer.textContent = 10;

        // 동작중인 타이머는 제거(clear)
        clearInterval(timerId);
        timerId = null;
    });
//----------------------------------------------------------------------------------------------------------------------------
    ////// 할인율 계산기
    //// 1) 각 요소 선택
    const calculateBtn = document.querySelector(`#calculateBtn`);
    const priceResult = document.querySelector(`#priceResult`);
    const itemSelect = document.querySelector(`#itemSelect`);
    const itemQuantity = document.querySelector(`#itemQuantity`);
    const couponSelect = document.querySelector(`#couponSelect`);

    //// 2) 이벤트 등록 click 시
    calculateBtn.addEventListener(`click`, function() {
        // 3) 선택 된 상품 금액, 입력 된 수량, 선택 된 쿠폰 값으로 결제 금액 계산
        const price = Number(itemSelect.value);
        const qty = Number(itemQuantity.value);
        const dis = Number(couponSelect.value);

        const totalPrice = price*qty*(1-dis);

        priceResult.textContent = `결재 금액: ${totalPrice}원`;
  
    });

//----------------------------------------------------------------------------------------------------------------------------
    ////// 숫자 배열의 합계와 평균 구하기
    //// 1) 각 요소 선택
    const numInput = document.querySelector(`#numberInput`);
    const addBtn = document.querySelector(`#addNumberBtn`);
    const clearBtn = document.querySelector(`#clearNumbersBtn`);
    const numDisplay = document.querySelector(`#numberArrayDisplay`);
    let numbers = [];
    const sumDisplay = document.querySelector(`#sumDisplay`);
    const avgDisplay = document.querySelector(`#avgDisplay`);

    //// 2) numbers 배열의 테이터를 출력, 총 합과 평균을 출력
    function showNumbers() {
        // 배열의 데이터를 콤마(,) 로 구분해서 출력
            // 배열.join(`,`)
        numDisplay.textContent = numbers.join(`,`);

        // 배열에 데이터가 없으면 직접 초기화 => 평균 NaN 되는 것 방지
        if (numbers.length === 0 ) {
            sumDisplay.textContent = 0;
            avgDisplay.textContent = 0;
            return;
        }

        // sum 구하기
        const total = numbers.reduce((sum, curr) => sum+curr, 0);

        // sum 과 avg 출력
        sumDisplay.textContent = total;
        avgDisplay.textContent = (total / numbers.length);
    };


    //// 클릭 시 숫자 추가
    addBtn.addEventListener(`click`, function() {        
        let num = numInput.value;

        if (num === ``) {
            alert(`숫자를 입력해주세요.`);
            return;
        }

        // numbers 배열에 입력 된 값 추가
        num = Number(numInput.value);
        numbers.push(num);

        // showNumbers() 함수 호출하여 화면에 출력
        showNumbers();

        // 입력 요소 초기화
        numInput.value = ``;
    });

    clearBtn.addEventListener(`click`, function() {
        // 배열을 초기화 -> 빈 배열을 저장
        numbers = [];

        // 입력 요소 초기화
        numInput.value = ``;

        // showNumbers() 함수를 호출하여 화면에 출력
        showNumbers();
    });

}
