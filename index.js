import dotenv from "dotenv"; // dotenv 모듈 임포트

dotenv.config(); // dotenv 설정 불러오기

import { app } from "./src/app";

const PORT = process.env.SERVER_PORT || 5000;

app.listen(PORT, () => {
  console.log(`정상적으로 서버를 시작하였습니다.  http://localhost:${PORT}`);
});
