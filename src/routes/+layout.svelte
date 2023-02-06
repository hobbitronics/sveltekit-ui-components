<script lang="ts">
  import '../lib/_index.scss'
  import Footer from '../lib/Footer.svelte'
  import { Snackbar } from '../../node_modules/@silintl/ui-components/index.mjs'
</script>

<slot />

<Footer />

<Snackbar />
