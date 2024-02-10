<script lang="ts">
	import * as Tabs from '$lib/components/ui/tabs'
	import { LoginForm, RegisterForm, isRegisterOrLogin } from '.'
</script>

<Tabs.Root
	value={$isRegisterOrLogin}
	class="w-[400px]"
	onValueChange={(val) => {
		$isRegisterOrLogin = val ?? $isRegisterOrLogin
	}}
>
	<Tabs.List class="mb-3 grid w-full grid-cols-2">
		<Tabs.Trigger value="register">Register</Tabs.Trigger>
		<Tabs.Trigger value="login">Login</Tabs.Trigger>
	</Tabs.List>
	<Tabs.Content value="register">
		<RegisterForm />
	</Tabs.Content>
	<Tabs.Content value="login">
		<LoginForm />
	</Tabs.Content>
</Tabs.Root>
