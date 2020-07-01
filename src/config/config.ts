import * as dotenv from "dotenv";
import { DatabaseType } from "typeorm";
dotenv.config();

export default {
  port: process.env.PORT || "3000",

  // DB_HOST: process.env.DB_HOST || 'mongodb://localhost:27017/example_db',
  // DB_NAME: process.env.DB_NAME || 'example_db',
  // DB_PASSWORD: process.env.DB_PASSWORD || 'db-password',
  // DB_PORT: process.env.DB_PORT || '27017',
  // DB_USER: process.env.DB_USER || 'root',

  // JWT_ENCRYPTION: process.env.JWT_ENCRYPTION || 'jwt_please_change',
  // JWT_EXPIRATION: process.env.JWT_EXPIRATION || '1h',
  // SALT_ROUNDS: process.env.SALT_ROUNDS || 10
  db: {
    type: "mariadb",
    host: "localhost",
    port: 3306,
    username: "test",
    password: "test",
    database: "test",
    synchronize: true,
  },
};
