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
	<meta name="viewport" content="user-scalable=no, width=device-width, initial-scale=1.0" />
	<meta name="apple-mobile-web-app-capable" content="yes" />
</svelte:head>

<ModeWatcher defaultMode="light" />
<div class="flex h-svh flex-col">
	<Navbar />
	<main class="grid flex-auto place-items-center px-5 md:px-10">
		<slot />
	</main>
</div>
<Toaster richColors closeButton expand={!$isMobile} />
