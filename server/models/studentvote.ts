import { Model,DataTypes } from 'sequelize'
import { sequelize } from "../api/connection";



class Studentvote extends Model {
    declare studentID: string;
    declare studentvoteDate: Date;
    declare studentvoteStatus: number;
}

Studentvote.init(
  {
    studentID: {
      type: DataTypes.STRING(12),
      autoIncrement: true,
      primaryKey: true,
    },
    studentvoteDate: {
        type: DataTypes.DATE,
        allowNull: false
    },
    studentvoteStatus: {
        type: DataTypes.TINYINT,
        allowNull: false
    }
  },
  {
    tableName: 'Studentvote',
    createdAt: false,
    updatedAt: false,
    deletedAt: false,
    sequelize
  }
);
export { Studentvote }