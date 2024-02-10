<script lang="ts">
	import { RegisterLoginTabs } from '$lib/components/register-login'

	// import type { PageData } from '../account/$types'
	// export let data: PageData

	let isAuthenticated = false
</script>

{#if !isAuthenticated}
	<div class="mt-24 grid justify-center">
		<RegisterLoginTabs />
	</div>
{/if}
