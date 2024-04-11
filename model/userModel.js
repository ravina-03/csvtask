const { DataTypes } = require("sequelize");
const { sequelize } = require("../config/db");

/**
 * User model.
 *
 * @typedef {object} - user
 * @property {number} id - The unique identifier for the user.
 * @property {string} Name - The Name of the user.
 * @property {string} Email - The Email of the user.
 * @property {string} Mobile - The Mobile of the user.
 * @property {string} Gender - The Gender of the user.
 * @property {string} DOB - The DOB of the user.
 */
const user = sequelize.define(
    "user",
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      Name: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          isAlpha: {
            msg: "Invlid Input. Pls Enter Only Characters For username",
          },
        },
      },
      Email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
      },
      Mobile: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      Gender: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          isIn: {
            args: [["F", "M"]],
            msg: "Please enter a valid Gender ('F', 'M').",
          },
        },
        defaultValue: "M",
      },
      DOB: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    },
    {
      
      timestamps: true,
      createdAt: true,
      updatedAt: false,

      hooks: {
        beforeValidate: (user, options) => {
          if (user.name  || user.email) {
            user.name = user.name.toLowerCase();
            user.email = user.email.toLowerCase();
          }
        },
      },
    }
  );

  module.exports = {
    user
  }