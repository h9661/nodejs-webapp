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
- [x] 로그인 실패시 실패 문구 로그인 페이지에 나오게 하기
- [x] signin/signout 분리
- [x] signin 실패시 왜 실패했는지 보여주기
- [x] signup 실패시 왜 실패했는지 보여주기
- [x] main page bootstrap으로 더 이쁘게? 만들어보고 grocery들을 출력하게 만들자.
- [x] main page에서 logout 기능을 만들었다.
- [x] grocery를 html page에서 만들 수 있게 하자.(이미지도 등록 가능하게.)
- [x] main page에 나오는 grocery들을 이미지 포함하여 출력하게 하자. (데이터베이스에서 이미지를 저장해야 한다.) <- 권장되지 않는다고 한다. 서버에 이미지를 저장하는 것이 더 좋다고 함. 그래서 그렇게 했음.
- [x] edit grocery, 사진 바꾸는 것도 만들었음. 미리보기도 만들음.
- [ ] cart grocery
- [x] delete grocery 등록한 사진 정보도 같이 제거해야 한다.
- [x] groceries를 유저 한명 한명이 갖고 있게 하고싶다. 어떻게 하는지 공부하고 수정하자. 보니까 nosql은 cascade가 없고 join이 없어서 js로 해줘야 하는데 이러면 엄청 느리다고 한다. nosql의 한계이다. 따라서 참조의 방식이 아닌 유저마다 groceries 배열을 들고 가게 해야한다.
- [x] groceries item으로 실시간 동적 검색?? 하는 기능도 만들어보고 싶다. 공부하고 넣어보자. 생각해봤는데, 문자를 넣을 때마다 계속해서 검색을 반복하면 될 것 같다. 이거 말고 enter누르면 검색되게 하자. 성능상 이게 훨씬 좋을 것 같다.
- [x] option으로 filter하는 기능 넣기.
- [ ] ui를 당근마켓 느낌으로다가 하면 괜찮을 것 같다.
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
css 파일은 연동하는 법을 찾았따. js 파일 연동하는 방법은 어떻게 할까? include로 가져올 수 있다고 했는데 jquery가 사용된 문법도 같이 하기엔 조금 그렇다. 그냥 파일 내에 쓰는 것이 지금으로서는 최선이라고 생각한다.

https://aspiring-branch-353.notion.site/ejs-1635ac5b2f67434b8ca50298d18310b6?pvs=4

19. jquery, 

jquery를 좀 써봤는데, 정리할정도로 중요한 내용은 아닌 것 같다. 필요할 때만 찾아서 쓰면 될 것 같다.

20. bootstrap

https://inpa.tistory.com/category/Style%20Sheet/Bootstrap5

21. css

https://inpa.tistory.com/category/Style%20Sheet/CSS

22. multer

https://aspiring-branch-353.notion.site/multer-162ff6bf3d084dfcaeb9510e0ce0f548?pvs=4

23. multipart-data

https://aspiring-branch-353.notion.site/http-multipart-form-data-4335952053764214a7611f0bcbdb08bf?pvs=4

24. http get은 body를 보낼 수 없다. query parameter를 통해 데이터를 전달해야 한다.

https://aspiring-branch-353.notion.site/http-get-post-body-query-76fe47a287de4561867a7892ebe2652d?pvs=4

25. mulipart-data로 form에서 전송하면 json이 아니라서 body에 담기지 않는다. 다른 미들웨어로 먼저 처리하던 json으로 전송하던 해야한다.

26. nosql과 rds의 차이. nosql은 cascade가 없어서 참조로 하면 하나 바꾸면 다 일일이 찾아서 바꿔줘야 한다고 한다. ㅋㅋㅋㅋ mysql 썼엇을 때는 외래키 참조해서 cascade 방식으로 하면 하나 바꾸면 다 바뀌는데 말이다. 정말 엄청나게 큰 차이다. 따라서 nosql은 데이터의 양이 막대하지만 데이터의 삭제나 수정이 잘 일어나지 않는 곳에 적합하고 rds는 수정 삭제가 자주 일어나는(외래키 참조가 많은) db에서 효과적이라고 생각할 수 있겠다.

27. ejs파일은 express.static으로 설정이 안되었다. ejs는 할 수 없는 것인가? 찾아보고 정리해야겠다.
-> 절대경로로 안해서 오류가 난 것 같다. 앞에 __dirname을 붙혀서 절대경로로 사용해야 겠다.

28. 왜인지 moongose의 Map타입은 사용이 안된다. 왜인지 모르겠다. 이 부분 알아볼라고 검색해봤는데 딱히 안나온다..

29. img 태그에서 src를 express.static을 이용하여 불러올 수 있다.

```jsx
app.use("/images", express.static("/uploads/images"));

<img src="/images/<%= groceries[i].imageURL %>" class="img-fluid rounded-top" width="100%" height="3%" alt="">
```

30. ejs 파일 어디에서나 `<%= 변수명 >`으로 렌더링 가능하다.

31. `input`태그로 불러온 이미지를 js로 손쉽게 출력 가능하다. 간단한 이벤트를 등록해주면 된다.

```jsx
  <script>
    const imageInput = document.getElementById("imageInput");
    const previewImage = document.getElementById("previewImage");
    imageInput.addEventListener('change', (e) => {
        const selectedImage = e.target.files[0];
        if(selectedImage){
            previewImage.src = URL.createObjectURL(selectedImage);
        }else{
            previewImage.src = "#";
        }
    })
  </script>
```

