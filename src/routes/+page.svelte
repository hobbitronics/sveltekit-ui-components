<script lang="ts">
  import { Page, Button, setNotice } from '../../node_modules/@silintl/ui-components/index.mjs'
  import '../lib/_index.scss'
</script>

<Page>
  <h1>Sveltekit + UI Components Template</h1>

  <Button raised on:click={() => setNotice('hi')}>Click me!</Button>
</Page>
