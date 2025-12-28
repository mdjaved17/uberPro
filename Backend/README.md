# User Registration API

This README documents the user registration endpoint for the UberPro backend application.

## Endpoint

### POST /register

Registers a new user in the system.

#### Request

- **Method**: POST
- **URL**: `/register`
- **Content-Type**: `application/json`

**Request Body**:
```json
{
  "fullname": {
    "firstName": "string",  // Required, minimum 3 characters
    "lastName": "string"    // Optional, minimum 3 characters if provided
  },
  "email": "string",        // Required, valid email format
  "password": "string"      // Required, minimum 6 characters
}
```

#### Validation Rules
- `fullname.firstName`: Must be at least 3 characters long
- `email`: Must be a valid email address
- `password`: Must be at least 6 characters long

#### Response

**Success (201 Created)**:
```json
{
  "token": "jwt_token_here",
  "user": {
    "_id": "user_id",
    "fullname": {
      "firstName": "string",
      "lastName": "string"
    },
    "email": "string"
  }
}
```

**Error (400 Bad Request)**:
```json
{
  "errors": [
    {
      "msg": "Error message",
      "param": "field_name",
      "location": "body"
    }
  ]
}
```

#### Example Usage

Using curl:
```bash
curl -X POST http://localhost:3000/register \
  -H "Content-Type: application/json" \
  -d '{
    "fullname": {
      "firstName": "John",
      "lastName": "Doe"
    },
    "email": "john.doe@example.com",
    "password": "password123"
  }'
```

#### Notes
- Passwords are hashed using bcrypt before storage
- A JWT token is generated upon successful registration
- The user model includes additional fields like `socketId` for real-time features
- Ensure the server is running and connected to MongoDB before making requests
