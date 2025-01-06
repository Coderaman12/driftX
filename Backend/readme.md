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
    }
  }
}
```

## POST /captains/login

### Description
Logs in an existing captain with the provided credentials.

### Required Data
- **email**: String (must be a valid email address)
- **password**: String (minimum 6 characters)

### Status Codes
- **200 OK**: Captain logged in successfully.
- **400 Bad Request**: Validation errors or missing required fields.
- **401 Unauthorized**: Invalid email or password.

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
    }
  }
}
```

## GET /captains/profile

### Description
Fetches the profile of the authenticated captain.

### Required Data
- **Authorization**: Bearer token (JWT)

### Status Codes
- **200 OK**: Profile fetched successfully.
- **401 Unauthorized**: Captain is not authenticated.

### Example Response
```json
{
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
    "lat": null,
    "lng": null
  }
}
```

## GET /captains/logout

### Description
Logs out the authenticated captain by blacklisting the token.

### Required Data
- **Authorization**: Bearer token (JWT)

### Status Codes
- **200 OK**: Captain logged out successfully.
- **401 Unauthorized**: Captain is not authenticated.

### Example Response
```json
{
  "message": "Logged Out Successfully"
}
```

## Schemas

### User Schema
```json
{
  "fullname": {
    "firstname": "String (required, minimum 3 characters)",
    "lastname": "String (optional, minimum 3 characters)"
  },
  "email": "String (required, unique, valid email address)",
  "password": "String (required, minimum 6 characters, hashed)",
  "socketId": "String (optional)",
  "status": "String (enum: ['active', 'inactive'], default: 'inactive')",
  "location": {
    "lat": "Number (optional)",
    "lng": "Number (optional)"
  }
}
```

### Captain Schema
```json
{
  "fullname": {
    "firstname": "String (required, minimum 3 characters)",
    "lastname": "String (optional, minimum 3 characters)"
  },
  "email": "String (required, unique, valid email address)",
  "password": "String (required, minimum 6 characters, hashed)",
  "socketId": "String (optional)",
  "status": "String (enum: ['active', 'inactive'], default: 'inactive')",
  "vehicle": {
    "color": "String (required, minimum 3 characters)",
    "plate": "String (required, unique, minimum 3 characters)",
    "capacity": "Number (required, minimum 1)",
    "vehicleType": "String (required, enum: ['car', 'auto', 'motorcycle'])"
  },
  "location": {
    "lat": "Number (optional)",
    "lng": "Number (optional)"
  }
}
```

### Blacklist Token Schema
```json
{
  "token": "String (required, unique)",
  "createdAt": "Date (default: Date.now, expires: 86400 seconds)"
}
```
