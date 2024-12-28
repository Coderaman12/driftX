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

## POST /users/login

### Description
Logs in an existing user with the provided credentials.

### Required Data
- **email**: String (must be a valid email address)
- **password**: String (minimum 6 characters)

### Status Codes
- **200 OK**: User logged in successfully.
- **400 Bad Request**: Validation errors or missing required fields.
- **401 Unauthorized**: Invalid email or password.

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

## GET /users/profile

### Description
Fetches the profile of the authenticated user.

### Required Data
- **Authorization**: Bearer token (JWT)

### Status Codes
- **200 OK**: Profile fetched successfully.
- **401 Unauthorized**: User is not authenticated.

### Example Response
```json
{
  "fullname": {
    "firstname": "John",
    "lastname": "Doe"
  },
  "email": "john.doe@example.com"
}
```

## GET /users/logout

### Description
Logs out the authenticated user by blacklisting the token.

### Required Data
- **Authorization**: Bearer token (JWT)

### Status Codes
- **200 OK**: User logged out successfully.
- **401 Unauthorized**: User is not authenticated.

### Example Response
```json
{
  "message": "Logged Out Successfully"
}
```

## POST /captains/register

### Description
Registers a new captain with the provided information.

### Required Data
- **fullname** (object):
  - **firstname**: String (minimum 3 characters)
  - **lastname**: String (optional, minimum 3 characters)
- **email**: String (must be a valid email address)
- **password**: String (minimum 6 characters)
- **vehicle** (object):
  - **color**: String (minimum 3 characters)
  - **plate**: String (minimum 3 characters)
  - **capacity**: Number (minimum 1)
  - **vehicleType**: String (must be one of 'car', 'auto', 'motorcycle')
- **status**: String (optional, default is 'inactive')
- **location** (object, optional):
  - **lat**: Number
  - **lng**: Number

### Status Codes
- **201 Created**: Captain registered successfully.
- **400 Bad Request**: Validation errors or missing required fields.

### Example Response
```json
{
  "token": "your_jwt_token_here",
  "captain": {
    "fullname": {
      "firstname": "Jane",
      "lastname": "Doe"
    },
    "email": "jane.doe@example.com",
    "vehicle": {
      "color": "Red",
      "plate": "XYZ123",
      "capacity": 4,
      "vehicleType": "car"
    },
    "status": "inactive",
    "location": {
      "lat": 12.9715987,
      "lng": 77.5945627
    }
  }
}
```
