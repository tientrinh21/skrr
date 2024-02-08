<script lang="ts">
	import { page } from '$app/stores'
</script>

<h1
	class="absolute bottom-1/2 right-1/2 translate-x-1/2 translate-y-1/2 text-center text-xl font-bold text-primary"
>
	{$page.status}: {$page.error?.message}
</h1>
