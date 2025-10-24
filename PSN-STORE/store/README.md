# Store

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 16.2.16.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.

## Marca-d'água da logo

Para exibir a logo como uma marca-d'água no fundo do site, edite `src/styles.css` onde há regras no seletor `body::before`.

- Ajuste a imagem utilizada em `background-image: url('/assets/logo_ligth.png');` se necessário.
- Controle a transparência com `opacity` (ex.: `0.08`).
- Ajuste o tamanho com `background-size` (ex.: `40%`) e a posição com `background-position` (ex.: `center center`).
- A propriedade `pointer-events: none` garante que a marca-d'água não interfira em cliques.

