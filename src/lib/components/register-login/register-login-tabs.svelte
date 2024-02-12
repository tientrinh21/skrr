<script lang="ts">
	import * as Tabs from '$lib/components/ui/tabs'
	import { LoginForm, RegisterForm, isRegisterOrLogin } from '.'
	import type { SuperValidated } from 'sveltekit-superforms'
	import { type LoginSchema } from '$lib/schema'

	export let loginForm: SuperValidated<LoginSchema>
	export let registerForm: SuperValidated<LoginSchema>
</script>

<Tabs.Root
	value={$isRegisterOrLogin}
	class="mb-5 mt-12 w-full max-w-[25rem] sm:mt-10"
	onValueChange={(val) => {
		$isRegisterOrLogin = val ?? $isRegisterOrLogin
	}}
>
	<Tabs.List class="mb-3 grid w-full grid-cols-2">
		<Tabs.Trigger value="register">Register</Tabs.Trigger>
		<Tabs.Trigger value="login">Login</Tabs.Trigger>
	</Tabs.List>
	<Tabs.Content value="register">
		<RegisterForm form={registerForm} />
	</Tabs.Content>
	<Tabs.Content value="login">
		<LoginForm form={loginForm} />
	</Tabs.Content>
</Tabs.Root>
