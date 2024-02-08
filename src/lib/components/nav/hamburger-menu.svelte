<script lang="ts">
	import { page } from '$app/stores'
	import { cn } from '$lib/utils'
	import { Button } from '$lib/components/ui/button'
	import * as DropdownMenu from '$lib/components/ui/dropdown-menu'
	import { HamburgerMenu } from 'radix-icons-svelte'
	import { navItems } from '.'

	let className: string | undefined | null = undefined
	export { className as class }
</script>

<DropdownMenu.Root>
	<DropdownMenu.Trigger asChild let:builder>
		<Button builders={[builder]} variant="outline" size="icon" class={className}>
			<HamburgerMenu class="h-[1.2rem] w-[1.2rem]" />
			<span class="sr-only">Menu</span>
		</Button>
	</DropdownMenu.Trigger>
	<DropdownMenu.Content align="start" class="w-36">
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
	</DropdownMenu.Content>
</DropdownMenu.Root>
