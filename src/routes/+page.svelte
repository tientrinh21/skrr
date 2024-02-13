<script lang="ts">
	import { Button } from '$lib/components/ui/button'
</script>

<!-- <h1
	class="my-10 text-center text-2xl font-bold underline decoration-primary decoration-wavy decoration-[3px] underline-offset-[6px]"
>
	Home
</h1> -->

<div
	class="z-10 flex w-[90%] max-w-[60rem] flex-col justify-center gap-10 lg:mt-0 lg:flex-row lg:gap-12"
>
	<div class="z-10 grid place-items-center gap-7 lg:gap-0">
		<div class="grid gap-4 text-center font-extrabold">
			<span class="text-xl sm:text-2xl lg:text-[1.75rem] lg:leading-8">
				Finding
				<span class="text-primary">scholarships</span> is hard?
			</span>
			<span class="text-2xl sm:text-3xl lg:text-[1.9rem]">
				<span class="mr-1 text-2xl text-primary sm:text-3xl lg:text-4xl">SKrr</span>{' '}
				has the perfect ones
				<br />
				<span
					class="underline decoration-primary decoration-wavy decoration-[3px] underline-offset-[6px] lg:decoration-[5px] lg:underline-offset-[10px]"
				>
					just for you.
				</span>
			</span>
		</div>
		<Button href="/account/login" class="w-1/2 min-w-max lg:w-full lg:place-self-start"
			>Find your scholarships</Button
		>
	</div>
	<div
		class="fixed bottom-0 left-0 mx-auto grid h-auto w-full max-w-96 translate-x-[50%] translate-y-[30%] place-items-center justify-center overflow-hidden sm:static md:translate-x-0 md:translate-y-0"
	>
		<img src="/hero.svg" alt="Hero" class="mx-0 w-[22rem]" />
	</div>
</div>
<footer class="absolute bottom-8 left-10 text-base sm:left-auto">
	SKrr - &copy; {new Date().getFullYear()}
</footer>
<div class="absolute bottom-0 z-0 h-full w-full bg-gradient-to-t from-primary/20 to-95%" />
