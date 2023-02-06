<script lang="ts">
  import { Page, Button, setNotice } from '@silintl/ui-components'

  export let data = {}
</script>

<Page>
  <h1>Sveltekit + UI Components Template</h1>

  <Button raised on:click={() => setNotice(data?.detail)}>Click me!</Button>
</Page>
