const Joi = require("joi");

/**
 * Validate user details field..
 */
const userSchema = Joi.object({
  Name: Joi.string().empty().regex(/^\S*$/).message({
    "string.base": "Name must be string",
    "string.empty": "Name is not allowed to be empty",
    "string.pattern.base":
      "Spaces are not allowed in Name. Please remove them.",
    "any.required": "Name is required",
  }),

  Email: Joi.string().empty().email().regex(/^\S*$/).messages({
    "string.email": "Enter a valid email address",
    "string.empty": "Email is not allowed to be empty",
    "string.pattern.base":
      "Spaces are not allowed in email. Please remove them.",
    "any.required": "Email is required",
  }),

  Mobile: Joi.string()
    .length(10)
    .pattern(/^[0-9]+$/)
    .messages({
      "string.empty": "Mobile is not allowed to be empty",
      "string.length": "Mobile length should be 10 only.",
      "string.pattern.base":
        "Spaces are not allowed in Mobile. Please remove them.",
      "any.required": "Mobile is required!",
    }),

  Gender: Joi.string().valid("F", "M").messages({
    "string.valid": "Gender must be F or M",
    "string.base": "Gender must be a character",
    "string.empty": "Gender is not allowed to be empty",
    "string.pattern.base":
      "Spaces are not allowed in Gender. Please remove them.",
    "any.required": "Gender is required",
  }),

  DOB: Joi.string().empty().regex(/^\S*$/).message({
    "string.base": "DOB must be Character",
    "string.empty": "DOB is not allowed to be empty",
    "string.pattern.base": "Spaces are not allowed in DOB. Please remove them.",
    "any.required": "DOB is required",
  }),
});

module.exports = {
  userSchema,
};
