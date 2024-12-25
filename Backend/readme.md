
# DriftX Backend API Documentation

## POST /users/register

### Description
Registers a new user with the provided information.

-POST-
### Required Data
-**fullname**(object):
    - **firstname**: String (minimum 3 characters)
    - **lastname**: String (optional, minimum 3 characters)
- **email**: String (must be a valid email address)
- **password**: String (minimum 6 characters)

### Status Codes
- **201 Created**: User registered successfully.
- **400 Bad Request**: Validation errors or missing required fields.

### Example Response
-**token**(String): JWT token
-**user**(object):
    -**fullname**(object):
        - **firstname**: String (minimum 3 characters)
        - **lastname**: String (optional, minimum 3 characters)
    - **email**: String (must be a valid email address)
    - **password**: String (minimum 6 characters)
