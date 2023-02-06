<script lang="ts">
  import { Page, Button, setNotice } from '@silintl/ui-components'
</script>

<Page>
  <h1>Sveltekit + UI Components Template</h1>

  <Button raised on:click={() => setNotice('hi')}>Click me!</Button>
</Page>
