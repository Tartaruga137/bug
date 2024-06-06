import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export class CreateMovie1717635322407 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'movies',
        columns: [
          {
            name: 'id',
            type: 'int',
            isPrimary: true,
            isGenerated: true,
            generationStrategy: 'increment',
          },
          {
            name: 'image',
            type: 'varchar',
          },
          {
            name: 'name',
            type: 'varchar',
          },
          {
            name: 'description',
            type: 'text',
          },
          {
            name: 'actors',
            type: 'varchar',
            isArray: true,
          },
          {
            name: 'genre',
            type: 'varchar',
          },
          {
            name: 'release_date',
            type: 'date',
          },
        ],
      }),
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('movies');
  }
}
