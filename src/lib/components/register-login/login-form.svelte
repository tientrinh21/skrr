<script lang="ts">
	import * as Card from '$lib/components/ui/card'
	import { Input } from '$lib/components/ui/input'
	import { Label } from '$lib/components/ui/label'
	import { Button } from '$lib/components/ui/button'
</script>

<Card.Root>
	<Card.Header>
		<Card.Title>Login</Card.Title>
		<Card.Description>Enter your login information here.</Card.Description>
	</Card.Header>
	<Card.Content class="space-y-3">
		<div class="space-y-2">
			<Label for="login-username">Username</Label>
			<Input id="login-username" />
		</div>
		<div class="space-y-2">
			<Label for="login-password">Password</Label>
			<Input id="login-password" type="password" />
		</div>
	</Card.Content>
	<Card.Footer class="flex flex-col gap-2 sm:flex-row sm:justify-between">
		<Button class="w-full sm:order-2 sm:w-2/3">Login</Button>
		<Button variant="outline" class="w-full sm:order-1 sm:w-1/3">Clear</Button>
	</Card.Footer>
</Card.Root>
