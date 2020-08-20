# First-heroku
### 처음으로 node.js,express,api,heroku를 이용해서 웹페이지를 만들고 서버 연동까지 해봤다. 너무 신난다!
### Udemy Web development Section 20을 들으면서 진행했습니다.

# Heroku 서버 연동하기

- 서버를 24시간 임대해서 사용할 수 있다.
- 사이트 이용자가 너무 많아져 확장해야 하지 않는 이상 무료로 사용할 수 있다.

### Heroku 회원가입하기

- [link]([https://www.heroku.com](https://heroku.com/)) 을 들어가서 회원가입을 한다. 그 뒤에 get started의 순서대로 따라가면 된다. 아래 순서대로 설명해줄 것이다.

### Heroku 로그인하기

```jsx
$heroku login     // 루트 디렉토리에서 CLI를 이용해서 입력한다.
```

### 포트설정

```jsx
// 서버포트를 heroku에서 주는 포트와 로컬에서 사용할 3000 포트 둘다 적어서 사용한다.
app.listen(process.env.PORT || 3000, function () {
  console.log(`Server is running on port ${port}...`);
});
```

### Procfile 설정

```jsx
// 루트폴더에 Procfile 을 만들고
$touch Procfile

// 안에 정해진 형식에 따라 본인의 서버 파일이름을 넣는다.
web: node app.js 
```

 

### git 연동하기

```jsx
$git init
$git add .
$git commit -m "first heroku server"
```

### 앱 배포하기

```jsx
$heroku create       // 새로운 앱을 생성한다.
										 // heroku에서 주소를 만들어서 알려준다.
```

- 주소를 커맨드 클릭해서 들어가보면 새로운 앱에 오신 것을 환영합니다! 라고 뜨면서 컨텐츠가 없다고 할 것이다. 이어서 진행하겠다.

```jsx
$git push heroku master     // master 버전을 올린다.
```

- 그 뒤에 아까 들어갔던 주소로 들어가면 애플리케이션 에러가 뜰 수도 있다.
- heroku에서 그것들 받아서 처리하는 데에 시간이 걸리기 때문에 5~10분 정도 뒤에 다시 들어가보면 로컬에서 실행했던 파일과 똑같이 실행될 것이다.

```jsx
$heroku logs  // 애플리케이션 에러가 지속될 경우 입력해서 잘못된 부분이 있는지 확인한다.
							// port 나 Procfile에 오타가 있는지도 확인해본다.
```

- 수정을 완료했다면

```jsx
$git add .
$git commit -m "(message)"
$git push heroku master
```

- 의 순서대로 다시 푸시해준다!
- 완성!