createObjectURL이 뭔지 모르니 한번 찾아보자.

URL.createObjectURL() 함수는 웹 플랫폼에서 사용되는 JavaScript 함수로, `브라우저 메모리에서 사용 가능한 Blob, File, MediaSource 또는 다른 미디어 리소스를 가리키는 고유한 URL을 생성`합니다. `이 함수를 사용하면 이러한 리소스를 브라우저에서 직접 다룰 수 있도록 URL로 접근할 수 있습니다.`

이 함수의 일반적인 사용 사례 중 하나는 `이미지, 오디오, 비디오 등의 미디어 파일을 로드하거나 미리보기를 제공할 때 사용`됩니다.

예를 들어, 다음은 URL.createObjectURL() 함수를 사용하여 선택한 파일의 미리보기 이미지를 생성하는 간단한 예제입니다:

```jsx
<input type="file" id="fileInput">
<img id="previewImage" src="" alt="Preview Image" style="max-width: 100%;">

<script>
  const fileInput = document.getElementById('fileInput');
  const previewImage = document.getElementById('previewImage');

  fileInput.addEventListener('change', (event) => {
    const selectedFile = event.target.files[0];
    if (selectedFile) {
      const objectURL = URL.createObjectURL(selectedFile);
      previewImage.src = objectURL;
    }
  });
</script>
```

위의 코드에서 fileInput 요소의 change 이벤트가 발생하면 선택한 파일을 읽어서 `URL.createObjectURL()` 함수를 사용하여 Blob URL을 생성하고, 생성된 URL을 previewImage 요소의 src 속성에 할당하여 이미지를 표시합니다.

`URL.createObjectURL()` 함수를 사용하면 임시로 URL을 생성하여 브라우저 메모리 내에서 관리되는 리소스에 접근할 수 있게 됩니다. 사용이 끝난 후에는 `URL.revokeObjectURL() `함수를 사용하여 생성된 URL을 해제하여 메모리 누수를 방지해야 합니다.

32. 스키마가 스키마 배열을 갖게 하는 방법

```jsx
const UserSchema = new mongoose.Schema({
    username: {
        type: mongoose.SchemaTypes.String,
        required: true,
        unique: true,
    },
    password: {
        type: mongoose.SchemaTypes.String,
        required: true,
    },
    email: {
        type: mongoose.SchemaTypes.String,
        required: true,
    },
    createdAt: {
        type: mongoose.SchemaTypes.Date,
        required: true,
        default: new Date(),
    },
    groceries: [GrocerySchema],
});
```

33. 스키마의 프로퍼티가 스키마 배열일 경우 그것의 요소를 삽입/삭제/수정 하는 법
```jsx
// insert
await User.findOneAndUpdate(
    { _id: new ObjectId(userId) },
    { $push: { groceries: newGrocery } }
);

// delete
await User.findOneAndUpdate(
    { _id: new ObjectId(userId) },
    { $pull: { groceries: { _id: new ObjectId(groceryId) } } }
);

// update
// update 부분에서 의문점. groceries.$의 의미는 무엇일까?
await User.findOneAndUpdate(
    { _id: new ObjectId(userId), "groceries._id": new ObjectId(id) },
    {
        $set: {
            "groceries.$": {
                item: item,
                quantity: quantity,
                category: category,
                imageURL: req.file.filename,
            },
        },
    }
);
```
찾아보니까 그냥 그 배열의 해당되는 요소를 의미하는 것 같다.
```jsx
groceries.$는 MongoDB에서 사용되는 특별한 문법 중 하나로, 배열 내의 특정 요소를 업데이트하거나 참조할 때 사용됩니다. MongoDB의 $ 연산자는 배열의 첫 번째 요소를 나타내는데, 여기서 "첫 번째"는 배열 내에서의 위치 순서를 의미합니다.

위의 코드에서 groceries.$는 groceries 배열 내의 첫 번째 요소를 나타냅니다. 해당 코드는 MongoDB의 findOneAndUpdate() 메서드를 사용하여 User 컬렉션에서 특정 사용자의 groceries 배열 내의 특정 요소를 업데이트하고 있습니다.

구체적으로 설명하자면:

{ _id: new ObjectId(userId), "groceries._id": new ObjectId(id) } 부분은 업데이트할 사용자의 _id와 groceries 배열 내에서 업데이트할 요소의 _id를 지정합니다. 즉, 특정 사용자의 특정 식료품 요소를 찾기 위한 조건을 나타냅니다.

$set 연산자는 업데이트할 필드와 값들을 지정합니다. 이 경우, "groceries.$"는 groceries 배열 내의 특정 요소를 나타내며, 해당 요소의 필드들을 업데이트합니다.

따라서 전체 코드는 특정 사용자의 groceries 배열 내에서 _id가 일치하는 특정 요소의 필드들을 업데이트하는 역할을 합니다. 이러한 코드를 실행하면 MongoDB는 해당 사용자의 groceries 배열 내에서 해당 요소를 찾아서 필드들을 새로운 값으로 업데이트합니다.
```

34. moongose로 스키마를 받아온 다음 그것으로 find, filter 등의 연산도 가능하다. 사용법은 일반적인 자바스크립트 함수와 같다.

35. ejs 파일을 모듈화하여 중복되는 코드들을 없앨 수 있다.

```jsx
<%- include("ejs파일 경로") %>
// 이렇게 하면 ejs 파일이 include 된다.
```
