<script lang="ts">
	import * as Card from '$lib/components/ui/card'
	import { Input } from '$lib/components/ui/input'
	import { Label } from '$lib/components/ui/label'
	import { Button } from '$lib/components/ui/button'
</script>

<Card.Root>
	<Card.Header>
		<Card.Title>Resigter</Card.Title>
		<Card.Description
			>After filling your info, press Register to create account.</Card.Description
		>
	</Card.Header>
	<Card.Content class="space-y-3">
		<div class="space-y-2">
			<Label for="register-username">Username</Label>
			<Input id="register-username" />
		</div>
		<div class="space-y-2">
			<Label for="register-email">Email</Label>
			<Input id="register-email" type="email" />
		</div>
		<div class="space-y-2">
			<Label for="register-password">Password</Label>
			<Input id="register-password" type="password" />
		</div>
	</Card.Content>
	<Card.Footer class="flex flex-col gap-2 sm:flex-row sm:justify-between">
		<Button class="w-full sm:order-2 sm:w-2/3">Register</Button>
		<Button variant="outline" class="w-full sm:order-1 sm:w-1/3">Clear</Button>
	</Card.Footer>
</Card.Root>
