# 투두 리스트

DOM 조작과 이벤트 위임 활용 연습 목적의 프로젝트 👉 [Live Demo](https://hyunji-lee-dev.github.io/todolist/)

## 사용기술

- HTML+CSS
- JavaScript
- Web APIs

## 구현사항

### 아이템 추가 기능

- ➕ 버튼 클릭하거나, 엔터 키 눌러서 추가
- input value 유효성 체크 (공백 입력 시 alert)
- 리스트가 긴 경우, 아이템 추가 시 추가된 아이템으로 스크롤
- 아이템 이름이 긴 경우, 정해진 영역을 넘어가지 않게 처리

![add](https://user-images.githubusercontent.com/79075688/115319060-f4063000-a1b9-11eb-9a16-c13c9701fa93.gif)

### 아이템 버튼들 클릭 처리

|                                            ✔ 버튼으로 strike-through                                            |                                                 ➖ 버튼으로 삭제                                                 |
| :-------------------------------------------------------------------------------------------------------------: | :--------------------------------------------------------------------------------------------------------------: |
| ![check](https://user-images.githubusercontent.com/79075688/115319059-f36d9980-a1b9-11eb-9d38-4479c2f8083e.gif) | ![delete](https://user-images.githubusercontent.com/79075688/115319058-f36d9980-a1b9-11eb-848a-4bfe5e4c9d93.gif) |

### 모든 아이템 삭제 기능

🗑 버튼 클릭 시 확인 후 클리어

![clear](https://user-images.githubusercontent.com/79075688/115319056-f1a3d600-a1b9-11eb-8f47-732eb1a5ee47.gif)

### Local storage

새로고침 시 리스트 내 아이템들 유지

## 참고자료

- 드림코딩 아카데미
- MDN Web Docs
