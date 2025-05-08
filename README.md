# Robust Nuxt Template

This project is a Nuxt 3 application template with TypeScript support. It includes a basic navigation setup, some utility components, Supabase integration with auth form + page ready to use.

[Only better with CLI Tool](https://www.npmjs.com/package/create-robust-nuxt)

## Folder Structure

- `assets/`: Contains static assets like stylesheets.
    - `styles/`: Main styles directory.
        - `css/`: Contains CSS files for setting up styles.
- `components/`: Contains Vue components.
    - `features/`: Components for different features like authentication, networking and more in the future.
    - `layout/`: App-level layout components like Header, Navigation, Footer.
    - `theming/`: Components for theming.
    - `ui/`: Components for UI elements like Buttons, Cards, Inputs.
- `pages/`: Contains page components.
- `content/`: Contains content files for Nuxt Content module.
- `composables/`: Contains Vue composables for reusability.
- `i18n/`: Contains translation files for i18n module.
    - `locales/`: Language files for i18n.
- `layouts/`: Contains layout components (+ auth-based if selected).
- `middleware/`: Contains middleware functions (+ auth-based if selected).
- `public/`: Contains public assets like images and fonts.
- `server/`: Contains server-side code.
    - `api/`: Contains API routes.
- `stores/`: Contains Pinia stores.
- `types/`: Contains TypeScript type definitions.
    - `ui/`: UI-related types.
    - `utility/`: Utility types.
    - `server/`: Server-related types.
- `utils/`: Contains utility functions.

## Setup

> !> **Note**: This template is designed to be used with [pnpm](https://pnpm.io/).

Make sure to install the dependencies:

```bash
# pnpm
pnpm install
```

## Deployment

```bash
# pnpm
pnpm run dev
```

Check out the [Deployment guide](https://nuxt.com/docs/getting-started/deployment) for more information.
License
This project is licensed under the MIT License
