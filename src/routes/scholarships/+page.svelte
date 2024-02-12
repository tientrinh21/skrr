<script lang="ts">
	import type { PageData } from './$types'
	import { ScholarshipCard } from '$lib/components/scholarship-card'
	import * as Pagination from '$lib/components/ui/pagination'
	import { ChevronLeft, ChevronRight } from 'radix-icons-svelte'
	import { goto } from '$app/navigation'
	import { page } from '$app/stores'

	export let data: PageData

	$: ({ items, totalItems, perPage, page: pageNumber } = data.scholarships)
</script>

<h1
	class="my-10 text-center text-2xl font-bold underline decoration-primary decoration-wavy decoration-[3px] underline-offset-[6px]"
>
	Scholarships
</h1>
<div
	class="mb-10 grid gap-5 rounded-xl border-2 px-5 pt-8 shadow-md dark:shadow-muted md:mx-5 md:px-10 md:pt-10 lg:grid-cols-2"
>
	{#each items as { company_name, duration, grade_level }}
		<ScholarshipCard companyName={company_name} {duration} gradeLevel={grade_level} />
	{/each}

	<div class="mb-5 mt-2 lg:col-span-2">
		<Pagination.Root
			count={totalItems}
			{perPage}
			page={pageNumber}
			siblingCount={1}
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
	</div>
</div>
