// Q1. Complex Password Validator:
// Write a regular expression to validate passwords with the following criteria:
// At least one lowercase letter, one uppercase letter, one digit, and one special character (@, #, $, %, &, *).
// The length must be between 12 and 20 characters.
// No spaces allowed.
// Write a function that takes an array of passwords and returns an array of passwords that pass the validation.

function validatePasswords(passwords) {
    // Regular expression pattern for password validation
    const pattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@#$%&*])[A-Za-z\d@#$%&*]{12,20}$/;
    // Array to store valid passwords
    const validPasswords = [];
    // Check each password against the pattern
    for (const password of passwords) {
        if (pattern.test(password)) {
            validPasswords.push(password);
        }
    }
    return validPasswords;
}
// Example usage
const passwordList = [
    "ValidPass123@", "short1A@", "Alllowercase123@", "VALID1234@", 
     "1234567890abcd@", "ValidPass@123", "Valid#Pass1", "LongValidPass123@Extra"
];
const validPasswords = validatePasswords(passwordList);
console.log(validPasswords);


