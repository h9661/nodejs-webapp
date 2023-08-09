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
- [ ] session stores


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