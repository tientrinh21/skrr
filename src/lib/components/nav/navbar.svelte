<script lang="ts">
	import { page } from '$app/stores'
	import { cn } from '$lib/utils'
	import { HamburgerMenu, ModeToggle } from '.'
	import { Button } from '$lib/components/ui/button'
	import { navItems } from '.'
	import { isRegisterOrLogin } from '$lib/components/register-login'

	let className: string | undefined | null = undefined
	export { className as class }
</script>

<nav
	class={cn(
		'mx-2 flex items-baseline justify-between gap-10 rounded-none rounded-b-xl border-2 border-t-0 p-5 shadow-md dark:shadow-muted md:mx-5 md:px-10',
		className,
	)}
>
	<div class="flex items-baseline gap-5 md:gap-10">
		<div class="flex items-baseline gap-2">
			<HamburgerMenu class="md:hidden" />
			<h1 class="cursor-pointer text-2xl font-bold text-primary hover:text-primary/90">
				<a href="/">SKrr</a>
			</h1>
		</div>
		<div class="hidden items-center space-x-5 md:flex">
			{#each navItems as { title, path }}
				<a
					href={path}
					class={cn(
						'text-sm font-medium transition-colors hover:text-muted-foreground',
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
		<Button href="/account" on:click={() => ($isRegisterOrLogin = 'register')}>Register</Button>
		<Button variant="secondary" href="/account" on:click={() => ($isRegisterOrLogin = 'login')}>
			Login
		</Button>
		<ModeToggle />
	</div>
</nav>
