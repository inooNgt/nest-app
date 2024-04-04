import "reflect-metadata";
import { DataSource } from "typeorm";
import { User } from "./entity/user.entity";
import { Post } from "./entity/post.entity";
import { dbconfig } from './config/index';
// DataSource config: https://www.typeorm.org/data-source
export const AppDataSource = new DataSource({
    type: "mysql",
    ...dbconfig,
    synchronize: true,
    logging: false,
    entities: [User,Post],
    migrations: [],
    subscribers: [],
})
