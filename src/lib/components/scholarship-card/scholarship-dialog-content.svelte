<script lang="ts">
	import * as Dialog from '$lib/components/ui/dialog'
	import { Badge } from '$lib/components/ui/badge'
	import { Button } from '$lib/components/ui/button'
	import { badgeOutputForMultipleChoicesRequirement } from '@/lib/utils'
	import type { Scholarship } from '$lib/types'
	import { mediaQuery } from 'svelte-legos'

	export let scholarship: Scholarship

	const isMobile = mediaQuery('(max-width: 640px)')

	const durationFormated = new Date(scholarship.duration).toLocaleString('ko-KR', {
		year: '2-digit',
		month: 'long',
		day: 'numeric',
		hour: 'numeric',
		minute: 'numeric',
		timeZone: 'UTC',
	})

	const gradeLevelBadgeOutput = badgeOutputForMultipleChoicesRequirement({
		array: scholarship.grade_level,
		unit: '학년',
	})

	const incomeRequirementBageOutput = badgeOutputForMultipleChoicesRequirement({
		array: scholarship.income_requirement,
		unit: '구간',
	})
</script>

<Dialog.Header class="m-3 space-y-3">
	<Dialog.Title class="text-base sm:text-xl">{scholarship.company_name}</Dialog.Title>
	<Dialog.Description>
		<div class="flex justify-center text-sm sm:justify-start sm:text-base">
			<Badge variant="destructive" class="mr-2 hover:bg-destructive sm:text-sm sm:leading-4">
				Deadline
			</Badge>{durationFormated}
		</div>
	</Dialog.Description>
</Dialog.Header>

<!-- Dialog Body -->
<div class="mx-3 grid gap-4">
	<h2 class="text-base font-bold sm:text-lg">
		{$isMobile ? 'Scholarship Requirement' : 'Scholarship Info'}
	</h2>
	<div class="flex items-center justify-start gap-1.5">
		<h3
			class="mr-5 block w-24 place-self-start underline decoration-primary decoration-dashed decoration-[3px] underline-offset-[6px] sm:w-52"
		>
			University
		</h3>

		<div class="flex flex-wrap items-center justify-start gap-1.5">
			{#if scholarship.university}
				<span class="ml-1 font-bold">
					{scholarship.university}
				</span>
			{:else}
				<span class="ml-1 font-bold text-muted-foreground">무관</span>
			{/if}
		</div>
	</div>
	<div class="flex items-center justify-start gap-1.5">
		<h3
			class="mr-5 block w-24 place-self-start underline decoration-primary decoration-dashed decoration-[3px] underline-offset-[6px] sm:w-52"
		>
			Major
		</h3>

		<div class="flex flex-wrap items-center justify-start gap-1.5">
			{#if scholarship.major}
				<span class="ml-1 font-bold">
					{scholarship.major}
				</span>
			{:else}
				<span class="ml-1 font-bold text-muted-foreground">무관</span>
			{/if}
		</div>
	</div>
	<div class="flex items-center justify-start gap-1.5">
		<h3
			class="mr-5 block w-24 place-self-start underline decoration-primary decoration-dashed decoration-[3px] underline-offset-[6px] sm:w-52"
		>
			{$isMobile ? 'Grade' : 'Grade level'}
		</h3>

		<div class="flex flex-wrap items-center justify-start gap-1.5">
			{#if gradeLevelBadgeOutput.length}
				{#each gradeLevelBadgeOutput as output}
					<Badge class="bg-primary/90 hover:bg-primary/90 sm:text-base">{output}</Badge>
				{/each}
			{:else}
				<Badge class="bg-muted text-muted-foreground hover:bg-muted sm:text-base">
					무관
				</Badge>
			{/if}
		</div>
	</div>
	<div class="flex items-center justify-start gap-1.5">
		<h3
			class="mr-5 block w-24 place-self-start underline decoration-primary decoration-dashed decoration-[3px] underline-offset-[6px] sm:w-52"
		>
			{$isMobile ? 'GPA' : 'GPA requirement'}
		</h3>

		<div class="flex flex-wrap items-center justify-start gap-1.5">
			{#if scholarship.GPA_requirement > 0}
				<Badge class="bg-teal-700 hover:bg-teal-700 sm:text-base">
					&#8805; {scholarship.GPA_requirement}
				</Badge>
			{:else}
				<Badge class="bg-muted text-muted-foreground hover:bg-muted sm:text-base">
					무관
				</Badge>
			{/if}
		</div>
	</div>
	<div class="flex items-center justify-start gap-1.5">
		<h3
			class="mr-5 block w-24 place-self-start underline decoration-primary decoration-dashed decoration-[3px] underline-offset-[6px] sm:w-52"
		>
			{$isMobile ? 'Income' : 'Income requirement'}
		</h3>

		<div class="flex flex-wrap items-center justify-start gap-1.5">
			{#if incomeRequirementBageOutput.length}
				{#each incomeRequirementBageOutput as output}
					<Badge class="bg-yellow-600 hover:bg-yellow-600 sm:text-base">{output}</Badge>
				{/each}
			{:else}
				<Badge class="bg-muted text-muted-foreground hover:bg-muted sm:text-base">
					무관
				</Badge>
			{/if}
		</div>
	</div>
	<div class="flex items-center justify-start gap-1.5">
		<h3
			class="mr-5 block w-24 place-self-start underline decoration-primary decoration-dashed decoration-[3px] underline-offset-[6px] sm:w-52"
		>
			Region
		</h3>

		<div class="flex flex-wrap items-center justify-start gap-1.5">
			{#if scholarship.region}
				<span class="ml-1 font-bold">
					{scholarship.region}
				</span>
			{:else}
				<span class="ml-1 font-bold">전국</span>
			{/if}
		</div>
	</div>
	<div class="flex items-center justify-start gap-1.5">
		<h3
			class="mr-5 block w-24 place-self-start underline decoration-primary decoration-dashed decoration-[3px] underline-offset-[6px] sm:w-52"
		>
			{$isMobile ? 'Specific' : 'Specific Qualifications'}
		</h3>

		<div class="flex flex-wrap items-center justify-start gap-1.5">
			{#if scholarship.specific_qualifications}
				<span class="ml-1 max-h-20 max-w-64 truncate text-pretty font-bold">
					{scholarship.specific_qualifications}
				</span>
			{:else}
				<span class="ml-1 font-bold text-muted-foreground">없음</span>
			{/if}
		</div>
	</div>
</div>

<Dialog.Footer
	class="my-3 flex w-full flex-col items-center gap-2 self-center sm:flex-row sm:justify-between"
>
	<Button
		href={scholarship.website_url.toString()}
		target="_blank"
		variant="default"
		class="w-full max-w-72 sm:order-2 sm:w-2/5">Apply</Button
	>
	<Dialog.Close class="w-full max-w-72 sm:order-1 sm:w-1/5">
		<Button type="button" variant="secondary" class="w-full">Close</Button>
	</Dialog.Close>
</Dialog.Footer>
