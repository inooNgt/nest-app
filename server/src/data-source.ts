import "reflect-metadata";
import { DataSource } from "typeorm";
import { User,Post,Exercise } from "./entity/index";
import { dbconfig } from './config/index';
// DataSource config: https://www.typeorm.org/data-source
export const AppDataSource = new DataSource({
    type: "mysql",
    ...dbconfig,
    synchronize: true,
    logging: false,
    entities: [User,Post,Exercise],
    migrations: [],
    subscribers: [],
})
