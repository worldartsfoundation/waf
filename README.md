# World Arts Foundation

A dockerized Wagtail setup based off [this article](https://www.phooky.com/blog/dockerize-wagtail-postgresql-as-a-development-environment/).

## Initial setup

### Create local env files
For the initial setup you will need to create two env files in the root project folder to store local credentials.
- `.env.dev`
- `.env.dev.db`

Paste the following contents into those files:
```
# .env.dev

DEBUG=True
SECRET_KEY=[Your SECRET_KEY]
DJANGO_ALLOWED_HOSTS=localhost 127.0.0.1 [::1]

SQL_ENGINE=django.db.backends.postgresql_psycopg2
SQL_DATABASE=demo_wagtail
SQL_USER=demouser
SQL_PASSWORD=DemoPass
SQL_HOST=db
SQL_PORT=5432
DATABASE=postgres
```

```
# .env.dev.db

POSTGRES_USER=demouser
POSTGRES_PASSWORD=DemoPass
POSTGRES_DB=demo_wagtail
```

### Create Docker instances
First, ensure you have Docker and Docker-compose installed locally.

Next, spin up the docker containers for the webserver and db:
```
docker-compose up -d --build
``` 
If that is successfull you should see a Wagtail site running at [http://localhost:8000](http://localhost:8000).

Finally, create an admin user for the CMS buy running:
```
docker-compose exec web python manage.py createsuperuser --settings=app.settings.dev
```

You should now be able to log into the backend using those credentials at [http://localhost:8000/admin/](http://localhost:8000/admin/).

## Commands
- `docker-compose up -d --build` - Build and start containers in the background.
- `docker-compose down` - Stop running containers.
- `docker-compose exec web python manage.py makemigrations` - Make migration files.
- `docker-compose exec web python manage.py migrate` - Run migrations.
- `npm run watch` - Watch js / scss files for changes.

## Application structure

### Page models
This is where you can define what stream fields you want to be accessible to each page by the editor.

[ EG. `app/pages/home` ]

#### Creating a new page model
Page models are actually Django apps, so there are a few steps to creating and wireing them up within the CMS.
- First, create the new app by running this command from the rood directory: `docker-compose exec web python manage.py startapp <yourpagename>`
- Then move it into the pages directory: `mv <yourpagename> pages/`
- Then add it to the `INSTALLED_APPS` array in `base.py`.
- Finally make and run migrations. 

### Page components
These are the custom blocks that can be added to any page model. Each page component folder has a model that defines it's fields as well as a template that creates the markup for the component.

[ EG. `app/page_components/person_block` ]

This structure contains:
- A model (component_name.py)
- A template file (component_name.html)
- A react component (component_name.js)
- A stylesheet (component_name.scss)

After creating these files for a new component you must also import the component js and scss in `app/src/js/app.js` and `app/src/scss/app.scss`.

### Front-end tooling
By running `npm run watch`, Parcel will listen for changes in `app/src/js/app.js` and `app/src/scss/app.scss`, and compile them to the static folder where for serving to the template. So treat those two files as entrypoints for all js and scss modules to be loaded from.
