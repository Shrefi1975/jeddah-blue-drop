# Welcome to your Lovable project

This project was built with [Lovable](https://lovable.dev).

## Build with Lovable

Open your project in the [Lovable editor](https://lovable.dev) and keep building.

- **Ship faster**: describe what you want to build and Lovable handles the code.
- **Stay in sync**: connect the project to GitHub and every change made in Lovable is committed straight to your repository.
- **Full ownership**: this code is yours. Push to your repository and your changes sync back into Lovable, ready for your next prompt.

## Development

Prefer working locally? You need Node.js and npm — [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating).

```sh
git clone <this-repository-url>
cd <repository-name>
npm i
npm run dev
```

## Built with

- TanStack Start
- TypeScript
- React
- Tailwind CSS

## Deploy to Netlify

The repository includes `netlify.toml`. It selects the Netlify server adapter,
uses `bun run build`, and publishes `dist/client`. Vite explicitly writes public
output to the same directory. The public home page is prerendered to HTML;
product filters, quantities, and WhatsApp links remain interactive.

Commit/sync these changes to the repository connected to Netlify, then retry
the deploy. Use the repository root as the base directory. If Netlify still
reports a missing directory, check that the deploy uses the latest commit and
that it has loaded this repository's `netlify.toml`.

These settings do not change Lovable's managed hosting output. Deployment on
the external Netlify account must be verified there after the retry.
