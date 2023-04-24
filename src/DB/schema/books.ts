import { Table, Column, Model } from "sequelize-typescript";

export interface IBook{
  name:string,
  phone:string
}
//@table : در این جا دکورتور فانکشن که پرانتزش توی تی اس کانفیگ برداشته شده 
@Table({
  timestamps:false
})
export default class Books extends Model<IBook> {
  @Column
  name!: string;//علامت سوال به معنی پر کردن اجباری این ستون است 

  @Column
  phone!: Date;
}