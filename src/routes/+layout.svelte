<script lang="ts">
	import '../app.pcss'
	import { ModeWatcher } from 'mode-watcher'
	import { Navbar } from '$lib/components/nav'
	import { page } from '$app/stores'

	const getTitle = (path: string): string => {
		const p = path.slice(1)
		switch (p) {
			case '':
				return 'Home'
			default:
				return `${p.charAt(0).toUpperCase()}${p.slice(1)}`
		}
	}

	$: title = getTitle($page.url.pathname)
</script>

<svelte:head>
	<title>SKrr - {title}</title>
</svelte:head>

<ModeWatcher defaultMode="light" />
<div class="flex h-svh flex-col">
	<Navbar />
	<main class="flex-auto px-5 md:px-10">
		<slot />
	</main>
</div>
