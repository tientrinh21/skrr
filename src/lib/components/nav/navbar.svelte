<script lang="ts">
	import { page } from '$app/stores'
	import { cn } from '$lib/utils'
	import { HamburgerMenu, ModeToggle } from '.'
	import { Button } from '$lib/components/ui/button'
	import { navItems } from '.'
	import { isRegisterOrLogin } from '$lib/components/register-login'
	import * as DropdownMenu from '$lib/components/ui/dropdown-menu'

	let className: string | undefined | null = undefined
	export { className as class }
</script>

<nav
	class={cn(
		'mx-2 flex items-baseline justify-between gap-10 rounded-none rounded-b-xl border-2 border-t-0 p-5 shadow-md dark:shadow-muted lg:mx-5 lg:px-10',
		className,
	)}
>
	<div class="flex items-baseline gap-5 lg:gap-12">
		<div class="flex items-baseline gap-2.5">
			<HamburgerMenu class="lg:hidden" />
			<a href="/" class="flex items-baseline gap-2">
				<img src="/skrr-logo.png" alt="SKrr logo" class="block h-9 place-self-center" />
				<h1 class="cursor-pointer text-2xl font-bold text-primary hover:text-primary/90">
					SKrr
				</h1>
			</a>
		</div>
		<div class="hidden items-center space-x-8 lg:flex">
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
	<div class="flex items-center gap-2">
		{#if !$page.data.user}
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
			<Button>User</Button>
		{/if}
		<ModeToggle />
	</div>
</nav>
