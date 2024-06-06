import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export class CreateSessions1717591076537 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'sessions',
        columns: [
          {
            name: 'id',
            type: 'integer',
            isPrimary: true,
            generationStrategy: 'increment',
          },
          {
            name: 'room',
            type: 'varchar',
          },
          {
            name: 'capacity',
            type: 'integer',
          },
          {
            name: 'day',
            type: 'date',
          },
          {
            name: 'time',
            type: 'varchar',
          },
          {
            name: 'movie_id',
            type: 'integer',
          },
        ],
      }),
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('sessions');
  }
}
