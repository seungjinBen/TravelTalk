## Nodejs-Express + mySQL -> ejs파일을 통해 구글 마커 적용
* 구글맵 api를 이용하여 파리의 지도를 표시하였다.
  - 구글 맵에 마커(주요 장소)를 표시, 클릭시 동적 이동.
    + https://developers.google.com/maps/documentation/javascript/adding-a-google-map?hl=ko
* MySQL에 travel테이블을 생성하고, 장소에 대한 데이터를 삽입하였다.
* nodejs를 설치, atom을 통해 실행하는 법을 익혔다.
* 자바스크립트의 반복문과 배열을 이용해 글목록을 출력하였다.
  - fs.readdir()함수 이용, 파일을 추가시 html코드를 수정할 필요가 없음.
* https://opentutorials.org/course/3332/21128
* 글생성 UI를 만들고 이를 통해 post형식으로 정보를 전달받았다.
  - request.on()함수 이용, parse()함수를 통해 정보를 객체화
* 파일과 파일 내용을 수정, 삭제하는 법에 대하여 익혔다.
  - fs.rename(oldPath, newPath, callback)
  - fs.unlink(path, callback)
* https://opentutorials.org/course/3332/21143
* 모듈의 형식에 대해 알고 이를 적용해보았다.
  - module.exports 와 require()
* Nodejs 와 mysql 연동시 오류를 수정하였다.
  - https://lifeinprogram.tistory.com/22
* mysql에서 정보를 받아오는 함수와 구글맵에 마커표시를 하는 함수가 함께 실행 X
  - 서칭 결과, express와 ejs를 통해 해결 가능.
* express로 페이지를 띄우고 GET과 POST 함수 사용법을 익혔다.
  - https://peamexx.tistory.com/118
* 4일간 꼬박 붙들어맨 끝에 rows에 담긴 값을 ejs에 전달하고 화면에 뿌릴 수 있게 되었다.
* object타입인 list를 array로 바꾸어 함수를 적용할 수 있게 하였다.
* 드디어 mysql에서 받아온 데이터들을 구글마커에 완벽하게 적용할 수 있게 되었다.

## 54개의 장소 종류별 출력(조건문), 사이드바
* node환경에서 ejs파일에 css가 적용되지 않는 오류를 해결하였다.
  - app.use(express.static('paris'))를 통해 정적파일을 사용 가능.
* 그대로 조건문을 적용해 카테고리 출력을 하려고 한다.
  - 이전에 출력된 장소들을 지우는 코드를 작성하려고 한다.
    + 가까스로 적용했으나 다음으로 해당 카테고리 장소가 출력되어야 하는데 그렇지 않는다.
* initMap()를 밖에서 선언 후 호출 하니 잘 되었다. 또, 이전 장소들을 굳이 지울 필요가 없어도 의도대로 잘 출력된다.
  - 카테고리 별 장소 출력 O
* 카테고리 별 마커 이미지는 보기에 너무 조잡할 것 같아 일단 미룬다.
* 무작정 경로를 mysql에 삽입하면 된다고 생각하였는데, 이미지를 불러올때 있어 어려움에 부딪히게 되었다.
  - 하루종일 매달린 구글링 끝에 mysql의 blob를 사용하지 않고, 이미지서버를 따로 구축하여 경로만을 저장하기로 결정하였다.
    + 이미지서버를 따로 구축하지 않고 개인 블로그에 올린 후 이미지 경로를 저장하기로 하였다.
    + 나중에 사용자가 사진을 업로드하는 기능이 생긴다면 Nodejs를 이용하여 이미지서버를 따로 만들 것이다.
* 내가 파리에서 직접 가서 찍은 총 54개의 장소 이미지, 좌표를 mysql에 삽입하였다.
  - 베르사유궁전은 뒤에서 어떻게 처리해서 넣을지 고민해볼 것이다.
* mouseover이벤트와 click이벤트를 통해 마커표시를 사용자가 이용하기 쉽게 바꾸어보았다.
  - 마커에 click이벤트 발생시 사이드바에 해당 장소의 이미지와 설명, 관련회화를 넣어보려한다.

## express를 통해 필수 기능들 구현
* 해당 장소 클릭시 이미지를 불러왔다.
* location.href의 get방식을 이용하여 parameter값을 전달해주었다.
  - id값을 전달하여 상세 정보를 볼 수 있게 하였다.
* id태그와 innerText를 통해 클릭시 장소의 값과 정보를 전달해주었다.
  - 장소 정보와 관련 회화는 따로 mysql에 삽입해줄 예정이다.
* 장소타입에 따라 문장리스트, 대화창을 구현하였다.
* 마커 이미지를 적용하고 css정리를 하였다.
  - 배경 없앨 시 https://www.remove.bg/ko 사용

## 다음 계획
* 한글로 시작하고 마우스오버시 영어로 바뀌게 구현할 예정이다.
* 버튼 클릭시 다음 이미지가 보이는 것을 구현할 예정이다.
* 장소에 대한 설명, 관련회화를 mysql에 삽입해야한다.
* 배열로 장소타입에 맞는 문장리스트를 저장해야한다.
* 이미지가 4개이하일때 값을 6까지 증가하는 오류를 수정해야한다.
  - https://ljtaek2.tistory.com/148
* React를 통한 SPA방식 변환 예정 
  - https://www.youtube.com/watch?v=s54r4nRhf8Y&list=LL&index=3
