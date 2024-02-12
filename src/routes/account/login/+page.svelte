<script lang="ts">
	import { RegisterLoginTabs } from '$lib/components/register-login'
	import { Toaster } from '$lib/components/ui/sonner'
	import type { PageData } from './$types'
	import { afterNavigate } from '$app/navigation'
	import { toast } from 'svelte-sonner'

	export let data: PageData

	afterNavigate(({ from, type }) => {
		// console.log(type)
		if (from?.route.id !== '/account/login' && (type === 'goto' || type === 'enter'))
			toast('Please login to find scholarships just for you 📖')
	})
</script>

<div class="grid place-items-center">
	<RegisterLoginTabs loginForm={data.loginForm} registerForm={data.registerForm} />
</div>

<Toaster richColors closeButton />
