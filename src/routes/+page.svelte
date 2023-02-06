<script lang="ts">
  import { Page, Button, setNotice } from '@silintl/ui-components'

  /** @type {import('./$types').PageData} */
  export let data: { detail: string }
</script>

<Page>
  <h1>Sveltekit + UI Components Template</h1>

  <Button raised on:click={() => setNotice(data?.detail)}>Click me!</Button>
</Page>
