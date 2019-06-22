import { Table, Column, Model, HasMany } from 'sequelize-typescript';
import { User } from './user.model'
import { Job } from './job.model';
@Table({timestamps: true})
export class Company extends Model<Company> {

  @Column({primaryKey: true, autoIncrement: true})
  id: number;

  @Column
  name: string;

  @HasMany(() => User)
  users: User[];

  @HasMany(() => Job)
  jobs: Job[];
}