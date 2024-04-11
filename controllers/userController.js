const fs = require("fs");
const path = require("path");
const csv = require("csv-parser");
const { user } = require("../model/userModel");
const { userSchema } = require("../schemas/userSchemas");

/**
 * Import The User Data from file.
 *
 * @param {Object} req - The HTTP request Object
 * @param {Object} res - The response object to send JSON format.
 * @return {File} - A CSV file of the Product table.
 */
const import_data = async (req, res) => {
  try {
    const { file } = req.query;

    if (!file) {
      return res.status(400).json({
        msg: "Please provide the filename to import.",
      });
    }

    const fileName = path.join(__dirname, "..", file);
    const results = [];

    fs.createReadStream(fileName)
      .pipe(csv())
      .on("data", (data) => {
        const result = userSchema.validate({
          Name: data.Name,
          Email: data.Email,
          Mobile: data.Mobile,
          Gender: data.Gender,
          DOB: data.DOB,
        });

        if (result.error) {
          const errorMessage = result.error.details[0].message;
          return res.status(200).json({ error: errorMessage, data });
        }
        results.push(data);
      })

      .on("error", async () => {
        return res.status(500).json({
          msg: "Something Went Wrong.",
          error: error.message,
        });
      })
      .on("end", async () => {
        if (!res.headersSent) {
          await user.bulkCreate(results, { ignoreDuplicates: true });
          res.status(200).json({ msg: "Data imported successfully." });
        }
      });
  } catch (error) {
    return res.status(500).json({
      msg: "Error importing data. Please check the file and try again.",
      error: error.message,
    });
  }
};

/**
 * Update User.
 *
 * @param {Object} req -  The Request Object
 * @param {Object} res - A JSON response indicating success or failure based on validation.
 * @param {string} req.body.id - The Edit user id..
 * @param {string} req.body.Name - The Name of the user.
 * @param {string} req.body.Email - The Email of the user.
 * @param {string} req.body.Mobile - The Mobile of the user.
 * @param {string} req.body.Gender - The Gender of the user.
 * @param {string} req.body.DOB - The DOB of the user.
 * @return {Object} - User Details.
 */
const edit_user = async (req, res) => {
  const userToUpdate = req.params.id;
  const { Name, Email, Mobile, Gender, DOB } = req.body;

  if (!Name && !Email && !Mobile && !Gender && !DOB) {
    return res.status(400).json({
      message:
        "Please Enter At Least One Field: Name, Email ,Mobile, Gender, DOB",
    });
  }

  if (!userToUpdate) {
    return res.status(400).json({
      message: "Provide a User ID",
    });
  }

  try {
    const updateUser = await user.findOne({
      where: {
        id: userToUpdate,
      },
    });

    if (!updateUser) {
      return res.status(404).json({
        message: "User Does not Exist",
      });
    }

    if (Name) {
      const nameValidationResult = userSchema.validate({
        Name: Name,
      });
      if (nameValidationResult.error) {
        const nameValidateError = nameValidationResult.error.details[0].message;
        return res.status(400).json({
          message: nameValidateError,
        });
      }
      updateUser.Name = Name;
    }

    if (Email) {
      const isEmailExist = await user.findOne({
        where: {
          Email: Email,
        },
      });

      if (isEmailExist) {
        return res.status(400).json({
          msg: "Email is already Exists.",
        });
      }
      const emailValidationResult = userSchema.validate({
        Email: Email,
      });
      if (emailValidationResult.error) {
        const emailValidateError =
          emailValidationResult.error.details[0].message;
        return res.status(400).json({
          message: emailValidateError,
        });
      }
      updateUser.Email = Email;
    }

    if (Mobile) {
      const mobileValidationResult = userSchema.validate({
        Mobile: Mobile,
      });
      if (mobileValidationResult.error) {
        const mobileValidateError =
          mobileValidationResult.error.details[0].message;
        return res.status(400).json({
          message: mobileValidateError,
        });
      }
      updateUser.Mobile = Mobile;
    }

    if (Gender) {
      const genderValidationResult = userSchema.validate({
        Email: Email,
      });
      if (genderValidationResult.error) {
        const genderValidateError =
          genderValidationResult.error.details[0].message;
        return res.status(400).json({
          message: genderValidateError,
        });
      }
      updateUser.Gender = Gender;
    }

    if (DOB) {
      const dobValidationResult = userSchema.validate({
        Email: Email,
      });
      if (dobValidationResult.error) {
        const dobValidateError = dobValidationResult.error.details[0].message;
        return res.status(400).json({
          message: dobValidateError,
        });
      }
      updateUser.DOB = DOB;
    }
    await updateUser.save();
    return res.status(200).json({
      message: "User Updated",
      User: updateUser,
    });
  } catch (error) {
    if (error.name) {
      const errorMessage = error.errors[0].message;
      return res.status(400).json({ message: errorMessage });
    } else {
      return res.status(500).json({
        message: "Something Went Wrong While Updating A user",
        error: error.message,
      });
    }
  }
};

/**
 * Deleting The User.
 *
 * @param {Object} req - The request object containing the User ID to Delete.
 * @param {Object} res - The response object to send JSON format.
 * @return {Object} - A JSON response indicating success or failure based on validation.
 */
const delete_user = async (req, res) => {
  try {
    const userToDelette = req.params.id;
    const deleteUser = await user.findOne({
      where: {
        id: userToDelette,
      },
    });
    if (!deleteUser) {
      return res.status(404).json({
        message: "User does not exist",
      });
    }
    await deleteUser.destroy();
    return res.status(200).json({
      message: "User deleted successfully",
      deleteUser,
    });
  } catch (error) {
    return res.status(500).json({
      message: "Something Went Wrong While Deleting A User",
      error: error.message,
    });
  }
};

module.exports = {
  import_data,
  edit_user,
  delete_user,
};
