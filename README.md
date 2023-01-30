# SvelteKit with @silintl/ui-components preinstalled

## Importing Componentes

You will have to import components directly from node_modules for now eg: `import { Button} from '../../node_modules/@silintl/ui-components/index.mjs'`

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