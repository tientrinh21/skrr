<script lang="ts">
	import '../app.pcss'
	import { ModeWatcher } from 'mode-watcher'
	import { Navbar } from '$lib/components/nav'
</script>

<ModeWatcher />
<Navbar />
<main class="p-5 md:px-10">
	<slot />
</main>
