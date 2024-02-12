import type { RequestHandler } from './$types'
import type { User } from '$lib/types'
import { redirect } from '@sveltejs/kit'

export const GET: RequestHandler = ({ locals }) => {
	locals.pb.authStore.clear()
	locals.user = <User>{}

	redirect(303, '/')
}
