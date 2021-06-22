// import { MigrationInterface, QueryRunner } from 'typeorm';

// export class bossabox1613086011764 implements MigrationInterface {
//   name = 'bossabox1613086011764';

//   public async up(queryRunner: QueryRunner): Promise<void> {
//     await queryRunner.query(
//       `CREATE TABLE "users" ("id" SERIAL NOT NULL, "email" character varying NOT NULL, "password" character varying NOT NULL, "created_at" TIMESTAMP NOT NULL DEFAULT now(), "updated_at" TIMESTAMP NOT NULL DEFAULT now(), CONSTRAINT "PK_a3ffb1c0c8416b9fc6f907b7433" PRIMARY KEY ("id"))`,
//     );
//     await queryRunner.query(
//       `CREATE TABLE "tools" ("id" SERIAL NOT NULL, "title" character varying NOT NULL, "link" character varying NOT NULL, "description" character varying NOT NULL, "tags" text array NOT NULL, "created_at" TIMESTAMP NOT NULL DEFAULT now(), "updated_at" TIMESTAMP NOT NULL DEFAULT now(), CONSTRAINT "PK_e23d56734caad471277bad8bf85" PRIMARY KEY ("id"))`,
//     );
//   }

//   public async down(queryRunner: QueryRunner): Promise<void> {
//     await queryRunner.query(`DROP TABLE "tools"`);
//     await queryRunner.query(`DROP TABLE "users"`);
//   }
// }
