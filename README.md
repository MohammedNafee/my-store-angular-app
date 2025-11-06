# MyStore

A modern e-commerce application built with Angular 17, featuring a responsive product catalog, shopping cart functionality, and a streamlined checkout process.

## Features

- **Product Catalog**: Browse through a collection of products with detailed information
- **Shopping Cart**: Add/remove items with quantity management and persistent storage
- **Checkout Process**: User-friendly form for completing purchases
- **Responsive Design**: Optimized for both desktop and mobile devices

## Technical Stack

- **Framework**: Angular 17 (Standalone Components)
- **State Management**: RxJS with BehaviorSubject
- **Form Handling**: Reactive Forms
- **Data Persistence**: LocalStorage
- **Styling**: Custom CSS with responsive design

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

## Application Structure

```
src/app/
├── models/              # Data models and interfaces
│   └── Product.ts      # Product interface definition
├── services/           # Shared services
│   ├── product.ts      # Product data service
│   └── cart.ts         # Cart management service
├── nav-bar/           # Navigation component
│   ├── nav-bar.ts     # Navigation logic
│   ├── nav-bar.html   # Navigation template
│   └── nav-bar.css    # Navigation styles
├── product-list/      # Product catalog container
│   ├── product-list.ts     # List component
│   ├── product-list.html   # List template
│   └── product-list.css    # List styles
├── product-item/      # Individual product component
│   ├── product-item.ts     # Product item logic
│   ├── product-item.html   # Product item template
│   └── product-item.css    # Product item styles
└── cart/             # Cart and checkout functionality
    ├── cart.ts       # Cart component with checkout
    ├── cart.html     # Cart template
    └── cart.css      # Cart styles
```

## Prerequisites

Before running the application, ensure you have the following installed:
- Node.js (v18 or higher)
- npm (v9 or higher)
- Angular CLI (v17 or higher)

## Getting Started

1. Clone the repository
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start the development server:
   ```bash
   ng serve
   ```
4. Navigate to `http://localhost:4200` in your browser

## Additional Resources

- [Angular Documentation](https://angular.dev)
- [Angular CLI Overview and Command Reference](https://angular.dev/tools/cli)
- [RxJS Documentation](https://rxjs.dev)
