<script lang="ts">
	import * as Card from '$lib/components/ui/card'
	import * as Form from '$lib/components/ui/form'
	import { loginSchema, type LoginSchema } from '$lib/schema'
	import { toast } from 'svelte-sonner'
	import { goto } from '$app/navigation'
	import type { SuperValidated } from 'sveltekit-superforms'
	import type { FormOptions } from 'formsnap'

	export let form: SuperValidated<LoginSchema>

	const options: FormOptions<LoginSchema> = {
		onSubmit() {
			toast('Loging in...')
		},
		async onResult({ result }) {
			if (result.status === 400) toast.error('Error!')
			if (result.status === 200) {
				toast.success('Done')
				await goto('/scholarships')
			}
		},
	}
</script>

<Form.Root
	schema={loginSchema}
	{form}
	{options}
	method="POST"
	action="?/login"
	let:config
	debug={false}
>
	<Card.Root class="shadow-md shadow-primary/80 dark:shadow-primary/70">
		<Card.Header>
			<Card.Title>Login</Card.Title>
			<Card.Description>Enter your login information here.</Card.Description>
		</Card.Header>
		<Card.Content class="space-y-3">
			<Form.Field {config} name="username">
				<Form.Item class="space-y-2">
					<Form.Label>Username / Email</Form.Label>
					<Form.Input />
					<Form.Validation />
				</Form.Item>
			</Form.Field>
			<Form.Field {config} name="password">
				<Form.Item class="space-y-2">
					<Form.Label>Password</Form.Label>
					<Form.Input type="password" />
					<Form.Validation />
				</Form.Item>
			</Form.Field>
		</Card.Content>
		<Card.Footer class="flex flex-col gap-2 sm:flex-row sm:justify-between">
			<Form.Button type="submit" class="w-full sm:order-2 sm:w-2/3">Login</Form.Button>
			<Form.Button type="reset" variant="outline" class="w-full sm:order-1 sm:w-1/3">
				Clear
			</Form.Button>
		</Card.Footer>
	</Card.Root>
</Form.Root>
