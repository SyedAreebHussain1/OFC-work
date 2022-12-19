import validation from 'validate.js'


export default function validate(fieldName, value) {
    const constraints = {
        email: {
            presence: {
                allowEmpty: false,
                message: '^Please enter email address'
            },
            email: {
                message: '^Please enter valid email address'
            }
        },
        password: {
            presence: {
                allowEmpty: false,
                message: '^Please enter password'
            }
        },
        confirmPassword: {
            presence: {
                allowEmpty: false,
                message: '^Please enter confirm password'
            },
            equality: {
                attribute: 'password',
                message: '^Passwords mismatch'
            }
        },
        signupPassword: {
            presence: {
                allowEmpty: false,
                message: '^Please enter password',
            },
            length: {
                maximum: 16,
                message: 'password length must be between 8-16 characters',
                minimum: 8,
            }
        },
        confirmSignupPassword: {
            presence: {
                allowEmpty: false,
                message: '^Please enter confirm password'
            },
            equality: {
                attribute: 'signupPassword',
                message: '^Passwords mismatch'
            }
        },
        fullName: {
            presence: { allowEmpty: false, message: '^Name is required' },
            format: {
                pattern: '^[A-z ]+$',
                message: '^Please enter valid name'
            },
            length: {
                maximum: 20,
                message: 'Length exceed, maximum 20 digits',
            }
        },
        firstName: {
            presence: { allowEmpty: false, message: '^Please enter your first name' },
            format: {
                pattern: '^[A-z ]+$',
                message: '^Please enter valid name'
            },
            length: {
                maximum: 15,
                message: '^Length exceed, maximum 15 digits',
            }
        },
        lastName: {
            presence: { allowEmpty: false, message: '^Please enter your last name' },
            format: {
                pattern: '^[A-z ]+$',
                message: '^Please enter valid name'
            },
            length: {
                maximum: 10,
                message: 'Length exceed, maximum 10 digits',
            }
        },
        phoneNumber: {
            presence: {
                allowEmpty: false,
                message: '^Please enter valid mobile number'
            },
            format: {
                pattern: '^[0-9]+$',
                message: '^Phone number field can only contain numbers'
            },
            length: {
                maximum: 11,
                minimum: 11,
                message: '^Not valid, 11 digits required',
            }
        },
        NumberOnly: {
            presence: {
                allowEmpty: false,
                message: '^Please Enter Number'
            },
            format: {
                pattern: '^[0-9]+$',
                message: '^This field can only contain numbers'
            },
            length: {
                maximum: 3,
                minimum: 1,
                message: '^Not valid, minimum 1 and maxiumum 3 digits required',
            }
        },
        ContactNumber: {
            presence: {
                allowEmpty: false,
                message: '^Please Enter Number'
            },
            format: {
                pattern: '^[0-9]+$',
                message: '^This field can only contain numbers'
            },
            length: {
                maximum: 11,
                minimum: 11,
                message: '^Not valid, 11 digits required',
            }
        },
        
        CNIC: {
            presence: {
                allowEmpty: false,
                message: '^Please enter CNIC number'
            },
            format: {
                pattern: '^[0-9]+$',
                message: '^Phone number field can only contain numbers'
            },
            length: {
                maximum: 13,
                minimum: 13,
                message: '^Not valid, 13 digits required',
            },
        },
        DOB: {
            presence: { allowEmpty: false, message: '^Please enter your Date of Birth' },
        },
        city: {
            presence: { allowEmpty: false, message: '^City required' },
        },
        country: {
            presence: { allowEmpty: false, message: '^Country required' },
        },
        required: {
            presence: { allowEmpty: false, message: '^Required' },
        },
        AccountNameRequired: {
            presence: { allowEmpty: false, message: '^Please Enter Account Name' },
            format: {
                pattern: '^[A-z ]+$',
                message: '^Please Enter Valid Account Name'
            },
        },
        BankNameRequired: {
            presence: { allowEmpty: false, message: '^Please Enter Bank Name' },
            format: {
                pattern: '^[A-z ]+$',
                message: '^Please Enter Valid Bank Name'
            },
        },
        AccountNumberRequired: {
            presence: { allowEmpty: false, message: '^Please Enter Account Number' },
            
        },
        CheaqueNumberRequired: {
            presence: { allowEmpty: false, message: '^Please Enter Cheaque Number' },
        },
        PayOrderNumberRequired: {
            presence: { allowEmpty: false, message: '^Please Enter PayOrder Number' },
        },
        FileRequired: {
            presence: { allowEmpty: false, message: '^Upload Files' },
        },
    };
    var formValues = {};
    var formFields = {};

    //check whether single or multiple fields
    //multiple fields are used while comparing two fields
    if (typeof fieldName === 'string') {
        formValues[fieldName] = value;
        formFields[fieldName] = constraints[fieldName];
    } else if (typeof fieldName === 'object') {
        for (let i = 0; i < fieldName.length; i++) {
            formValues[fieldName[i]] = value[i];
        }
        formFields[fieldName[0]] = constraints[fieldName[0]];
        console.log(formValues, 'these are fields');
    }

    const result = validation(formValues, formFields);
    if (result) {
        if (typeof fieldName === 'string') {
            return result[fieldName][0];
        } else if (typeof fieldName === 'object') {
            return result[fieldName[0]][0];
        }
    }

    return null;
}




export function validateDate(field, value, limit) {
    let startErrorMessage = 'Minimum Date Should be of Tommorrow';
    let endErrorMessage = 'End Date Must be equal or greater than Start Date';
    let emptyError = 'First Fill StartDate'
    //debugger;
    if (field === 'strtdate' || field === 'strdate') {
        if (new Date(value) <= new Date()) {
            //      debugger;
            return startErrorMessage;
        } else if (new Date(value) > new Date()) {
            //    debugger;
            return null;
        }
    }
    else if (field === 'endate' || field === 'enddate') {
        if (limit !== '') {
            if (new Date(limit) <= new Date(value)) {
                return endErrorMessage;
            } else if (new Date(limit) > new Date(value)) {
                return null;
            }
        } else { return endErrorMessage }

    }
}
