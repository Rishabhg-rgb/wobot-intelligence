
# Internship task for Wobot Intelligence

In this task we can sign up, login, and see the userdetails, userlist only when you are authorized and authorization done by Json web token.


## API Reference

#### Get details of a particular user

```http
  GET /api/fetchuserdetails
```

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `username` | `string` | **Required**. http://localhost:3000/api/fetchuserdetails |

#### Get all user list

```http
  GET /api/userlist
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
|`authorized`| `string` | **Required**. http://localhost:3000/api/fetchuserlist |

#### Signup

```http
  POST /api/createuser/
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
|`username,name,password`| `string` | **Required**. http://localhost:3000/api/createuser/ |


#### login 

```http
  POST /api/login/
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
|`username,password`| `string` | **Required**. http://localhost:3000/api/login/ |

## Run Locally

Clone the project

```bash
  git clone https://github.com/Rishabhg-rgb/wobot-intelligence.git
```

Go to the project directory

```bash
  cd my-project
```

Install dependencies

```bash
  npm install
```

Start the server

```bash
  npm start
```


## Features

- Signup
- Login
- User list
- User details

