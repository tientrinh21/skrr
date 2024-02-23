<script lang="ts">
	import * as Form from '$lib/components/ui/form'
	import { page } from '$app/stores'
	import { accountSchema, type AccountSchema } from '@/lib/schema'
	import type { SuperValidated } from 'sveltekit-superforms'
	import type { User } from '$lib/types'
	import { goto } from '$app/navigation'
	import type { FormOptions } from 'formsnap'
	import { toast } from 'svelte-sonner'

	export let form: SuperValidated<AccountSchema>

	$: user = $page.data.user as User

	const gradeSelections = [
		{ label: '1학년', value: '1' },
		{ label: '2학년', value: '2' },
		{ label: '3학년', value: '3' },
		{ label: '4학년', value: '4' },
		{ label: '휴학', value: '휴학' },
		{ label: '졸업', value: '졸업' },
		{ label: '대학원', value: '대학원' },
	]
	const incomeSelections = [
		{ label: '기초생활수급', value: '기초수급' },
		{ label: '1구간', value: '1' },
		{ label: '2구간', value: '2' },
		{ label: '3구간', value: '3' },
		{ label: '4구간', value: '4' },
		{ label: '5구간', value: '5' },
		{ label: '6구간', value: '6' },
		{ label: '7구간', value: '7' },
		{ label: '8구간', value: '8' },
		{ label: '9구간', value: '9' },
		{ label: '10구간', value: '10' },
	]

	// Form options
	const options: FormOptions<AccountSchema> = {
		onSubmit() {
			toast('Updating info...')
		},
		async onResult({ result }) {
			if (result.status === 400) toast.error('Error!')
			if (result.status === 406) toast.error('At least one of the field should be filled in.')
			if (result.status === 422) toast.error('GPA should be a positive number.')
			if (result.status === 200) {
				toast.success('Done')
				await goto('/account', { noScroll: true })
			}
		},
	}
</script>

<Form.Root
	{form}
	{options}
	schema={accountSchema}
	let:config
	method="POST"
	class="mb-8 space-y-8 md:mb-10 md:px-5 lg:px-10 lg:py-5"
	debug={false}
>
	<Form.Item>
		<Form.Field {config} name="name">
			<Form.Label class="text-base">Name</Form.Label>
			<Form.Input placeholder={`${user.name} (current)`} />
			<Form.Validation />
		</Form.Field>
	</Form.Item>
	<Form.Item>
		<Form.Field {config} name="university">
			<Form.Label>University</Form.Label>
			<Form.Input
				placeholder={user.university
					? `${user.university} (current)`
					: '연세대학교 / 성균관대학교 / etc.'}
			/>
			<Form.Validation />
		</Form.Field>
	</Form.Item>
	<Form.Item>
		<Form.Field {config} name="major">
			<Form.Label>Major</Form.Label>
			<Form.Input placeholder="경영회계정보과 / 컴퓨터공학과 / etc." />
			<Form.Validation />
		</Form.Field>
	</Form.Item>
	<Form.Item>
		<Form.Field {config} name="grade" let:attrs>
			{@const { value } = attrs.input}
			<Form.Label>Grade</Form.Label>
			<Form.Select>
				<Form.SelectTrigger placeholder="Please select your academic level" />
				<Form.SelectContent>
					{#each gradeSelections as selection}
						<Form.SelectItem value={selection.value} label={selection.label}>
							{selection.label}
						</Form.SelectItem>
					{/each}
				</Form.SelectContent>
			</Form.Select>
			<Form.Validation />
		</Form.Field>
	</Form.Item>
	<Form.Item>
		<Form.Field {config} name="gpa">
			<Form.Label>GPA</Form.Label>
			<Form.Input placeholder={`${user.gpa.toFixed(1)} (current)`} />
			<Form.Validation />
		</Form.Field>
	</Form.Item>
	<Form.Item>
		<Form.Field {config} name="income">
			<Form.Label>Income</Form.Label>
			<Form.Select>
				<Form.SelectTrigger placeholder="Please select your income" />
				<Form.SelectContent>
					{#each incomeSelections as selection}
						<Form.SelectItem value={selection.value} label={selection.label}>
							{selection.label}
						</Form.SelectItem>
					{/each}
				</Form.SelectContent>
			</Form.Select>
			<Form.Validation />
		</Form.Field>
	</Form.Item>
	<Form.Item>
		<Form.Field {config} name="region">
			<Form.Label>Region</Form.Label>
			<Form.Input
				placeholder={user.region ? `${user.region} (current)` : '서울 / 경기 / etc.'}
			/>
			<Form.Validation />
		</Form.Field>
	</Form.Item>
	<div class="flex gap-2">
		<Form.Button class="order-2" type="submit">Update info</Form.Button>
		<Form.Button class="order-1" variant="outline" type="reset">Clear</Form.Button>
	</div>
</Form.Root>
