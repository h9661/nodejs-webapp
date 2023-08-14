# nodejs-webapp

- [x] express가 뭔지 학습
- [x] router
- [x] router parameters
- [x] query parameters
- [x] cookie
- [x] session
- [x] session fake authentication
- [x] mongodb connection
- [x] hashing password
- [x] authentication with PassportJS
- [x] serialize & deserialize User
- [x] groceries memory based에서 db collection으로 만들기
- [x] session store in database
- [x] auth discord.
- [x] discord user와 local user 통합
- [x] passport-google로 구글 로그인 만들어보기.
- [x] 로그인 페이지 구현, groceries 페이지 구현하고 리다이렉션?? 그거도 해보기
- [x] 로그인 성공 시 main html page로 redirection (ejs 학습, res.render() 사용. 이거 공부하기)
- [x] main page에서 모든 groceries 출력하기 (ejs와 res.render()를 사용하여 처리가 가능하다. 쉬고 쫌이따 해야징)
- [x] auth/register test 작성하기
- [ ] 로그인 실패시 실패 문구 로그인 페이지에 나오게 하기
- [ ] auth/google test 작성하기


# 학습 정리
1. middleware
https://velog.io/@wjddnjswjd12/node.js-express-%EB%AF%B8%EB%93%A4%EC%9B%A8%EC%96%B4%EB%9E%80

2. get
3. post

https://www.youtube.com/watch?v=o4RLiTIOfhQ&list=PL_cUvD4qzbkwp6pxx27pqgohrsP8v1Wj2&index=4&ab_channel=AnsontheDeveloper

4. router parameters/query string

https://velog.io/@unknown9732/Express.js-%EC%97%90%EC%84%9C-Route-parameter-Query-string-%EB%B0%9B%EA%B8%B0

5. router

https://inpa.tistory.com/entry/EXPRESS-%F0%9F%93%9A-%EB%9D%BC%EC%9A%B0%ED%84%B0-Router


6. cookie & session

https://cotak.tistory.com/87

7. ipv4, ipv6 표기 방식의 차이. mongodb 연결할 때 이 차이 까먹어서 연결 못했음 ㅋㅋㅋ

```
x.x.x.x
x:x:x:x:x:x:x:x
```


8. mongodb 정리

https://inpa.tistory.com/entry/MONGO-%F0%9F%93%9A-%EB%AA%BD%EA%B3%A0%EB%94%94%EB%B9%84%EC%9D%98-%EB%8D%B0%EC%9D%B4%ED%84%B0-%EA%B4%80%EA%B3%84-%EB%AA%A8%EB%8D%B8%EB%A7%81-%F0%9F%92%AF-%EC%A0%95%EB%A6%AC

9. mongodb CRUD query 명령어 학습

https://inpa.tistory.com/entry/MONGO-%F0%9F%93%9A-%EB%AA%BD%EA%B3%A0%EB%94%94%EB%B9%84-%EC%BF%BC%EB%A6%AC-%EC%A0%95%EB%A6%AC

10. passport-local

https://velog.io/@jakeseo_me/%EB%B2%88%EC%97%AD-passport-local%EC%97%90-%EB%8C%80%ED%95%B4-%EC%95%8C%EC%95%84%EC%95%BC-%ED%95%98%EB%8A%94-%EB%AA%A8%EB%93%A0-%EA%B2%83

11. serialize & deserialize

### 직렬화와 역직렬화

**직렬화란 추상적인 object(객체)를 물리적으로 전송 및 저장하기위해 단순하고 연속적인 텍스트 파일로 변환하는 과정.** 반대로 텍스트 파일을 오브젝트로 변환하는 것이 역직렬화이다.

텍스트 파일 형태로는 Bytes, XML, JSON, YAML 등이 있다.

### 직렬화를 하는 이유?

- 오브젝트는 `메모리`에 저장되고, string과 byte 등의 데이터는 `드라이브` 및 `통신선`에 저장이 되어 직렬화 과정이 있어야 물리적으로 전송, 저장할 수 있기 때문이다.

### 예시1)

게임 엔진 에디터로 작업을 하고 에디터를 껐다 켜도 작업이 저장되어 있는 이유?

A메모리에 저장된 오브젝트를 직렬화하여 텍스트 파일로 저장해두었다가, 다시 게임 엔진 에디터 키면 역직렬화로 불러옴

### 예시2)

1번 컴퓨터의 오브젝트를 운영체제, 프로그래밍 언어가 다른 2번 컴퓨터로 전송하기 위해서는 메모리에 저장된 추장적인 오브젝트를 직렬화하여 01010111 바이트 데이터로 바꾸고 물리적인 회선으로 전송해주고, 2번 컴퓨터에서는 역직렬화로 실제 존재하는 오브젝트로 받음

---

### 주요 직렬화 데이터 알기

### 1) XML

