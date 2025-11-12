# Robust Nuxt Template

This project is a Nuxt 3 application template with TypeScript support. It includes a basic navigation setup, some utility components, Supabase integration with auth form + page ready to use, and **full cross-platform support with Capacitor** for building native iOS and Android applications from your web app.

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
- `android/`: Contains Android-specific native code and resources.
    - `app/`: Main Android application module.
    - `gradle/`: Gradle build system files.
    - `res/`: Android resources (icons, splash screens, etc.).
- `ios/`: (Will be created when iOS platform is added) Contains iOS-specific native code.

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
- **Cross-Platform Mobile (Capacitor)**: Build native iOS and Android applications from your web app.
    - Using [Capacitor](https://capacitorjs.com/) for cross-platform mobile development.
    - Android platform is pre-configured and ready to build.
    - iOS platform can be added with a simple command for iPhone/iPad app development.
    - Access to native device features like camera, geolocation, push notifications, and more through Capacitor plugins.
    - Live reload support during development for faster iteration.

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
SUPABASE_URL="https://your-supabase-url.supabase.co"
SUPABASE_ANON_KEY="your-supabase-anon-key"

# Jikan API credentials (optional)
NUXT_API_BASE="https://api.jikan.moe/v4"
```

## Deployment

### Web Deployment

```bash
pnpm run dev
```

### Mobile Deployment with Capacitor

This template includes full Capacitor support for building native mobile applications. The Android platform is pre-configured and ready to use.

#### Android Setup

1. **Build the web app for production:**

    ```bash
    pnpm run build
    ```

2. **Sync Capacitor platforms:**

    ```bash
    npx cap sync android
    ```

3. **Open Android Studio:**

    ```bash
    npx cap open android
    ```

    Or alternatively, you can launch Android Studio and open the `android` folder as project.

4. **Build and run in Android Studio:**
    - Connect your Android device or use an emulator
    - Click "Run" in Android Studio to build and install the app

#### iOS Setup (if needed)

1. **Add iOS platform:**

    ```bash
    npx cap add ios
    ```

2. **Build the web app and sync:**

    ```bash
    pnpm run build
    npx cap sync ios
    ```

3. **Open Xcode:**

    ```bash
    npx cap open ios
    ```

4. **Build and run in Xcode:**
    - Select your iOS device or simulator
    - Click "Run" in Xcode to build and install the app

#### Live Reload for Development

For faster development with live reload:

```bash
# Start dev server
pnpm run dev

# In another terminal, sync changes to mobile
npx cap copy
npx cap sync
```

The app will automatically reload when you make changes to your web code.

## Post-Setup

After setting up the project, you can start customizing it according to your needs. Make sure to check the configuration files and adjust them as necessary.

Check out the [Deployment guide](https://nuxt.com/docs/getting-started/deployment) for more information.

## Mobile App Configuration

### Capacitor Configuration

The mobile app configuration is managed through `capacitor.config.ts`. Key settings include:

- **appId**: Unique identifier for your app (e.g., `com.innosan.nuxt.template`)
- **appName**: Display name of your app
- **webDir**: Output directory for the built web app (`.output/public`)

### Adding Native Features

Capacitor provides access to native device features through plugins. To add new native functionality:

1. Install the desired Capacitor plugin:

    ```bash
    pnpm add @capacitor/camera  # Example for camera access
    ```

2. Import and use the plugin in your Vue components:

    ```typescript
    import { Camera } from "@capacitor/camera";

    const takePicture = async () => {
    	const image = await Camera.getPhoto({
    		quality: 90,
    		allowEditing: true,
    		resultType: CameraResultType.Uri,
    	});
    	// Handle the image
    };
    ```

3. Sync the changes to your mobile platforms:
    ```bash
    npx cap sync
    ```

### Platform-Specific Customization

#### Android Customization

- **App Icon**: Replace files in `android/app/src/main/res/` for different screen densities
- **Splash Screen**: Customize `android/app/src/main/res/drawable/splash.png`
- **App Name**: Modify `android/app/src/main/res/values/strings.xml`
- **Permissions**: Add required permissions in `android/app/src/main/AndroidManifest.xml`

#### iOS Customization

After adding the iOS platform:

- **App Icon**: Add icons through Xcode asset catalogs
- **App Name**: Modify in Xcode project settings
- **Permissions**: Add usage descriptions in `ios/App/Info.plist`

### Testing on Device

For the best development experience:

1. **Android**: Use USB debugging with a physical device for accurate testing
2. **iOS**: Test on actual iOS devices, as simulators don't accurately represent performance
3. **Responsive Testing**: Use browser developer tools to test various screen sizes

## Used Technologies

### Web Technologies

- [Nuxt 3](https://nuxt.com/docs/getting-started/introduction): The latest version of Nuxt.js, a powerful framework for building Vue.js applications.
- [Vue Router](https://router.vuejs.org/): The official router for Vue.js, used for navigating between pages in a Vue.js application.
- [Pinia](https://pinia.vuejs.org/): A state management library for Vue.js applications, designed to be simple and lightweight.
- [Nitro](https://nuxt.com/docs/getting-started/nitro): A server engine for Nuxt.js that provides a lightweight and fast server-side rendering solution.

### Mobile Technologies

- [Capacitor](https://capacitorjs.com/): Cross-platform mobile development framework for building native iOS and Android applications.
- [@capacitor/core](https://capacitorjs.com/docs/core): Core Capacitor APIs for accessing native device functionality.
- [@capacitor/android](https://capacitorjs.com/docs/android): Android-specific Capacitor implementation.
- [@capacitor/cli](https://capacitorjs.com/docs/cli): Command-line interface for Capacitor development.

### Backend & Data

- [Supabase](https://supabase.com/): An open-source Firebase alternative that provides a backend-as-a-service solution.
- [Nuxt Supdabase](https://supabase.nuxtjs.org/): A Nuxt.js module for integrating Supabase into Nuxt applications.
- [Jikan API](https://jikan.moe/): An unofficial MyAnimeList API that provides access to anime and manga data.

### Content & Internationalization

- [Nuxt Content](https://content.nuxtjs.org/): A module for managing content files in Nuxt.js applications.
- [i18n](https://nuxt.com/modules/i18n): A module for internationalization and localization in Nuxt.js applications.

### Styling & Development Tools

- [Tailwind CSS](https://tailwindcss.com/): A utility-first CSS framework for rapidly building custom user interfaces.
- [TypeScript](https://www.typescriptlang.org/): A typed superset of JavaScript that compiles to plain JavaScript.
- [Nuxt UI](https://ui.nuxt.com/): Component library for Nuxt applications with beautiful and accessible UI components.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.
