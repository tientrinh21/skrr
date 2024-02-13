<script lang="ts">
	import '../app.pcss'
	import { ModeWatcher } from 'mode-watcher'
	import { Toaster } from '$lib/components/ui/sonner'
	import { Navbar } from '$lib/components/nav'
	import { getRouteTitle } from '$lib/utils'
	import { page } from '$app/stores'
	import { mediaQuery } from 'svelte-legos'

	const isMobile = mediaQuery('(max-width: 640px)')

	$: title = getRouteTitle($page.url.pathname)
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
<Toaster richColors closeButton expand={!$isMobile} />
