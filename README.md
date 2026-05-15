# PrimerAPP

This project was generated using [Angular CLI](https://github.com/angular/angular-cli) version 19.2.6.

## Development server

To start a local development server, run:

```bash
ng serve
```

Once the server is running, open your browser and navigate to `http://localhost:4200/`. The application will automatically reload whenever you modify any of the source files.

## Code scaffolding

Angular CLI includes powerful code scaffolding tools. To generate a new component, run:

```bash
ng generate component component-name
```

For a complete list of available schematics (such as `components`, `directives`, or `pipes`), run:

```bash
ng generate --help
```

## Building

To build the project run:

```bash
ng build
```

This will compile your project and store the build artifacts in the `dist/` directory. By default, the production build optimizes your application for performance and speed.

## Running unit tests

To execute unit tests with the [Karma](https://karma-runner.github.io) test runner, use the following command:

```bash
ng test
```

## Running end-to-end tests

For end-to-end (e2e) testing, run:

```bash
ng e2e
```

Angular CLI does not come with an end-to-end testing framework by default. You can choose one that suits your needs.

## Additional Resources

For more information on using the Angular CLI, including detailed command references, visit the [Angular CLI Overview and Command Reference](https://angular.dev/tools/cli) page.

2. Exploración de la estructura.
   ○ Identificar las carpetas y archivos más importantes:
   ○ Escribir una breve descripción de la función de cada uno.

src/app : carpeta base de la aplicación con los componentes , modulos y la logica principal ,es el núcleo de la aplicación. Allí se encuentra el módulo principal (AppModule) y el componente raíz (AppComponent).

app.components.ts : es el componente principal, que actúa como contenedor raíz de la aplicación. Este componente se asocia a la etiqueta <app-root> que se encuentra en index.html.Es un archivo de clase TypeScript donde se define la lógica del componente.

app.module.ts: es el módulo raíz (AppModule) que agrupa todos los componentes, servicios y dependencias de la aplicación. A la par, define qué componentes se cargan y qué módulos se importan.

assets/ :carpeta pública para recursos estáticos como imágenes, íconos o fuentes.

environments/: carpeta que contiene archivos de configuración para distintos entornos ( desarrollo , produccion, etc)
