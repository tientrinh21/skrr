<script lang="ts">
	import { RegisterLoginTabs } from '$lib/components/register-login'
	import type { PageData } from './$types'
	import { afterNavigate } from '$app/navigation'
	import { toast } from 'svelte-sonner'

	export let data: PageData

	afterNavigate(({ from, type }) => {
		if (from?.route.id !== '/account/login' && (type === 'goto' || type === 'enter'))
			toast('You need to login to use Recommend me 📖')
	})
</script>

<div class="grid w-full place-items-center">
	<RegisterLoginTabs loginForm={data.loginForm} registerForm={data.registerForm} />
</div>
