import type { LayoutServerLoad } from './$types'
import type { User } from '$lib/types'

export const load = (async ({ locals }) => {
	return { user: locals.user ?? <User>{} }
}) satisfies LayoutServerLoad
