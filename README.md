
# Pokemon Go App

A basic Crud Application that manages the Pokemon Go Data.


## Authors

- [@Abdullah-moiz](https://www.github.com/Abdullah-moiz)

## Installation

Clone Repo using 

```bash
git clone https://github.com/Abdullah-moiz/Pokemon-Go.git
```


### Frontend

```bash
  cd frontend
  npm install 
  npm run dev
```


### Backend

```bash
  cd backend
  npm install 
  npm run dev
```


## Environment Variables

To run this project, you will need to add the following environment variables to your .env file

#### Frontend

I am using Firebase Storage to save Images of Pokemon Card you can create a project on firebase and intialize Firebase Storage then add the following in .env File and your are good to Go 

`firebase_api_key` : Your Firebase Api Key

`firebase_app_id` : Your Firebase App ID

`firebase_auth_domain` : Your Firebase Auth Domain

`firebase_folder_path` : Your Firebase Storage Folder Path


#### Backend

`ConnectionUrl` = mongodb://0.0.0.0:27017/task




## Features

- Add Pokemon Cards
- View Pokemon Card with Pagination (10 Doc on Each request)
- Delete Pokemon Card
- Update Pokemon Card
- Search Pokemon Card with Name




## Tech Stack

**Client:** Vite +  React , React Query, TailwindCSS , Daisy UI , Firebase , Typescript

**Server:** Node, Express , mongoose , Joi , MVC Architecture

