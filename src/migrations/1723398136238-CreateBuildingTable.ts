import { MigrationInterface, QueryRunner } from 'typeorm';

export class CreateBuildingTable1682859312453 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`
            CREATE TABLE "building" (
                "id" SERIAL NOT NULL,
                "building" character varying NOT NULL,
                "location_name" character varying NOT NULL,
                "location_number" character varying NOT NULL,
                "area" double precision NOT NULL,
                CONSTRAINT "PK_d72ea127f30e21753c9e229891e" PRIMARY KEY ("id")
            )
        `);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`DROP TABLE "building"`);
  }
}
