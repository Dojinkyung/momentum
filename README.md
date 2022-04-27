# momentum
노마드 코더 클론 코딩입니다
크롬의 모멘텀 앱을 클론코딩 하였습니다.

실시간으로 시간, 날짜를 표시하고 이름과 todo를 입력받아 저장합니다.

## 사용 언어: HTML CSS JAVASCRIPT
![image](https://user-images.githubusercontent.com/63532503/165509683-aa719128-b996-48e0-aff5-c905037581a1.png)
 


# background.js
배경화면으로 사용해줄 이미지들을 배열에 담고 배열에서 랜덤으로 선택한다
```
const chosenImg=img[Math.floor(Math.random()*img.length)];
```

# clock.js
```
const date=new Date();
setInterval(time,1000);
```
를 이용하여 실시간 시간 정보를 불러온다.
setInterval을 이용하여 1초마다 불러온다.

# geolocation.js
position과 Open Weather Map Api를 이용하여 사용자의 위치와 날씨를 받아와 출력해준다.

# login.js
localStorage에 이름을 저장한한다. 
새로 들어왔을 때 localStorage에 이름이 있다면 input을 숨기고 hello!'username'을 표기한다.
# todo.js
localStorage에 입력받은 Todo와 id값으로 시간을 받아와 리스트 안에서 todo를 구반한다.
구분한 todo를 버튼을 사용하여 삭제할 수 있다.