- HTML처럼 여는 태그와 닫는 태그를 사용하는 형태이고 태그명은 원하는대로 정할 수 있다.
- VSCode에서 보면 띄어쓰기, 줄바꿈이 되어 있어 구조화되어 보이지만 원래는 XML minify를 사용하여 한줄로 만들어져 있는 형태이다.
- 가독성이 좋지 않다.
- 안전한 상태에서 개발하고 싶으면, JSON보다 스키마를 사용하여 데이터 무결성을 검증할 수 있는 XML을 사용한다.

### 2) JSON

- 속성-값 쌍, 배열 자료형 또는 기타 모든 시리얼화 가능한 값 또는 "키-값 쌍"으로 이루어진 데이터 오브젝트를 전달하기 위해 인간이 읽을 수 있는 텍스트를 사용하는 개방형 표준 포맷
- 간결하고 가독성이 좋음
- HTML과 자바스크립트가 연동되어 빠른 응답이 필요한 웹 환경에서 주로 사용

```
passport.serializeUser(function(user, done) {
    done(null, user.id);
});              │
                 │
                 │
                 └─────────────────┬──→ saved to session
                                   │    req.session.passport.user = {id: '..'}
                                   │
                                   ↓
passport.deserializeUser(function(id, done) {
                   ┌───────────────┘
                   │
                   ↓
    User.findById(id, function(err, user) {
        done(err, user);
    });            └──────────────→ user object attaches to the request as req.user
});
```

12. auth란 무엇인가?

https://tecoble.techcourse.co.kr/post/2021-07-10-understanding-oauth/

13. passport-google

https://millo-l.github.io/Nodejs-passport-Google-OAuth-2-%EB%A1%9C%EA%B7%B8%EC%9D%B8-%EC%82%AC%EC%9A%A9%ED%95%98%EA%B8%B0/

14. send vs json vs end

express는 Nodejs를 쓰는 사람이라면 모두가 안다고 할 정도로 유명한 웹 프레임워크다.

express를 사용해서 response, request를 통해 주고 받고 하게 되는데 이 때 특히 response를 보내줄 때 헷갈리는 부분이 있다.

이 부분에 대해 구글 엔지니어인 타마스 피로스의 [블로그 글](https://tpiros.dev/blog/res-json-vs-res-send-vs-res-end-in-express/)을 보고 참고하였다.

바로 `res.json()`, `res.send()`, `res.end()` 이 세가지 인데, 어떤걸 써야 하는지 가끔 헷갈릴 때가 있고 무슨 차이가 있는지 잘 알지 못하고 있어 이번 기회에 정리하고자 한다.

Express 서버가 HTTP 요청을 받게되면, res를 반환하게 된다. 보통 이렇게들 쓴다.

`app.get("/api/login", (req, res) => {
  // ... do something ...
});`

이때 `res`는 NodeJs만의 업그레이드된 response object이다.

## **바쁜 사람들 위해 짧게 설명해보면…**

**사실 res.send()와 res.json()은 별반 다를바 없다.**

> res.send()는 send에 전해진 argument에 따라서 Content-type이 자동적으로 만들어진다. 이게 기본이다.res.json()은 json이 아닌 것도 json 형식으로 바꾸어서 보내준다. 즉 content-type 헤더를 application/JSON으로 고정한다. 그런데 결국 res.json()도 마지막에 res.send()를 호출한다.res.end()는 보내줄 아무 데이터도 없는데 response를 끝내고 싶을 때 사용한다.ex) res.status(400).end();
> 

## **res.send()**

이름에서부터 알 수 있듯 `res.send()`는 기본적으로 response를 보내는 역할을 한다. 그리고 이게 기본이라고 생각하면 된다.

기본적으로 서버에서 response 처리를 할 때 **Content-Type**을 지정해주어야 한다.

res.send는 우리가 어떤 데이터를 보내는지 파악을 해서 이에 알맞게 Contnet-Type을 지정해준다. 이는 Buffer,String, Object, Array 일 수 있다.

예를 들어서 Buffer 데이터를 반환해준다면 res.send는 자동으로 Content-Type을 `application/octet-stream`으로 지정한다.

## **res.json()**

웹개발자들이 데이터를 주고 받을때 보통 RESTful API의 형태로 데이터를 주고 받는다(요즘은 다른 방식도 많이 등장했지만).

그러면 보통 이때 사용하는 형식은 JSON일 확률이 거의 대부분일 것이다. 그럼 아래와 같이 서버 응답을 보내줄 것이다.

`app.get("/api/login", (req, res) => {
  res.send({ name: "John" });
});`

res.json은 자주 쓰이는 메소드를 구현해놓은 것이라고 보면 된다. 즉 안에 들어있는 데이터들을 자동을 json 형식으로 바꾸어 보내준다.

이 경우 header의 모습은 다음과 같을 것이다.

`X-Powered-By: Express
Content-Type: application/json; charset=utf-8
Content-Length: 17
ETag: W/"11-IkjuL6CqqtmReFMfkkvwC0sKj04"
Date: Fri, 10 Aug 2018 09:34:13 GMT
Connection: keep-alive`

