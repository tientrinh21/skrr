<script lang="ts">
	import type { PageData } from './$types'
	import type { Scholarship } from '@/lib/types'
	import type { ListResult } from 'pocketbase'
	import { ScholarshipCard, ScholarshipPagination } from '$lib/components/scholarship-card'

	export let data: PageData

	$: ({ items, totalItems, perPage, page } = data.scholarships as ListResult<Scholarship>)
</script>

<h1
	class="mb-10 mt-8 text-center text-2xl font-bold underline decoration-primary decoration-wavy decoration-[3px] underline-offset-[6px]"
>
	Recommend me
</h1>
<div
	class="mb-10 grid gap-5 rounded-xl border-2 px-5 pt-8 shadow-md dark:shadow-muted md:mx-5 md:px-7 md:pt-10 lg:grid-cols-2"
>
	{#each items as item}
		<ScholarshipCard scholarship={item} />
	{/each}

	<div class="mb-5 mt-2 lg:col-span-2">
		<ScholarshipPagination {totalItems} {perPage} pageNumber={page} />
	</div>
</div>
