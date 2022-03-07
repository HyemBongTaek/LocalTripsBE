import { sequelize } from "./models/sequelize";

export default async function () {
  try {
    await sequelize.sync({ force: false });
    console.log("✅ DB 연결 성공");
  } catch (error) {
    console.log("❗ DB 연결 실패");
    console.error(error);
  }
}
