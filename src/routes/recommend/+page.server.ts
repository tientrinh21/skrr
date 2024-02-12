import type { PageServerLoad } from './$types'
import type { Scholarship } from '$lib/types'
import { redirect } from '@sveltejs/kit'
import { toast } from 'svelte-sonner'

export const load = (async ({ locals }) => {
	!locals.pb.authStore.isValid && redirect(303, '/account/login')

	const scholarships = await locals.pb.collection('scholarships').getList<Scholarship>(1, 10, {
		sort: 'duration',
	})

	return { scholarships }
}) satisfies PageServerLoad
