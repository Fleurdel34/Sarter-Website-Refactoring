# OlympicGamesStarter

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 18.0.6.

Don't forget to install your node_modules before starting (`npm install`).

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Where to start

As you can see, an architecture has already been defined for the project.The predefined architecture includes the following:

- `components` folder: contains every reusable components (header, pie-chart and statistics)
- `pages` folder: contains components used for routing:
    dashboard, country-detail with child component (medal-chart) and not-found
- `models` folder: contains interfaces used for data (olympic, participation and statistics)
- `service` folder: contains data.service.ts file. 
    `file` data.service: contains an array included the data of `olympic.json` file.

You can read ARCHITECTURE.md file to understand the application's structure.

## features.

### header: 
    contains a main title
### statistics:
    contains commons indicators at the top of pages 
### dashboard with pie chart: 
    constains data from all countries
### detail page with line chart:
    contains data from a single country   


