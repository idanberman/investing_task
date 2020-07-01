import * as bodyParser from "body-parser";
import * as cors from "cors";
import * as express from "express";
import * as helmet from "helmet";
import * as morgan from "morgan";
import { ConnectionOptions, createConnection, DatabaseType } from "typeorm";
import { MysqlConnectionOptions } from "typeorm/driver/mysql/MysqlConnectionOptions";
import * as errorHandler from "./server/errorHandler";

export class ExpressServer {
  app: App;
  express: any;

  constructor(app: App) {
    this.app = app;

    this.express = express();
    this.setMiddlewares();
    this.setRoutes();
    this.catchErrors();
  }

  public async start(): Promise<void> {
    await new Promise((resolve, reject) => {
      this.express.listen(Number(this.app.config.port), (err) => {
        if (err) {
          console.log(err);
          return reject();
        }

        console.log(`Server is listening on ${this.app.config.port}`);
        resolve();
      });
    });
  }

  private setMiddlewares(): void {
    this.express.use(cors());
    this.express.use(morgan("dev"));
    this.express.use(bodyParser.json());
    this.express.use(bodyParser.urlencoded({ extended: false }));
    this.express.use(helmet());
  }

  private setRoutes(): void {
    this.express.use("/v1", Routes);
  }

  private catchErrors(): void {
    this.express.use(errorHandler.notFound);
    this.express.use(errorHandler.internalServerError);
  }
}
import { App } from "../App";

export default Routes;
