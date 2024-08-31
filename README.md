# Nuxt Template

This project is a Nuxt 3 application template with TypeScript support. It includes a basic navigation setup and some utility components.

# Project Structure

This project is a Nuxt 3 application template with TypeScript support. It includes a basic navigation setup, some utility components, and state management using Pinia.

## Folder Structure

- `assets/`: Contains static assets like stylesheets.
	- `styles/`: Main styles directory.
		- `css/`: Contains CSS files.
		- `scss/`: Contains SCSS files.
- `components/`: Contains Vue components.
	- `layout/section/`: Components for layout sections.
		- `PageSection.vue`: Component for page sections.
		- `SectionTitle.vue`: Component for section titles.
	- `navigation/`: Components for navigation.
		- `BurgerNavigation.vue`: Component for burger menu navigation.
		- `IconedNavigationLink.vue`: Component for navigation links with icons.
		- `SidebarNavigation.vue`: Component for sidebar navigation.
		- `TopNavigation.vue`: Component for top navigation.
	- `theming/`: Components for theming.
		- `ColorSwitch.vue`: Component for switching colors.
		- `ThemeSwitch.vue`: Component for switching themes.
	- `utility/`: Utility components.
		- `Header.vue`: Header component.
- `pages/`: Contains page components.
	- `about.vue`: About page.
	- `help.vue`: Help page.
	- `index.vue`: Home page.
- `public/`: Contains public assets.
	- `favicon.ico`: Favicon for the application.
	- `fonts/`: Contains font files.
		- `Manrope-VariableFont_wght.ttf`: Manrope font.
	- `images/`: Contains image files.
		- `delete.ts`: Example image file.
- `server/`: Contains server-side code.
	- `tsconfig.json`: TypeScript configuration for the server.
- `stores/`: Contains Pinia stores.
	- `settings.ts`: Store for managing application settings.
- `types/`: Contains TypeScript type definitions.
	- `ui/`: UI-related types.
		- `SectionSizes.ts`: Type definitions for section sizes.
	- `utility/`: Utility types.
		- `NavigationLink.ts`: Type definitions for navigation links.
- `utils/`: Contains utility functions.
	- `navigation.ts`: Utility functions for navigation.

## Explanation

The project is structured to separate concerns and improve maintainability:

- **Assets**: Static files like stylesheets are organized under `assets` to keep them separate from the application logic.
- **Components**: Vue components are organized by their functionality (layout, navigation, theming, utility) to make it easier to find and manage them.
- **Pages**: Each page of the application has its own file under `pages`, following the Nuxt.js convention.
- **Public**: Public assets like fonts and images are placed under `public` to be served directly.
- **Server**: Server-side code is kept under `server` to separate it from client-side code.
- **Stores**: State management is handled using Pinia stores, which are placed under `stores`.
- **Types**: TypeScript type definitions are organized under `types` to ensure type safety across the application.
- **Utils**: Utility functions are placed under `utils` for reusability and better organization.

## Stores

### `stores/settings.ts`

This file contains the settings store which manages the application's settings, such as the primary color. It uses Pinia for state management.

## Setup

Make sure to install the dependencies:

```bash
# npm
npm install
```

```bash
# pnpm
pnpm install
```

```bash
# yarn
yarn install
```

```bash
# bun
bun install
```

## Deployment

```bash
# bun
bun run dev
```

```bash
# npm
npm run dev
```

```bash
# pnpm
pnpm run dev
```

```bash
# yarn
yarn dev
```

Check out the [Deployment guide](https://nuxt.com/docs/getting-started/deployment) for more information.  
License
This project is licensed under the MIT License
