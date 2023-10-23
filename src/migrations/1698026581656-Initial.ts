import { MigrationInterface, QueryRunner } from "typeorm"

export class Initial1698026581656 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        /*
        * await queryRunner.query(`ALTER TABLE "coffee" RENAMR COLUMNS "name" TO "title"`)
        * */
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        /*
* await queryRunner.query(`ALTER TABLE "coffee" RENAMR COLUMNS "title" TO "name"`)
* */
    }


    // Para generar una migration automticamente
    /*
    * Tenemos que agregar las entities en el archivo typeorm-cli.config.ts
    *
    * y despues correr los siguientes comandos
    *
    * npm run build
    *
    * npx typeorm migration:generate src/migrations/SchemaSync -d dist/typeorm-cli.config
    *
    * para aplicar una migration:
    * npx typeorm migration:run -d dist/typeorm-cli.config
    * */

}
