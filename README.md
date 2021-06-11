# WORLD ARTS FOUNDATION INC

This site is built with Ruby on Rails, and a React front-end using the `webpacker` gem to bundle and compile js files. 

### Routes
Routes are handled as a SPA by react-router in the file: `app/javascript/routes/Index.jsx`

### Page Templates
Page templates are jsx components that are hydrated with data from the API at: `app/controllers/api/v1/`

### Database
This app is using a postgres database locally and in production.
To create a local database you can run `rails db:create`, and then seed it with data using `rails db:seed`.


