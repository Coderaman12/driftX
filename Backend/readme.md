# DriftX Backend API Documentation

## POST /users/register

### Description
Registers a new user with the provided information.

### Required Data
- **fullname** (object):
  - **firstname**: String (minimum 3 characters)
  - **lastname**: String (optional, minimum 3 characters)
- **email**: String (must be a valid email address)
- **password**: String (minimum 6 characters)

### Status Codes
- **201 Created**: User registered successfully.
- **400 Bad Request**: Validation errors or missing required fields.

### Example Response
```json
{
  "token": "your_jwt_token_here",
  "user": {
    "fullname": {
      "firstname": "John",
      "lastname": "Doe"
    },
    "email": "john.doe@example.com"
  }
}
```
