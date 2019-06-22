import { Table, Column, Model, BelongsTo, ForeignKey } from 'sequelize-typescript';
import { Company } from './company.model'
@Table({timestamps: true})
export class Job extends Model<Company> {

  @Column({primaryKey: true, autoIncrement: true})
  id: number;

  @Column
  name: string;

  @ForeignKey(() => Company)
  @Column
  companyId: number;

  @BelongsTo(() => Company)
  company: Company;
}