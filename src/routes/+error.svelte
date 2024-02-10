<script lang="ts">
	import { page } from '$app/stores'
</script>

<div class="grid h-full place-items-center">
	<h1 class="text-center text-xl font-bold">
		{$page.status}: {$page.error?.message}
	</h1>
</div>
