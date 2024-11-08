# vue-boilerplate

This template should help get you started developing with Vue 3 in Vite.

## Recommended IDE Setup

[VSCode](https://code.visualstudio.com/) + [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar) (and disable Vetur).

## Type Support for `.vue` Imports in TS

TypeScript cannot handle type information for `.vue` imports by default, so we replace the `tsc` CLI with `vue-tsc` for type checking. In editors, we need [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar) to make the TypeScript language service aware of `.vue` types.

## Customize configuration

See [Vite Configuration Reference](https://vite.dev/config/).

## Project Setup

```sh
npm install
```

### Compile and Hot-Reload for Development

```sh
npm run dev
```

### Type-Check, Compile and Minify for Production

```sh
npm run build
```

### Run Unit Tests with [Vitest](https://vitest.dev/)

```sh
npm run test:unit
```

# Description

This boilerplate has a grid to structure the views with a header, main and footer containers.
It has also a simple example of store manager with Pinhia and is responsive for its menubar.
There is a example of a vue composable for http requests.

# Routes

There are 3 routes: "/login" (it is a fake login, just to add a form example), "/" (home, where there are some variables managed by the Pinia store manager) and "/about" (with a button to increment a counter in the home page. This is a Pinhia store example)

# Road map

- [x] Responsive: there is a navbar that helps to have a responsive design.
- [x] Routing: there are some general routes.
- [x] State manager: Added Pinia as state manager.
- [x] Composables: there is one compasable for http requests.
- [x] Form example: There is a login form as example. It is just and example and it has not any log in functionality. I don't want to add a login functionality to the boilerplate since a lot of projects has not any login.
- [...] Global css variables: Added theme css variables.
- [...] BEM: block-element-modifier css style is yet to be improved
- [...] Http requests config. Already have the composable to help with http requests
- [ ] Models (TS interfaces).
- [ ] Guards.
- [ ] ESLint and prettier config.
- [ ] Unit tests.
- [ ] i18n
- [ ] Style-lint config
- [ ] Husky and lint-staged conig
- [ ] Environment Varables (dot env)
- [ ] Global error handling with toaster
