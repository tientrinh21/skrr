<script lang="ts">
	import type { PageData } from './$types'
	import { Toaster } from '$lib/components/ui/sonner'

	export let data: PageData
</script>

<h1
	class="mb-10 mt-8 text-center text-2xl font-bold underline decoration-primary decoration-wavy decoration-[3px] underline-offset-[6px]"
>
	Recommend me
</h1>
<div
	class="mb-10 grid gap-5 rounded-xl border-2 px-5 pt-8 shadow-md dark:shadow-muted md:mx-5 md:px-10 md:pt-10 lg:grid-cols-2"
>
	This is recommend content
</div>
<Toaster richColors closeButton />
