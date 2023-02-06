<script lang="ts">
  import '../lib/_index.scss'
  import Footer from '../lib/Footer.svelte'
  import { Snackbar } from '@silintl/ui-components'
</script>

<slot />

<Footer />

<Snackbar />
