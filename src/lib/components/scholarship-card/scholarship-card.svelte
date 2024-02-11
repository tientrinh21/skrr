<script lang="ts">
	import * as Card from '../ui/card'
	import { Badge } from '$lib/components/ui/badge'

	export let companyName: string
	export let duration: Date
	export let gradeLevel: string[]

	const durationFormated = new Date(duration).toLocaleString('ko-KR', {
		year: '2-digit',
		month: 'long',
		day: 'numeric',
		hour: 'numeric',
		minute: 'numeric',
		timeZone: 'UTC',
	})

	const yearLevel: number[] = gradeLevel
		.map((level) => parseInt(level))
		.filter((year) => !isNaN(year))
</script>

<Card.Root
	class="cursor-pointer border-2 shadow hover:shadow-md hover:shadow-primary/80  dark:shadow-muted dark:hover:shadow-primary"
>
	<Card.Header class="space-y-3">
		<Card.Title class="text-base">{companyName}</Card.Title>
		<Card.Description class="flex flex-col justify-between gap-1.5 xl:flex-row">
			<div>
				<Badge variant="destructive" class="mr-2 hover:bg-destructive">Deadline</Badge
				>{durationFormated}
			</div>
			<div class="flex justify-start gap-1.5">
				{#if yearLevel.length >= 2}
					<Badge class="bg-primary/90 hover:bg-primary/90">
						{`${Math.min(...yearLevel)}~${Math.max(...yearLevel)} 학년`}
					</Badge>
				{:else if yearLevel.length === 1}
					<Badge class="bg-primary/90 hover:bg-primary/90">
						{`${yearLevel[0]} 학년`}
					</Badge>
				{/if}

				{#each gradeLevel as level}
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
