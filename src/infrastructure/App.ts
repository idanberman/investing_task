import { createConnection } from "typeorm";
import { MysqlConnectionOptions } from "typeorm/driver/mysql/MysqlConnectionOptions";
import CONFIG from "../config/config";
import { TypeormUserInstrumentRepository } from "./repositories/TypeormUserInstrumentRepository";
import { ExpressServer } from "./server/ExpressServer";

export class App {
  public server: ExpressServer;
  public config: { db: MysqlConnectionOptions; port: string };
  private db;
  public repositories: any;

  constructor() {
    this.config = {
      port: CONFIG.port,
      db: {
        ...CONFIG.db,
        type: (CONFIG.db.type as any) as "mariadb",
        entities: [],
      },
    };

    this.repositories.userInstrumentRepository = () =>
      new TypeormUserInstrumentRepository();
  }

  public async run() {
    this.db = await createConnection(this.config.db);
    this.server = new ExpressServer(this);

    await this.run();
  }
}
