<script lang="ts">
	import { RegisterLoginTabs } from '$lib/components/register-login'
	import type { PageData } from './$types'
	import { afterNavigate } from '$app/navigation'
	import { toast } from 'svelte-sonner'
	import { isRedirect } from '@sveltejs/kit'

	export let data: PageData

	afterNavigate(({ from, type }) => {
		if (from?.route.id !== '/account/login' && (type === 'goto' || type === 'enter'))
			toast('Please login to find scholarships just for you 📖')
	})
</script>

<div class="grid w-full place-items-center">
	<RegisterLoginTabs loginForm={data.loginForm} registerForm={data.registerForm} />
</div>
