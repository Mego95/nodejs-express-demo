const m2s = require('mongoose-to-swagger')
const User = require('./models/user.model')
const Product = require('./models/product.model')

exports.options = {
    "definitions": {
        User: m2s(User),
        Product: m2s(Product)
    },

    "swagger": "2.0",
    "info": {
        "version": "1.0.0",
        "description": "Products Project Application API",
        "title": "Products CRUD API"
    },
    "host": "localhost:3000",
    "basePath": "/",
    "tags": [
        {"name": "Users", "description": "API for users"},
        {"name": "Users And Products", "description": "API for users and their products"}
    ],
    "schemes": ["http"],
    "consumes": ["application/json"],
    "produces": ["application/json"],
    "paths": {
        "/api/user/findAll": {
            "get": {
                "tags": ["Users"],
                "summary": "Get all users from system",
                "responses": {
                    "200": {
                        "description": "OK",
                        "schema": {
                            "$ref": "#/definitions/User"
                        }
                    }
                }
            }
        },
        "/api/user/findOne/{username}": {
            "get": {
                "tags": ["Users"],
                "parameters": [
                    {
                        "name": "username",
                        "in": "path",
                        "required": true,
                        "description": "Username of user",
                        "type": "string"
                    }
                ],
                "summary": "Get a user from system",
                "responses": {
                    "200": {
                        "description": "User Find",
                        "schema": {
                            "$ref": "#/definitions/User"
                        }
                    }
                }
            }
        },
        "/api/user/create": {
            "post": {
                "tags": [
                    "Users"
                ],
                "description": "Create new user in app",
                "parameters": [{
                    "name": "Parameters for user",
                    "in": "body",
                    "description": "User parameters that we will create",
                    "schema": {
                        //"$ref": "#/definitions/User"
                        "type": "object",
                        "properties": {
                            "username": { "type": "string" },
                            "password": { "type": "string" },
                            "name": { "type": "string" },
                            "surname": { "type": "string" },
                            "email": { "type": "string" },
                            "address": { 
                                "type": "object",
                                "properties": {
                                    "area": {"type": "string"},
                                    "road": {"type": "string"}
                                }
                            },
                            "phone": {
                                "type": "array",
                                "items": {
                                    "type": "object",
                                    "properties": {
                                        "type": {"type": "string"},
                                        "number": {"type": "string"}
                                    } 
                                }
                            }
                        }
                    }
                }],
                "produces": ["application/json"],
                "responses": {
                    "200": {
                        "description": "New user is created",
                        "schema": {
                            //"$ref": "#/definitions/User"
                            "type": "object",
                            "properties": {
                                "username": { "type": "string" },
                                "password": { "type": "string" },
                                "name": { "type": "string" },
                                "surname": { "type": "string" },
                                "email": { "type": "string" },
                                "adress": { 
                                    "type": "object",
                                    "properties": {
                                        "area": {"type": "string"},
                                        "road": {"type": "string"}
                                    }
                                },
                                "phone": {
                                    "type": "array",
                                    "items": {
                                        "type": "object",
                                        "properties": {
                                            "type": {"type": "string"},
                                            "number": {"type": "string"}
                                        } 
                                    }
                                }
                            }
                        }
                    }
                }
            }
        },
        "/api/user/update": {
            "patch": {
                "tags": ["Users"],
                "description": "Update user in system",
                "parameters": [{
                    "name": "update user",
                    "in": "body",
                    "description": "User that we will update",
                    "schema": {
                        "type": "object",
                        "properties": {
                            "username": {"type": "string"},
                            "name": {"type": "string"},
                            "surname": {"type": "string"},
                            "email": {"type": "string"},
                            "address": {
                                "type": "object",
                                "properties": {
                                    "area": {"type": "string"},
                                    "road": {"type": "string"}
                                }
                            },
                            "phone": {
                                "type": "array",
                                "items": {
                                    "type": "object",
                                    "properties": {
                                        "type": {"type": "string"},
                                        "number": {"type": "string"}
                                    }
                                }
                            }
                        },
                        "required": ["email"]
                    }
                }],
                "responses": {
                    "200": {
                        "description": "user is updated"
                    }
                }
            }
        },
        "/api/user/delete/{username}": {
            "delete": {
                "tags": ["Users"],
                "description": "Deletes user from the system",
                "parameters": [{
                    "name": "username",
                    "in": "path",
                    "description": "Username of user to be deleted"
                }],
                "responses": {
                    "200": {
                        "description": "Deleted user"
                    }
                }
            }
        },
        "/api/userproducts/findone/{username}": {
            "get": {
                "tags": ["Users And Products"],
                "parameters": [{
                    "name": "username",
                    "in": "path",
                    "description": "Find user's products",
                    "type": "string"
                }],
                "responses": {
                    "200": {
                        "description": "User and Products"
                    }
                }
            }
        }
    }
}




// {
//     "username": { "type": "string" },
//     "password": { "type": "string" },
//     "name": { "type": "string" },
//     "surname": { "type": "string" },
//     "email": { "type": "string" },
//     "adress": { 
//         "type": "object",
//         "properties": {
//             "area": {"type": "string"},
//             "road": {"type": "string"}
//         }
//     },
//     "phone": {
//         "type": "array",
//         "items": {
//             "type": "object",
//             "properties": {
//                 "type": {"type": "string"},
//                 "number": {"type": "string"}
//             } 
//         }
//     }
// }