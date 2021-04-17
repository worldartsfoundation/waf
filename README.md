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

