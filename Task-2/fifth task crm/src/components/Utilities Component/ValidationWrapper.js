import validation from "validate.js";
export default function validate(fieldName, value) {
  const constraints = {
    email: {
      presence: {
        allowEmpty: false,
        message: "^Please enter email address",
      },
      email: {
        message: "^Please enter valid email ",
      },
    },
    Ship: {
      presence: {
        allowEmpty: false,
        message: "^Required",
      },
    },
    Sold: {
      presence: {
        allowEmpty: false,
        message: "^Required",
      },
    },
    Currency: {
      presence: {
        allowEmpty: false,
        message: "^Required",
      },
    },
    plot: {
      presence: {
        allowEmpty: false,
        message: "^Please enter plot No",
      },
    },
    quotation: {
      presence: {
        allowEmpty: false,
        message: "^Please enter quotation number",
      },
    },
    Fname: {
      presence: {
        allowEmpty: false,
        message: "^Please enter email address",
      },
      Fname: {
        message: "^Please enter valid email ",
      },
    },
    password: {
      presence: {
        allowEmpty: false,
        message: "^Please enter password",
      },
    },
    confirmPassword: {
      presence: {
        allowEmpty: false,
        message: "^Please Enter confirm password",
      },
      equality: {
        attribute: "password",
        message: "^Passwords mismatch",
      },
      length: {
        maximum: 16,
        message: "password length must be between 8-16 characters",
        minimum: 8,
      },
    },
    signupPassword: {
      presence: {
        allowEmpty: false,
        message: "^Please Enter Password",
      },
      length: {
        maximum: 16,
        message: "password length must be between 8-16 characters",
        minimum: 8,
      },
    },
    confirmSignupPassword: {
      presence: {
        allowEmpty: false,
        message: "^Please enter confirm password",
      },
      equality: {
        attribute: "signupPassword",
        message: "^Passwords mismatch",
      },
    },
    fullName: {
      presence: { allowEmpty: false, message: "^Required" },

      length: {
        maximum: 50,
        message: "Length exceed, maximum 50 digits",
      },
    },
    title: {
      presence: { allowEmpty: false, message: "^Required" },

      length: {
        maximum: 50,
        message: "Length exceed, maximum 50 digits",
      },
    },
    firstName: {
      presence: { allowEmpty: false, message: "^Required" },

      length: {
        maximum: 1115,
        message: "^Length exceed, maximum 1115 digits",
      },
    },
    lastName: {
      presence: { allowEmpty: false, message: "^Required" },

      length: {
        maximum: 100,
        message: "Length exceed, maximum 100 digits",
      },
    },
    phoneNumber: {
      presence: {
        allowEmpty: false,
        message: "^Please enter valid mobile number",
      },
      format: {
        pattern: "^[0-9+]+$",
        message: "^Phone number field can only contain numbers",
      },
      length: {
        maximum: 30,
        minimum: 7,
        message: "^Not valid, minimum 7 digits required",
      },
    },
    Note1: {
      presence: {
        allowEmpty: false,
        message: "^Please enter valid Note 1 Number",
      },

      length: {
        maximum: 6,
        minimum: 6,
        message: "^Not valid, 6 characters required",
      },
    },
    Note2: {
      presence: {
        allowEmpty: false,
        message: "^Please enter valid Note 2 Number",
      },

      length: {
        maximum: 6,
        minimum: 6,
        message: "^Not valid, 6 characters required",
      },
    },
    Note3: {
      presence: {
        allowEmpty: false,
        message: "^Please enter valid Note 3 Number",
      },

      length: {
        maximum: 6,
        minimum: 6,
        message: "^Not valid, 6 characters required",
      },
    },
    VerificationNo: {
      presence: {
        allowEmpty: false,
        message: "^Please enter valid Verification No",
      },

      length: {
        maximum: 18,
        minimum: 18,
        message: "^Verification Number must be 18 digit",
      },
    },
    NumberOnly: {
      presence: {
        allowEmpty: false,
        message: "^Please Enter Quotation Number",
      },
      format: {
        pattern: "^[0-9]+$",
        message: "^This field can only contain numbers",
      },
      length: {
        maximum: 3,
        minimum: 1,
        message: "^Not valid, minimum 1 and maxiumum 3 digits required",
      },
    },
    ContactNumber: {
      presence: {
        allowEmpty: false,
        message: "^Please Enter Telephone Number",
      },
      format: {
        pattern: "^[0-9]+$",
        message: "^This field can only contain numbers",
      },
      length: {
        maximum: 11,
        minimum: 11,
        message: "^Not valid, 11 digits required",
      },
    },
    CNIC: {
      presence: {
        allowEmpty: false,
        message: "^Please enter CNIC number",
      },
      format: {
        pattern: "^[0-9]+$",
        message: "^CNIC field can only contain numbers",
      },
      length: {
        maximum: 13,
        minimum: 13,
        message: "^Not valid, 13 digits required",
      },
    },
    DOB: {
      presence: {
        allowEmpty: false,
        message: "^Please enter your Date of Birth",
      },
    },
    city: {
      presence: { allowEmpty: false, message: "^Required" },
    },
    country: {
      presence: { allowEmpty: false, message: "^Required" },
    },
    required: {
      presence: { allowEmpty: false, message: "^Required" },
    },
    comment: {
      presence: { allowEmpty: false, message: "^Required" },
    },
    amount: {
      presence: { allowEmpty: false, message: "^Required" },
    },
    date: {
      presence: { allowEmpty: false, message: "^Required" },
    },
    CommentRequired: {
      presence: { allowEmpty: false, message: "^Required" },
      length: {
        maximum: 1000,
        minimum: 150,
        message: "^150 or more than 150 characters required",
      },
    },
    CommentRequiredPlotType: {
      presence: { allowEmpty: false, message: "^Required" },
      length: {
        maximum: 1000,
        minimum: 300,
        message: "^300 or more than 300 characters required",
      },
    },
    AccountNameRequired: {
      presence: { allowEmpty: false, message: "^Required" },
    },
    BankNameRequired: {
      presence: { allowEmpty: false, message: "^Required" },
    },
    AccountNumberRequired: {
      presence: { allowEmpty: false, message: "^Required" },
    },
    description: {
      presence: { allowEmpty: false, message: "^Required" },
    },
    CheaqueNumberRequired: {
      presence: {
        allowEmpty: false,
        message: "^Please Enter Telephone Number",
      },
      format: {
        pattern: "^[0-9]+$",
        message: "^This field can only contain numbers",
      },
      length: {
        maximum: 11,
        minimum: 11,
        message: "^Not valid, 11 digits required",
      },
    },
    PayOrderNumberRequired: {
      presence: {
        allowEmpty: false,
        message: "^Please enter CNIC number",
      },
      format: {
        pattern: "^[0-9]+$",
        message: "^Phone number field can only contain numbers",
      },
      length: {
        maximum: 13,
        minimum: 13,
        message: "^Not valid, 13 digits required",
      },
    },
    FileRequired: {
      presence: {
        allowEmpty: false,
        message: "^Please Enter Telephone Number",
      },
      format: {
        pattern: "^[0-9]+$",
        message: "^Phone number field can only contain numbers",
      },
      length: {
        maximum: 11,
        minimum: 11,
        message: "^Not valid, 11 digits required",
      },
    },
  };
  var formValues = {};
  var formFields = {};
  //check whether single or multiple fields
  //multiple fields are used while comparing two fields
  if (typeof fieldName === "string") {
    formValues[fieldName] = value;
    formFields[fieldName] = constraints[fieldName];
  } else if (typeof fieldName === "object") {
    for (let i = 0; i < fieldName.length; i++) {
      formValues[fieldName[i]] = value[i];
    }
    formFields[fieldName[0]] = constraints[fieldName[0]];
  }
  const result = validation(formValues, formFields);
  if (result) {
    if (typeof fieldName === "string") {
      return result[fieldName][0];
    } else if (typeof fieldName === "object") {
      return result[fieldName[0]][0];
    }
  }
  return null;
}
export function validateDate(field, value, limit) {
  let startErrorMessage = "Minimum Date Should be of Tommorrow";
  let endErrorMessage = "End Date Must be equal or greater than Start Date";
  let emptyError = "First Fill StartDate";

  if (field === "strtdate" || field === "strdate") {
    if (new Date(value) <= new Date()) {
      return startErrorMessage;
    } else if (new Date(value) > new Date()) {
      return null;
    }
  } else if (field === "endate" || field === "enddate") {
    if (limit !== "") {
      if (new Date(limit) <= new Date(value)) {
        return endErrorMessage;
      } else if (new Date(limit) > new Date(value)) {
        return null;
      }
    } else {
      return endErrorMessage;
    }
  }
}
