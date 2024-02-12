<script lang="ts">
	import { RegisterLoginTabs } from '$lib/components/register-login'
	import { Toaster } from '$lib/components/ui/sonner'
	import type { PageData } from './$types'

	export let data: PageData
</script>

<div class="grid place-items-center">
	<RegisterLoginTabs loginForm={data.loginForm} registerForm={data.registerForm} />
</div>

<Toaster richColors closeButton />
