<script lang="ts">
	import { page } from '$app/stores'
	import { cn } from '$lib/utils'
	import { HamburgerMenu, ModeToggle } from '.'
	import { Button } from '$lib/components/ui/button'
	import { navItems } from '.'
	import { isRegisterOrLogin } from '$lib/components/register-login'
	import * as DropdownMenu from '$lib/components/ui/dropdown-menu'
	import * as Avatar from '$lib/components/ui/avatar'
	import { isEmptyObj } from '$lib/utils'
	import { Exit, Person } from 'radix-icons-svelte'

	let className: string | undefined | null = undefined
	export { className as class }

	$: user = $page.data.user
</script>

<nav
	class={cn(
		'mx-2 flex items-baseline justify-between rounded-none rounded-b-xl border-2 border-t-0 py-3 pl-1 pr-4 shadow-md dark:shadow-muted sm:py-5 sm:pl-4 sm:pr-7 lg:mx-5 lg:px-10',
		className,
	)}
>
	<div class="flex items-baseline gap-3 lg:gap-12">
		<a href="/" class="flex gap-2 rounded-md px-3 py-2 active:bg-secondary">
			<img src="/skrr-logo.png" alt="SKrr logo" class="h-8 w-8" />
			<h1
				class="cursor-pointer self-baseline text-2xl font-bold text-primary hover:text-primary/90"
			>
				SKrr
			</h1>
		</a>
		<div class="hidden items-center space-x-8 md:flex">
			{#each navItems as { title, path }}
				<a
					href={path}
					class={cn(
						'text-base font-medium transition-colors hover:text-muted-foreground',
						$page.url.pathname === path &&
							'font-bold text-primary hover:text-primary/80',
					)}
				>
					{title}
				</a>
			{/each}
		</div>
	</div>
	<div class="flex items-center gap-1 md:hidden">
		<ModeToggle />
		<HamburgerMenu />
	</div>
	<div class="hidden items-center gap-2 md:flex">
		{#if isEmptyObj(user)}
			<Button href="/account/login" on:click={() => ($isRegisterOrLogin = 'register')}>
				Register
			</Button>
			<Button
				variant="secondary"
				href="/account/login"
				on:click={() => ($isRegisterOrLogin = 'login')}
			>
				Login
			</Button>
		{:else}
			<DropdownMenu.Root>
				<DropdownMenu.Trigger asChild let:builder>
					<Button builders={[builder]} variant="outline" class={className}>
						<span>{user.name}</span>
						<Avatar.Root class="ml-3 h-5 w-auto">
							<Avatar.Image
								src="https://github.com/shadcn.png"
								alt={`@${user.username}`}
							/>
							<Avatar.Fallback>CN</Avatar.Fallback>
						</Avatar.Root>
					</Button>
				</DropdownMenu.Trigger>
				<DropdownMenu.Content align="center" class="w-44">
					<a href="/account" class={cn('text-sm font-medium transition-colors')}>
						<DropdownMenu.Item class="space-x-1">
							<Person /><span>Account</span>
						</DropdownMenu.Item>
					</a>
					<a
						href="/account/logout"
						class={cn('text-sm font-medium text-destructive transition-colors')}
					>
						<DropdownMenu.Item class="space-x-1">
							<Exit /><span>Logout</span>
						</DropdownMenu.Item>
					</a>
				</DropdownMenu.Content>
			</DropdownMenu.Root>
		{/if}
		<ModeToggle />
	</div>
</nav>
