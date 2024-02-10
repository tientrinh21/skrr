<script lang="ts">
	import '../app.pcss'
	import { ModeWatcher } from 'mode-watcher'
	import { Navbar } from '$lib/components/nav'
</script>

<ModeWatcher defaultMode="light" />
<div class="flex h-svh flex-col">
	<Navbar />
	<main class="flex-auto p-5 md:px-10">
		<slot />
	</main>
</div>
