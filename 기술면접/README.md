<details>
<summary>프레임워크와 라이브러리의 차이 왜 라이브러리를 사용하는지? *</summary>

프레임워크와 라이브러리의 차이는 **제어 흐름**이 어디에 있는가에 달라진다.

- 프레임워크: 통제권은 사용자가 아닌 프레임워크가 전체 애플리케이션의 동작 방식을 주도합니다. (프레임워크는 모델하우스를 짓는것에 비유할 수 있다)

  - Spring, Angular

- 라이브러리: 통제권은 개발자에게 있으며, 원하는 방식으로 사용하고 조합할 수 있습니다. (이케아에서 산 재료로 가구를 조립하는것에 비유할 수 있다)

  - npm, pip 모듈, React

- 생산성 향상, 유지보수 용이성, 재사용성과 모듈화

</details>
<br/>

<details>
<summary>리액트를 사용하는 이유와 장단점 *</summary>

"React를 사용하는 이유는 유연성과 확장성, 그리고 컴포넌트 기반 구조 덕분입니다. 특히 재사용 가능한 컴포넌트를 통해 개발 생산성이 높아지고, Virtual DOM 덕분에 퍼포먼스도 보장됩니다.

</details>
<br/>

<details>
<summary>url 을 입력하면 어떻게 되나 ? / 브라우저 실행 순서 *</summary>

### 1. IP주소 확인

- 브라우저는 DNS를 통해 웹 서버의 IP 주소를 파악한다.

### 2. 3-way Handshake

- 브라우저와 서버가 3-way Handshake를 나누는 TCP 통신을 한다

### 3. HTTP Request & Response

- 브라우저가 서버에게 HTTP Request를 보내면, 서버는 브라우저에게 HTML Response를 보낸다.

### 4. 데이터 Parsing

#### 1. HTML 파싱

브라우저는 HTML 문서를 파싱하여 DOM(Document Object Model) 트리를 생성한다. 이 과정에서 브라우저는 HTML 태그의 종류와 속성을 분석하고, 각 태그의 위치를 계산한다.

#### 2. CSS 파싱

브라우저는 CSS 문서를 파싱하여 CSSOM(CSS Object Model) 트리를 생성한다. 이 과정에서 브라우저는 CSS 선택자와 규칙을 분석하고, 각 규칙의 적용 범위와 우선 순위를 계산한다.

#### 3. 렌더 트리 생성

브라우저는 DOM 트리와 CSSOM 트리를 결합하여 렌더 트리를 생성한다. 이 과정에서 브라우저는 레이아웃과 페인팅에 필요한 정보를 추출하고, 숨겨진 요소나 비표시 요소를 필터링한다.

#### 4. 레이아웃

브라우저는 렌더 트리의 각 요소의 위치와 크기를 계산하여 뷰포트 내에서의 정확한 배치를 수행한다. 이 과정에서 브라우저는 브라우저 창의 크기나 스크롤 위치 등의 요소도 고려한다.

#### 5. 페인팅

브라우저는 렌더링된 요소들을 화면에 그린다. 이 과정에서 브라우저는 CSS 스타일, 배경, 그림자, 그림 등을 고려하며, 여러 계층으로 구성된 렌더링 요소들을 하나의 이미지로 합치는 과정도 포함된다.

#### 6. 화면 출력

</details>
<br/>

<details>
<summary>Sync와 Async의 차이점을 설명해 주세요.</summary>
Sync는 요청을 보내고 해당 요청에 대한 응답을 기다리는 것을 의미하고,

Async는 요청에 대한 응답을 기다리지 않고 다음 동작을 수행하는 것을 의미합니다.

</details>
<br/>

<details>

<summary>Blocking과 Non-Blocking의 차이를 설명해 주세요.</summary>
블로킹과 논블로킹은 작업을 수행할 때 제어권이 누구한테 있는지에 따라 구분됩니다.

블로킹은 한 작업이 완료될 때까지 다음 작업을 수행하지 않는 것을 의미합니다.

논블로킹은 한 작업이 완료되지 않아도 다음 작업을 수행할 수 있는 것을 의미합니다.

