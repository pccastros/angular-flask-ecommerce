# AngularFlaskEcommerce

This project is a basic Ecommerce with `Angular` frontend and `Python - Flask` backend.

![Alt Text](ecommerce.gif)

## Python virtual environment

To create a new python virtual environment use these commans:

```sh
python -m venv env # Create a virtual env
source backend/env/bin/activate # activate virtual env
```

and for deactivate the venvironment run `deactivate`

To install packages
```sh
npm i # node dependencies
pip install -r requirements.py # python dependencies
```

## Test Project

First clone the repo with `git clone`.

To start the `Flask` server, you have to run these commands:
```sh
export FLASK_ENV=development # set environment
export FLASK_APP=backend/server.py # set entrypoint
flask run # start server
```

Next, for run `Angular` server:
```sh
ng serve
```

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. 