즉 결론적으로 말하면 res.send()와 res.json()은 별반 다를게 없다.

## **res.end()**

사실 이 메소드는 안써도 된다. 문서를 읽어보면 보내줄 데이터가 없을 때 사용한다고 되어있는데, 주로 예를 드는게 404를 리턴해주어야 할 때이다. 그리고 res.json()을 쓰나 res.send()를 쓰나 응답을 종료해주는 역할은 하기 때문에 굳이 명시적으로 표시해줄 필요는 없다.

15. logout

```
// 모든 세션 정보, 쿠기 정보들을 삭제시켜주는 함수다.
router.get("/logout", (req, res) => {
    req.logout((err) => {
        if (err) {
            console.log("logout failed!");
            console.log(err);
        }

        console.log("logOuted!");
    });
    res.redirect("back");
});
```

16. jest

https://inpa.tistory.com/entry/JEST-%F0%9F%93%9A-jest-%EB%AC%B8%EB%B2%95-%EC%A0%95%EB%A6%AC

17. ejs, res.render()

Node.js는 서버 사이드 자바스크립트를 구현할 수 있는 도구이며, EJS는 Node.js에서 사용되는 템플릿 엔진 중 하나입니다. EJS는 Embedded JavaScript Templates의 약어로, HTML 템플릿을 사용할 수 있어 웹 개발에 효과적입니다.

EJS는 HTML과 유사한 문법을 사용합니다. HTML 템플릿 안에 <% %>와 같은 EJS 태그를 사용하여 서버 측 로직을 작성할 수 있습니다. EJS는 JavaScript 코드를 사용하여 동적 콘텐츠를 생성할 수 있기 때문에, 클라이언트와 서버 사이드에서 동일한 코드를 사용할 수 있어서 유지 보수가 용이합니다.

## 사용법

EJS를 사용하면 변수를 선언하고, 조건문과 반복문을 작성할 수 있습니다. 이를 통해 HTML 코드를 반복적으로 작성하지 않고도 동적 콘텐츠를 생성할 수 있습니다. 예를 들어, EJS를 사용하여 다음과 같이 반복문을 작성할 수 있습니다.

```jsx
<ul>
    <% for(var i=0; i<fruits.length; i++) { %>
    <li><%= fruits[i] %></li>
    <% } %>
</ul>
```

위 코드에서는 fruits 배열의 모든 요소를 리스트로 출력합니다. EJS는 <%= %> 태그를 사용하여 변수를 출력합니다. 이를 통해 서버 측 데이터를 HTML 코드와 결합하여 동적으로 생성된 콘텐츠를 출력할 수 있습니다.

또한 EJS는 include 문을 사용하여 템플릿을 포함시킬 수 있습니다. 이를 통해 코드의 재사용성을 높일 수 있습니다. 예를 들어, 다음과 같이 템플릿 파일을 생성할 수 있습니다.

```jsx
*<!-- header.ejs -->*<header>
        <h1><%= title %></h1>
        <nav>
            <ul>
                <li><a href="#">Home</a></li>
                <li><a href="#">About</a></li>
                <li><a href="#">Contact</a></li>
            </ul>
    	</nav>
</header>
```

```jsx
*<!-- index.ejs -->*<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    <title><%= title %></title>
</head>
<body>
    <% include header %>
    <h2>Welcome to my site!</h2>
</body>
</html>
```

위 코드에서는 include 문을 사용하여 header.ejs 파일을 포함시켰습니다. 이를 통해 index.ejs 파일에서 중복 코드를 제거하고 코드의 가독성과 유지 보수성을 높일 수 있습니다.

ejs에서 JaveScript를 활용하는 방법은 다음과 같다.

- **<%= a %> : a라는 변수 출력**
- **<% JS 코드 %> : JavaScript 코드 실행**

---

Node.js에서, 서버를 담당하는 entry point는 웹앱의 두뇌라고 할 수 있다.

그리고 그 js파일 상의 로직으로 인해 변경되는 값을 HTML로 즉각 쏴주는 것이 EJS다.

이때 entry point -> EJS로 데이터를 전송하는 역할을 하는 함수가 render() 함수이다.

만약 EJS를 사용하지 않고 기본적인 HTML만을 사용한다면,

클라이언트로부터 온 request에 대한 response를 일일이 send 또는 sendFile 해야할 것이다.

하지만 EJS는 기존 HTML코드와 JavaScript코드의 공존을 통해 효율적인 개발을 도와준다.

```jsx
const express = require("express");

const bodyParser = request("body-parser");

const app = express();

app.use(bodyParser.urlencoded({extended: true}));

app.post("/", function(req, res) {
	const userInput = req.body.todo;
	res.render("todo", {newList: userInput});
}
```

18. ejs에 css 파일 연동시키는 방법. css, js파일 html에 연동시키는 방법



19. jquery, 



