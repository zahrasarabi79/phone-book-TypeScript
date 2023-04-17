import { DataTypes } from "sequelize";
export interface Ibook {
  name: string;
  columns: columns;
  conf:object;
  
}
interface columns{
  name:object; 
  phone:object;
}

const book:Ibook = {
  name: "books",
  columns: {
    name: {
      type: DataTypes.STRING,
      unique: true,
    },
    phone: {
      type: DataTypes.STRING,
    },
  },
  conf: {
    timestamps: false,
  },
};


const spre = { book };
// console.log(spre);
export default{ ...book };
