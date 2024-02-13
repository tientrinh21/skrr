<script lang="ts">
	import * as Pagination from '$lib/components/ui/pagination'
	import { ChevronLeft, ChevronRight } from 'radix-icons-svelte'
	import { goto } from '$app/navigation'
	import { page } from '$app/stores'
	import { mediaQuery } from 'svelte-legos'

	export let totalItems: number
	export let perPage: number
	export let pageNumber: number

	const isMobile = mediaQuery('(max-width: 640px)')
	$: siblingCount = $isMobile ? 0 : 1
</script>

<Pagination.Root
	count={totalItems}
	{perPage}
	page={pageNumber}
	{siblingCount}
	let:pages
	let:currentPage
	onPageChange={async (pageChange) => {
		const url = new URL($page.url)
		url.searchParams.set('page', pageChange.toString())
		await goto(url, { noScroll: true })
	}}
>
	<Pagination.Content>
		<Pagination.Item>
			<Pagination.PrevButton>
				<ChevronLeft class="h-4 w-4" />
				<span class="hidden sm:block">Previous</span>
			</Pagination.PrevButton>
		</Pagination.Item>
		{#each pages as page (page.key)}
			{#if page.type === 'ellipsis'}
				<Pagination.Item>
					<Pagination.Ellipsis />
				</Pagination.Item>
			{:else}
				<Pagination.Item>
					<Pagination.Link {page} isActive={currentPage === page.value}>
						{page.value}
					</Pagination.Link>
				</Pagination.Item>
			{/if}
		{/each}
		<Pagination.Item>
			<Pagination.NextButton>
				<span class="hidden sm:block">Next</span>
				<ChevronRight class="h-4 w-4" />
			</Pagination.NextButton>
		</Pagination.Item>
	</Pagination.Content>
</Pagination.Root>
