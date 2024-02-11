<script lang="ts">
	import { RegisterLoginTabs } from '$lib/components/register-login'
	import type { PageData } from './$types'

	export let data: PageData
</script>

<div class="grid h-full place-items-center">
	<RegisterLoginTabs loginForm={data.loginForm} registerForm={data.registerForm} />
</div>
