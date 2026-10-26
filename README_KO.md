# K-MUYE 24 수정본 적용 안내

## 수정 내용

- 상단 메뉴와 본문에 **Book** 추가
- Amazon 책 3권 추가
- 이메일을 `kwanghun27@gmail.com`으로 변경
- Google Analytics 4 방문자 통계 연결 코드 추가

## 방문자 수 확인 설정

GitHub Pages는 정적 홈페이지이므로 사이트 파일만으로 방문자 수를 안전하게 저장할 수 없습니다. Google Analytics 4를 연결하면 소유자만 방문자 수와 방문 페이지 등을 확인할 수 있습니다.

1. `https://analytics.google.com/`에 로그인합니다.
2. 관리 → 속성 만들기 → 데이터 스트림 → 웹을 선택합니다.
3. 주소에 `https://kmuye24.com`을 입력합니다.
4. 발급된 측정 ID(예: `G-ABC1234567`)를 복사합니다.
5. `index.html`에 있는 `G-XXXXXXXXXX`를 실제 측정 ID로 바꿉니다.
6. `js/analytics.js`에서도 `G-XXXXXXXXXX`를 같은 측정 ID로 바꿉니다.
7. GitHub에 업로드한 뒤 Google Analytics의 보고서 → 실시간에서 확인합니다.

측정 ID는 공개되어도 되는 식별자입니다. 비밀번호나 비밀 API 키는 HTML 또는 JavaScript에 넣지 마세요.

## GitHub에 적용

1. ZIP 압축을 풉니다.
2. GitHub의 `kwanghun27-hub/kmuye24` 저장소를 엽니다.
3. **Add file → Upload files**를 선택합니다.
4. 압축을 푼 폴더 안의 모든 파일과 폴더를 업로드합니다. ZIP 자체를 올리면 안 됩니다.
5. 같은 이름의 기존 파일을 교체하고 **Commit changes**를 누릅니다.
6. 몇 분 뒤 `https://kmuye24.com`을 새로고침합니다.

## 최종 확인

- 상단 Book 메뉴가 보이고 책 3권으로 이동하는지
- Amazon 버튼 3개가 각각 열리는지
- Contact에 `kwanghun27@gmail.com`이 보이는지
- 휴대전화 메뉴 버튼이 작동하는지
- Google Analytics 실시간 보고서에 방문이 표시되는지
