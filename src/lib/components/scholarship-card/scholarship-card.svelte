<script lang="ts">
	import * as Dialog from '$lib/components/ui/dialog'
	import { ScholarshipTrigger, ScholarshipDialogContent } from '.'
	import type { Scholarship } from '$lib/types'

	export let scholarship: Scholarship
</script>

<Dialog.Root closeOnOutsideClick={false}>
	<Dialog.Trigger>
		<ScholarshipTrigger {scholarship} />
	</Dialog.Trigger>

	<Dialog.Content class="flex w-[90%] max-w-[40rem] flex-col rounded-lg md:w-[85%]">
		<ScholarshipDialogContent {scholarship} />
	</Dialog.Content>
</Dialog.Root>
