import { redirect } from '@sveltejs/kit'
import type { PageServerLoad } from './$types'

export const load = (async ({ locals }) => {
	!locals.pb.authStore.isValid && redirect(303, '/account/login')

	return {}
}) satisfies PageServerLoad