</details>
<br/>

<details>
<summary>Event loop에 대해 설명해 주세요.</summary>

자바스크립트의 이벤트 루프는 단일 스레드에서 실행되는 비동기 작업을 처리하는 메커니즘입니다. 이벤트 루프는 Call stack, Micro task queue, Macro task queue로 구성됩니다.

Micro task queue에는 Promise, async/await 과 같은 작업들이 들어가고, Macro task queue에는 Web API (setInterval, setTimeout)와 같은 작업들이 들어갑니다.

이벤트 루프는 Call stack을 확인하고, Call stack이 비어있는 경우 Micro task queue의 작업을 Call stack으로 옮깁니다. 그리고 Micro task queue가 비어있는 경우, Macro task queue의 작업을 Call stack으로 옮기고 처리합니다.

https://velog.io/@yejineee/%EC%9D%B4%EB%B2%A4%ED%8A%B8-%EB%A3%A8%ED%94%84%EC%99%80-%ED%83%9C%EC%8A%A4%ED%81%AC-%ED%81%90-%EB%A7%88%EC%9D%B4%ED%81%AC%EB%A1%9C-%ED%83%9C%EC%8A%A4%ED%81%AC-%EB%A7%A4%ED%81%AC%EB%A1%9C-%ED%83%9C%EC%8A%A4%ED%81%AC-g6f0joxx
![이미지](https://uploads.disquscdn.com/images/fb98edb750d6839fbc9958548f3b2a97e26f30fa5f529b8a9fed296c7a71a2d8.gif?w=800&h=405)
함수가 호출되면 콜스택에 쌓이고, 비동기 처리를 해야되면 webAPI(타이머 돔 등)에 담긴다

![이미지](https://uploads.disquscdn.com/images/9466d8aa53fc5b3e63a92858a94bb429df02bbd20012b738f0461343beaa6f90.gif?w=600&h=272)
이벤트 루프는 태스크큐를 확인해서 콜스택이 비었을경우 하나씩 꺼내서 처리한다.

</details>

<br/>

<details>
<summary>var, let, const의 차이를 설명해 주세요.</summary>

| var             | let              | const            |
| --------------- | ---------------- | ---------------- |
| 중복 선언 가능  | 중복 선언 불가능 | 중복 선언 불가능 |
| 함수레벨 스코프 | 블록레벨 스코프  | 블록레벨 스코프  |
| 재할당 가능     | 재할당 가능      | 재할당 불가능    |

</details>
<br/>

<details>
<summary>일반 함수와 화살표 함수의 차이</summary>

| 일반 함수                                                   | 화살표 함수                                                                                                     |
| ----------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------- |
| 함수 호출방식에 따라 this에 바인딩할 객체가 동적으로 결정됨 | 화살표 함수의 this는 언제나 상위 스코프의 this(Lexical this)를 가리키며, this에 바인딩할 객체가 정적으로 결정됨 |

</details>
<br/>

<details>
<summary>메서드 체이닝에 대해 설명해 주세요.</summary>

메서드가 객체를 반환하게 되면 메서드의 반환 값인 객체를 통해 또 다른 함수를 호출할 수 있다. 이러한 프로그래밍 패턴을 메서드 체이닝(Method Chaining)이라 부른다.

![alt text](./images/img1.png)

</details>

<br/>

<details>
<summary>this의 의미를 설명해 주세요.</summary>

this는 자신이 속한 객체 또는 자신이 생성할 인스턴스를 가리키는 자기 참조 변수다.

</details>
<br/>

<details>
<summary>함수 선언형과 함수 표현식의 차이를 설명해 주세요.</summary>

함수 선언형(Function Declaration)의 경우 function 키워드를 사용하여 함수를 정의합니다. 함수 선연형은 호이스팅 되기 때문에 코드가 실행되기 전에 로드되고 선언하기 전에도 호출이 가능합니다.

함수 표현식(Function Expression)의 경우 변수에 함수를 할당하는 방식으로 함수를 정의합니다. 함수 표현식은 함수가 선언된 이후에만 호출이 가능하며, 함수가 할당된 변수가 접근 가능한 스코프 내에서만 호출할 수 있습니다.

</details>

<br/>

<details>
<summary>호이스팅에 대해 설명해 주세요.</summary>

호이스팅(Hoisting)은 변수 및 함수의 선언이 스코프 내의 최상단으로 끌어올려지는 것 같은 현상

주의할 점 : 함수 표현식은 호이스팅되지 않습니다. 함수 표현식은 변수에 함수를 할당하는 형태로, 변수의 할당 부분만 호이스팅됩니다.

</details>

<br/>

<details>
<summary>이벤트 버블링과 이벤트 캡처링에 대해 설명해 주세요.</summary>

이벤트 버블링(Event Bubbling)은 이벤트가 발생한 요소에서 상위 요소로 이벤트가 전파되는 과정을 말합니다.

이벤트 캡처링(Event Capturing)은 이벤트가 상위 요소에서 하위 요소로 이벤트가 전파되는 과정을 말합니다.

### 이벤트 버블링을 막는 방법

```javascript
event.stopPropagation();
```

</details>
<br/>

<details>
<summary>이벤트 전파와 이벤트 위임에 대해 설명해 주세요.</summary>

이벤트 전파(Event Propagation)는 DOM 트리 상의 특정 Element node에서 이벤트가 발생하여 다른 Element node로 이벤트가 전파되는 것을 의미합니다.

이벤트의 전파는 Event capturing -> Target -> Event bubbling 순으로 일어납니다.

이벤트 위임(Event Delegation)은 하위 요소마다 이벤트를 추가하지 않고 상위 요소에서 하위 요소의 이벤트들을 제어하는 것을 의미합니다.

</details>
<br/>

<details>
<summary>스코프와 클로져</summary>
## [스코프]

스코프란 변수(식별자)에 접근할 수 있는 유효한 범위를 뜻합니다.

### 1. 전역 스코프(Global scope)

코드 어디에서든지 접근 가능

### 2. 함수 스코프(Local scope)

함수 내에서만 유효한 범위를 갖게 하는 스코프

전역 스코프완 반대되는 개념으로 지역 스코프(Local scope)라고도 불림

```javascript
var
```

### 3. 블록 스코프(Black scope)

블록단위{} 내에서만 유효한 범위를 갖게 하는 스코프

```javascript
let
const
```

### 4. 렉시컬 스코프

함수를 어디서 호출하는지가 아니라 어디서 선언하였는지에 따라 결정되는 스코프

```javascript
// 함수를 어디서 호출하는지가 아니라 어디에 선언하였는지에 따라 결정된다
var x = 1;

function foo() {
  var x = 10;
  bar();
}

function bar() {
  console.log(x);
}

foo(); // 1
bar(); // 1
```

## [스코프 체인]

스코프 체인이란, 현재 스코프에서 식별자를 검색할 때 상위 스코프를 연쇄적으로 찾아나가는 방식을 의미합니다.

변수를 참조할 때 자바스크립트 엔진은 스코프 체인을 통해 해당 변수를 참조하는 코드의 스코프부터 상위 스코프 방향으로 이동하며 선언된 변수를 검색합니다.

## [클로져]

클로저란 외부 함수의 변수에 접근할 수 있는 내부 함수, 또는 이러한 작동 원리를 일컫는 말이다.

### 1. 커링

클로저 함수의 외부 함수를 템플릿처럼 사용할 수 있다.

```javascript
function callFamily(last_name) {
  return function (first_name) {
    return `Hey, ${first_name} ${last_name}`;
  };
}

callFamily("James")("Jones"); // Hey, James Jones

let callLees = callFamily("Lee");

callLees("youjin"); // Hey, youjin Lee
callLees("youngjae"); // Hey, youngjae Lee

let callHollys = callFamily("Holly");

callLees("wendy"); // Hey, wendy Holly
callLees("honey"); // Hey, honey Holly 2. 클로저 모듈 패턴
```

### 2. 클로저 모듈 패턴

변수를 클로저 함수의 스코프에 가두어 함수 밖으로 노출시키지 않는 방법이다. 공개하고 싶지 않은 변수가 있을 때 유용하다.

```javascript
function counter() {
  let initialVal = 3;

  return {
    add: function () {
      initialVal += 2;
    },
    sub: function () {
      initialVal -= 2;
    },
    getVal: function () {
      return initialVal;
    },
  };
}

let calc1 = counter();
calc1.add();
calc1.add();
calc1.getVal(); // 7

let calc2 = counter();
calc2.add();
calc2.sub();
calc2.sub();
calc2.getVal(); // 1
```

### 클로져

클로져는 내부함수가 외부함수의 변수를 참조하며, 함수가 생성됐을 시점의 환경을 기억하는 함수이다.

```javascript
// 카운터 두 개를 만들기 위해서 두 배의 코드를 작성했습니다. 비효율적입니다!
let myValue = 0;
let yourValue = 0;

function increaseMyCounter() {
  console.log(++myValue);
}

function decreaseMyCounter() {
  console.log(--myValue);
}

function increaseYourCounter() {
  console.log(++yourValue);
}

function decreaseYourCounter() {
  console.log(--yourValue);
}

// 클로져를 사용한 경우
const counterCreator = () => {
  let value = 0;

  return {
    increase() {
      console.log(++value);
    },
    decrease() {
      console.log(--value);
    },
  };
};

const myCounter = counterCreator();
const yourCounter = counterCreator();

myCounter.increase(); // 1
myCounter.increase(); // 2
yourCounter.increase(); // 1
myCounter.decrease(); // 1
```

### 클로져 쓰는 이유

1. 은닉화

2. 변수의 상태를 기억하고 유지 (리액트 훅)

3. 전역변수 사용 억제

</details>
<br/>

<details>
<summary>throttle과 debounce에 대해 설명해 주세요.</summary>

## debounce

요청이 들어오고 일정 시간을 기다린 후 요청을 수행한다. 만약 일정 시간 안에 같은 요청이 추가로 들어오면 이전 요청은 취소된다

## throttle

일정 시간 동안 요청이 한 번만 수행되도록 한다.

</details>

<br/>

<details>
<summary>자바스크립트 동작 원리에 대해 설명해 주세요.</summary>

자바스크립트는 싱글 스레드 기반의 언어이며, V8 엔진을 사용합니다. V8 엔진의 경우 크게 메모리 힙(Memory heap)과 콜 스택(Call stack) 두 요소로 구성되어 있습니다.

### [Memory heap]

메모리 할당이 이뤄지는 곳입니다.

### [Call Stack]

코드가 실행될 때 호출 스택이 쌓이는 곳입니다.

### [Web APIs]

콜 스택에서 실행된 비동기 함수는 Web API를 호출하고, Web API는 콜백 함수를 콜백 큐에 밀어 넣습니다.

Web API에는 DOM, Ajax, SetTimeout 등등이 존재합니다.

### [Callback Queue]

함수를 저장하는 자료구조로, 선입선출 형식으로 함수를 처리합니다.

TaskQueue라고도 불립니다.

### [Event Loop]

이벤트 루프는 콜 스택이 다 비워지면 콜백 큐에 존재하는 함수들을 하나씩 콜 스택에 옮기는 역할을 합니다.

</details>
<br/>

<details>
<summary>불변성을 지켜야하는 이유</summary>

리액트의 state 변화 감지 기준은 콜 스택의 주소값이기 때문입니다.

리액트는 콜 스택의 주소값만을 비교해 상태 변화를 감지하는데 이를 얕은 비교라고 합니다.

이것이 리액트의 state를 빠르게 감지할 수 있는 장점이자 불변성을 유지해야 하는 이유입니다.

하지만 참조타입의 경우 참조타입의 값만 변경하면 실제로 콜스택의 주소값은 변경이 없어

state 감지가 되지 않아 리렌더링이 되지가 않습니다. 그래서 저희가 spread 연산자를 쓰는 이유가 그렇습니다.

</details>

<br/>

<details>
<summary>useState를 비동기로 업데이트 하는 이유</summary>

state는 값이 변경되면 리렌더링이 발생한다.

그런데 변경되는 state가 많을 경우 리렌더링이 계속 일어날테고 속도도 저하될것이다.

따라서 React는 성능을 위해서 변경된 값들을 모아 한번에 업데이트를 진행하여 렌더링을 줄이고자 배치(Batch) 기능을 사용해 비동기로 작동한다고 볼 수 있다.

배치 업데이트는 16ms 주기이다.

</details>

<br/>

<details>
<summary>state변경시, 왜 setState, useState를 사용하는가?</summary>

state는 컴포넌트 렌더링에 영향을 주는 데이터를 갖고 있는 객체인데,

이것을 업데이트 하기위해서는 setState, useState가 필요합니다

</details>
<br/>

<details>
<summary>랜더링이 많이 일어날 때 처리방법</summary>

useMemo, useCallback, 컴포넌트 분할, props 원형 그자체로 넘기기

</details>
<br/>

<details>
<summary>타입스크립트에서 enum타입을 지양하는 이유
</summary>

https://engineering.linecorp.com/ko/blog/typescript-enum-tree-shaking

enum은 편리한 기능이지만 TypeScript가 자체적으로 구현했기 때문에(JavaScript에서 사용 불가하기 때문에)발생하는 문제가 있다.

</details>
<br/>

<details>
<summary>react Reconciliation</summary>

React의 특징은, 가상돔을 그려서 실제 렌더링 하고 있는 DOM과 비교하여 차이점만 갱신시켜주는 방식으로 성능상의 최적화를 이뤄내고 있다는 점 입니다.

</details>
<br/>

<details>
<summary>stateful과 stateless</summary>

세션이 종료될 때까지, 클라이언트의 세션 정보를 저장하는 네트워크 프로토콜입니다. (TCP)

<table>
    <tr>
        <th></th>
        <th>stateful</th>
        <th>stateless</th>
    </tr>
    <tr>
        <td>저장</td>
        <td>서버</td>
        <td>클라이언트</td>
    </tr>
    <tr>
        <td>장점</td>
        <td>갑자기 통신이 중단되더라도 중단된 곳부터 다시 시작할 수 있습니다</td>
        <td>확정성이 좋습니다.</td>
    </tr>
    <tr>
        <td>단점</td>
        <td>서버에서 부수적인 관리가 요구</td>
        <td>클라이언트 측에서 송신할 데이터의 양이 많아집니다.</td>
    </tr>
    <tr>
        <td>예시</td>
        <td>session</td>
        <td>JWT</td>
    </tr>
</table>

</details>
<br/>

<details>
<summary>Type과 Interface의 차이점에 대해 설명해주세요</summary>

interface에서 할 수 있는 대부분의 기능들은 type에서 가능하지만,

한 가지 중요한 차이점은 type은 새로운 속성을 추가하기 위해서 다시 같은 이름으로 선언할 수 없지만,

interface는 항상 선언적 확장이 가능하다는 것입니다.

</details>
<br/>

<details>
<summary>라이프 사이클</summary>

mount - update - unmount : 함수형

componentDidMount - componentDidUpdate - componentWillUnmount : 클래스형

useEffect를 사용할 경우 함수를 반환하면 clean-up 작업을 통해 willUnmount 가능

그외는 조건을 걸어서 사용가능 [] 초기, [state]

</details>
<br/>

<details>
<summary>Props Drilling</summary>

하위 컴포넌트가 많아지면서 props로 전달이 많아지면서 유지보수가 힘들어지는 과정

</details>
<br/>

<details>
<summary>SPA, MPA, CSR, SSR</summary>

- SPA

페이지가 새로고침 되지 않고 다른 페이지로 넘어가지 않습니다.

- MPA

여러 개의 페이지로 이루어진 홈페이지

- CSR

구동 방식은 초기 로드 시 빈 HTML과 모든 로직이 담겨 있는 Javascript 다운로드를 합니다.

그 후 빈 HTML에 Javascript를 이용하여 Dom을 동적으로 생성하여 그려 내게 됩니다.

SEO에 취약

- SSR

서버에서 렌더링하여 완성된 HTML 파일을 로드해 줍니다.

클라이언트에서 요청할 때마다 각 상황에 맞는 HTML 파일을 넘겨주기 때문에 페이지가 여러 가지일 수밖에 없습니다.

페이지 이동시 느림, SEO 좋음

</details>
<br/>

<details>
<summary>webpack, bebel, polyfill</summary>

### webpack

웹팩(Webpack)은 모듈을 번들시켜주는 역할을 한다.

빌드라는 과정을 통해 하나의 파일로 만들어 준다.

### babel

자바스크립트 컴파일러

최신 버젼의 자바스크립트가 실행이 안되는 구버젼 웹브라우저를 대응하기 위해서 사용

ES6 코드를 ES5 코드로 변환해주는 일에서 리액트의 JSX문법, 타입스크립트, 코드 압축, Proposal 까지 처리해준다.

### polyfill

기본적으로 지원하지 않는 이전 브라우저에서 최신 기능을 제공하는 데 필요한 코드 입니다.

</details>

<br/>

<details>
<summary>로컬 스토리지, 세션 스토리지, 쿠키의 차이</summary>

- 로컬 스토리지 : 영구적 보관
- 세션 스토리지 : 탭별로 보관, 탭이 닫히면 초기화
- 쿠키 : 클라이언트 PC에 보관, 만료일 필수, 적은 용량

</details>

<br/>

<details>
<summary>스타일</summary>

### grid와 flex

![grid와flex](https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2Fzy5q9%2Fbtq1aRImW4g%2FvwwzIFiaGBt5jgwXOssg2K%2Fimg.jpg)
Flex는 1차원으로 수평, 수직 영역 중 하나의 방향으로만 레이아웃을 나눌 수 있습니다.

그에 비해 Grid는 2차원으로 수평 수직을 동시에 영역을 나눌 수 있습니다.

### :after, ::after의 차이

:after은 CSS2에서 , ::after은 CSS3에서 사용하는 것입니다.

즉, 가상요소(Pseudo-elements)는 CSS2에서는 : 가 하나만 표기되고, CSS3에서는 :가 두개 표기됩니다.

가상클래스 :hover, :active, :checked, :last-child ...등등

가상요소 ::after, ::before, ::first-letter, ::placeholder ...등등

### css관련 질문

```css
+ 형제노드 하나
```

```css
> 바로아래 자식노드 전부
```

```css
e: nth-child(n) 부모의 n번째 자식이면서 E 요소일 때;
```

```css
e: nth-type(n) 같은 유형의 n번째 요소의 E 요소;
```

</details>

<br/>

<details>
<summary>graphQL vs RESTful</summary>

필요한 부분만 부분적으로 요청할 수 있다.

http 요청 횟수를 줄일 수 있다.

File 전송 등 Text 만으로 하기 힘든 내용들을 처리하기 복잡하다.

고정된 요청과 응답만 필요할 경우에는 Query 로 인해 요청의 크기가 RESTful API 의 경우보다 더 커진다.

1. GraphQL

- 서로 다른 모양의 다양한 요청들에 대해 응답할 수 있어야 할 때
- 대부분의 요청이 CRUD(Create-Read-Update-Delete) 에 해당할 때

2. RESTful

- HTTP 와 HTTPs 에 의한 Caching 을 잘 사용하고 싶을 때
- File 전송 등 단순한 Text 로 처리되지 않는 요청들이 있을 때
- 요청의 구조가 정해져 있을 때

</details>

<br/>

<details>
<summary>Next Api router, App router</summary>

https://www.jadru.com/diffrent-approuter-and-pagerouter

페이지 라우터 대신 앱라우터를 사용하는 장단점

<table>
    <tr>
        <th>장점</th>
        <th>단점</th>
    </tr>
    <tr>
        <td>번들 사이즈 감소</td>
        <td>다소 난잡해지는 app 폴더 구조</td>
    </tr>
    <tr>
        <td>layout, loading, error 핸들링</td>
        <td>새로운 키워드와 방법들</td>
    </tr>
    <tr>
        <td>metadata, sitemap 간편 생성</td>
        <td>기존에 사용하던 getServerSideProps() getStaticProps() getStaticPaths() 안쓰고 fetch API를 사용</td>
    </tr>
</table>

</details>

<br/>

<details>
<summary>typescript Dry</summary>

Do not Repeat Yourself 의 첫 글자를 따서 만든 약어이다.
개발을 할 때 동일한 소스코드가 반복되는 것을 막으라는 뜻이다.

https://velog.io/@gene028/Typescript-%ED%83%80%EC%9E%85-%EC%97%B0%EC%82%B0%EA%B3%BC-%EC%A0%9C%EB%84%88%EB%A6%AD-%EC%82%AC%EC%9A%A9%EC%9C%BC%EB%A1%9C-DRY-%EC%9B%90%EC%B9%99-%EC%A7%80%ED%82%A4%EA%B8%B0

</details>

<br/>

<details>
<summary>typescript Partial, Pick, Omit</summary>

Partial : 파셜 타입은 특정 타입의 부분 집합을 만족하는 타입을 정의할 수 있습니다.

Pick : 픽 타입은 특정 타입에서 몇 개의 속성을 선택하여 타입을 정의합니다.

Omit :특정 속성만 제거한 타입을 정의합니다. pick의 반대

https://kyounghwan01.github.io/blog/TS/fundamentals/utility-types/#%E1%84%8B%E1%85%A8%E1%84%89%E1%85%B5-2

</details>

<br/>

<details>
<summary>Tdz</summary>

Temporal Dead Zone의 약자로 변수가 선언되고 초기화되기 전에 접근하면 발생하는 현상을 설명합니다.

</details>

<br/>

<details>
<summary>Hoc</summary>

HOC (Higher Order Component)는 React에서 사용되는 디자인 패턴 중 하나로, 컴포넌트 로직을 재사용하고 구성할 수 있는 방법을 제공합니다.

HOC는 함수로 구현되며, 기존 컴포넌트를 입력으로 받아 새로운 컴포넌트를 반환합니다.

HOC를 사용하면 컴포넌트 간에 공통된 로직을 추출하고 추상화할 수 있어 코드의 재사용성과 유지 보수성을 향상시킬 수 있습니다.

</details>
<br/>

<details>
<summary>도커</summary>

### 도커 컨테이너

실행환경을 독립적으로 운용할 수 있도록 기반환경 또는 다른 실행환경과의 간섭을 막고 실행의 독립성을 확보해주는 운영체계 수준의 격리 기술을 말합니다

### 도커 컨테이너와 vm의 차이

둘다 독릭접인 실행환경을 구성할 수 있도록 도와주지만, vm의 경우 불필요한 OS를 만드는 작업에 대해서 계속해서 해야되므로 확장성이 떨어진다.

하지만 컨테이너의 경우 컨테이너의 경우 하나의 Host OS위에서 마치 각각의 독립적인 프로그램처럼 관리되고 실행된다. 불필요한 OS만드는작업 및 Infra를 독립적으로 나눌 필요가 없어서 확장성이 좋고 빠르다.

### 도커 컨테이너의 작동방식

리눅스 컨테이너란 운영체제 커널을 제외한 나머지 모든 프로세스와 독립적인 1개 이상의 프로세스를 실행하는 기술을 말한다

이러한 기능을 보다 쉽게 쓸수 있게 만든 것이 도커다.

</details>

<br/>

<details>
<summary>타입스크립트 튜플</summary>

https://velog.io/@from_numpy/TypeScript-Tuple%ED%8A%9C%ED%94%8C

</details>

<br/>

<details>
<summary>Next 폴더구조</summary>

### Route group

Route group은 말그대로 route가 될 수 있는 페이지들을 하나의 그룹으로 묶을 수 있게 해줍니다.

문법은 간단하게 (name) 이런식으로 폴더 네이밍을 작성해주시면 됩니다.

### private folder

문법은 \_folder 이런식으로 작성하면 이 폴더는 route로 생성되지 않습니다.

</details>
<br/>
