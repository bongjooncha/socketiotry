const User = require('./user'); // 사용자 모델이 정의된 파일 경로에 맞게 수정하세요

const newUser = new User({
  name: 'John Doe', // 사용자가 이름을 입력한 경우
  token: 'someToken', // 사용자의 토큰 값
  online: false, // 온라인 상태 초기값
});

newUser.save((err) => {
  if (err) {
    console.error(err);
  } else {
    console.log('사용자가 성공적으로 저장되었습니다.');
  }
});
