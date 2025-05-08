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

## Features

- **Localization (Built-in)**: Basic localization setup with i18n module.
    - Using [i18n](https://nuxt.com/modules/i18n) for localization and internationalization.
    - All translations are stored in the `/i18n/locales` folder and can be accessed through the `useI18n` composable.
    - To add new languages, simply create a new file in the `/i18n/locales` folder with name as `{locale}.json`, then add it in `/nuxt.config.ts` and `/i18n/languages.ts` and thats it!.
- **Auth (Optional with CLI)**: User authentication and authorization.
    - Based on [Supabase](https://supabase.com/) for authentication and user management.
    - All un-authenticated routes are protected by default (you can also check [middleware folder](/middleware)).
- **Networking (Optional with CLI)**: Basic networking setup with Nitro as server and Pinia for state management.
    - Using [Jikan API](https://jikan.moe/) for fetching anime and manga recommendations data.
    - All API calls are made through the `/server/api` folder, which is proxied to the Jikan API.
- **Content (Optional with CLI)**: Basic content setup with Nuxt Content module.
    - Using [Nuxt Content](https://content.nuxtjs.org/) for managing content files.
    - All content files are stored in the `/content` folder.
    - To add new content files, simply create a new file in the `/content` folder with name as `{name}-{slug}.{locale}.md` and it will be automatically picked up by Nuxt Content.
    - You also need to add frontmatter to the file with `locale` properties (or create your custom ones in `content.config.ts`).

## Setup

> **Note**: This template is designed to be used with [pnpm](https://pnpm.io/). If you prefer to use Bun, npm or yarn, you can still use this template, but some features may not work as expected.

Make sure to install the dependencies:

```bash
pnpm i
```

> If you've used the CLI tool, your .env file will be automatically created, but you still need to add your Supabase credentials. Otherwise, create a `.env` file in the root of your project and add your Supabase credentials:

```bash
# .env file
# Supabase credentials
SUPABASE_URL=https://your-supabase-url.supabase.co
SUPABASE_ANON_KEY=your-supabase-anon-key

# Jikan API credentials (optional)
NUXT_API_BASE=https://api.jikan.moe/v4
```

## Deployment

```bash
pnpm run dev
```

## Post-Setup

After setting up the project, you can start customizing it according to your needs. Make sure to check the configuration files and adjust them as necessary.

Check out the [Deployment guide](https://nuxt.com/docs/getting-started/deployment) for more information.

## Used Technologies

- [Nuxt 3](https://nuxt.com/docs/getting-started/introduction): The latest version of Nuxt.js, a powerful framework for building Vue.js applications.
- [Jikan API](https://jikan.moe/): An unofficial MyAnimeList API that provides access to anime and manga data.
- [Supabase](https://supabase.com/): An open-source Firebase alternative that provides a backend-as-a-service solution.
- [Nuxt Supdabase](https://supabase.nuxtjs.org/): A Nuxt.js module for integrating Supabase into Nuxt applications.
- [i18n](https://nuxt.com/modules/i18n): A module for internationalization and localization in Nuxt.js applications.
- [Nitro](https://nuxt.com/docs/getting-started/nitro): A server engine for Nuxt.js that provides a lightweight and fast server-side rendering solution.
- [Vue Router](https://router.vuejs.org/): The official router for Vue.js, used for navigating between pages in a Vue.js application.
- [Pinia](https://pinia.vuejs.org/): A state management library for Vue.js applications, designed to be simple and lightweight.
- [Nuxt Content](https://content.nuxtjs.org/): A module for managing content files in Nuxt.js applications.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.
