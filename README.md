# SvelteKit with @silintl/ui-components preinstalled

## Importing Componentes

You can now import components directly from @silintl/ui-components eg: `import { Button} from '@silintl/ui-components'`

## Typescript

Just use `lang="ts"` in your script tags

## Testing

playwright is preinstalled for testing.

## Prettier

Pretter is preinstalled for formatting
run `npm run format` to format all the files.

## Theming

See `./src/lib/_theme.scss` and modify to your needs

## Typography

See `./src/lib/_typography.scss` and modify to your needs

## Crafting your own components

Add them to /lib and import them.

## ENV Vars

vars from `.env` can be imported like so:
`import { PUBLIC_ENV } from '$env/static/public'`
`import { PRIVATE_ENV } from '$env/static/private'`
but private vars need to be imported from a file in `/lib/server` or <filename>.server.ts (or .js) files such as +page.server.ts.