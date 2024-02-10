<script lang="ts">
	import type { PageData } from './$types'

	export let data: PageData
</script>

<h1 class="text-center text-xl font-bold">Scholarships</h1>
{#each data.scholarships.items as scholarship}
	<h2>{scholarship.company_name}</h2>
{/each}
