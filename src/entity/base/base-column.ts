import { Column } from "typeorm";

export class BaseColumn {
  @Column({ name: "created_at" })
  createAt?: Date;

  @Column({ name: "updated_at" })
  updateAt?: Date;
}
