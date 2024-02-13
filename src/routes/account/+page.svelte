<script lang="ts">
	import { AccountForm } from '$lib/components/account-form'
	import type { PageData } from './$types'

	export let data: PageData
</script>

<h1
	class="mb-10 mt-8 text-center text-2xl font-bold underline decoration-primary decoration-wavy decoration-[3px] underline-offset-[6px]"
>
	Account
</h1>

<div
	class="mb-7 grid w-full gap-5 rounded-xl border-2 px-5 pt-8 shadow-md dark:shadow-muted md:mx-5 md:px-7 md:pt-10"
>
	<AccountForm form={data.form} />
</div>
