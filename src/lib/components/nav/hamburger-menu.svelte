<script lang="ts">
	import { page } from '$app/stores'
	import { cn } from '$lib/utils'
	import { navItems } from '.'
	import { isEmptyObj } from '$lib/utils'
	import { isRegisterOrLogin } from '$lib/components/register-login'
	import * as DropdownMenu from '$lib/components/ui/dropdown-menu'
	import * as Avatar from '$lib/components/ui/avatar'
	import { Button } from '$lib/components/ui/button'
	import { HamburgerMenu, Cross2, Exit, Person } from 'radix-icons-svelte'
	import type { User } from '$lib/types'

	let className: string | undefined | null = undefined
	export { className as class }

	let open = false

	$: user = $page.data.user as User
	$: avatarUrl = user.avatar
		? `https://skrr.pockethost.io/api/files/_pb_users_auth_/${user.id}/${user.avatar}`
		: 'https://github.com/shadcn.png'
</script>

<DropdownMenu.Root {open} onOpenChange={() => (open = !open)}>
	<DropdownMenu.Trigger asChild let:builder>
		<Button builders={[builder]} variant="secondary" size="icon" class={className}>
			{#if !open}
				{#if isEmptyObj(user)}
					<HamburgerMenu class="h-[1.2rem] w-[1.2rem]" />
				{:else}
					<Avatar.Root class="h-6 w-6">
						<Avatar.Image src={avatarUrl} alt={`@${user.username}`} />
						<Avatar.Fallback>{user.name[0]}</Avatar.Fallback>
					</Avatar.Root>
				{/if}
			{:else}
				<Cross2 class="h-[1.2rem] w-[1.2rem]" />
			{/if}
			<span class="sr-only">Menu</span>
		</Button>
	</DropdownMenu.Trigger>
	<DropdownMenu.Content align="center" class="w-56">
		{#each navItems as { path, title }}
			<a
				href={path}
				class={cn(
					'text-sm font-medium transition-colors',
					$page.url.pathname === path && 'font-bold text-primary',
				)}
			>
				<DropdownMenu.Item class="data-[highlighted]:text-inherit">
					{title}
				</DropdownMenu.Item>
			</a>
		{/each}
		{#if isEmptyObj(user)}
			<a
				href="/account/login"
				class={cn('bg-primary text-sm font-medium transition-colors')}
				on:click={() => ($isRegisterOrLogin = 'register')}
			>
				<DropdownMenu.Item
					class="mt-2 justify-center bg-primary text-secondary dark:text-secondary-foreground"
				>
					Register
				</DropdownMenu.Item>
			</a>
			<a
				href="/account/login"
				class={cn('text-sm font-medium transition-colors')}
				on:click={() => ($isRegisterOrLogin = 'login')}
			>
				<DropdownMenu.Item class="mb-1 mt-1.5 justify-center bg-secondary">
					Login
				</DropdownMenu.Item>
			</a>
		{:else}
			<DropdownMenu.Separator />
			<a href="/account" class={cn('text-sm font-medium transition-colors')}>
				<DropdownMenu.Item class="space-x-1"
					><Person /><span>Account</span></DropdownMenu.Item
				>
			</a>
			<a
				href="/account/logout"
				class={cn('text-sm font-medium text-destructive transition-colors')}
			>
				<DropdownMenu.Item class="space-x-1"><Exit /><span>Logout</span></DropdownMenu.Item>
			</a>
		{/if}
	</DropdownMenu.Content>
</DropdownMenu.Root>
