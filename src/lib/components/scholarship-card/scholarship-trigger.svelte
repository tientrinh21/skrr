<script lang="ts">
	import * as Card from '../ui/card'
	import { Badge } from '$lib/components/ui/badge'
	import type { Scholarship } from '$lib/types'
	import { mediaQuery } from 'svelte-legos'

	export let scholarship: Scholarship

	const isMobile = mediaQuery('(max-width: 640px)')
	$: yearFormat = $isMobile ? '2-digit' : 'numeric'
	$: durationFormated = new Date(scholarship.duration).toLocaleString('ko-KR', {
		year: yearFormat as '2-digit' | 'numeric' | undefined,
		month: 'long',
		day: 'numeric',
		hour: 'numeric',
		minute: 'numeric',
		timeZone: 'UTC',
	})

	// Filter fresmen to Final Year into array (Drop graduation, ...)
	const yearLevel: number[] = scholarship.grade_level
		.map((level) => parseInt(level))
		.filter((year) => !isNaN(year))
</script>

<Card.Root
	class="cursor-pointer border-2 shadow hover:shadow-md hover:shadow-primary/80 dark:shadow-muted dark:hover:shadow-primary"
>
	<Card.Header class="space-y-3">
		<Card.Title class="text-left text-base">{scholarship.company_name}</Card.Title>
		<Card.Description class="flex flex-col justify-between gap-1.5 xl:flex-row">
			<div class="flex justify-start">
				<Badge variant="destructive" class="mr-2 hover:bg-destructive">
					Deadline
				</Badge>{durationFormated}
			</div>
			<div class="flex justify-start gap-1.5">
				{#if yearLevel.length >= 2}
					<Badge class="bg-primary/90 hover:bg-primary/90 ">
						{`${Math.min(...yearLevel)}~${Math.max(...yearLevel)} 학년`}
					</Badge>
				{:else if yearLevel.length === 1}
					<Badge class="bg-primary/90 hover:bg-primary/90">
						{`${yearLevel[0]} 학년`}
					</Badge>
				{/if}

				{#each scholarship.grade_level as level}
					{#if !['1', '2', '3', '4'].includes(level)}
						<Badge class="bg-primary/90 hover:bg-primary/90">
							{level}
						</Badge>
					{/if}
				{/each}
			</div>
		</Card.Description>
	</Card.Header>
</Card.Root>
