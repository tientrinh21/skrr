import type { PageServerLoad, Actions } from './$types'
import { accountSchema } from '@/lib/schema'
import { superValidate } from 'sveltekit-superforms/server'
import { fail, redirect } from '@sveltejs/kit'
import { checkForAccountFormFilled, isGPAInfoValid, proccessAccountData } from '$lib/utils'

export const load = (async ({ locals }) => {
	!locals.pb.authStore.isValid && redirect(303, '/account/login')

	const form = await superValidate(accountSchema)
	return { form }
}) satisfies PageServerLoad

export const actions: Actions = {
	default: async ({ request, locals }) => {
		const form = await superValidate(request, accountSchema)

		if (!form.valid) return fail(400, { form })
		if (!checkForAccountFormFilled(form.data)) return fail(406, { form })

		// Pass if undefined (not filled)
		if (form.data.gpa !== undefined && !isGPAInfoValid(form.data.gpa))
			return fail(422, { form })

		const data = proccessAccountData(form.data)
		console.log(data)

		//  Update user info
		try {
			await locals.pb.collection('users').update(locals.user.id, data)
		} catch (err) {
			console.error(err)

			return fail(400, { form })
		}

		return { form }
	},
}
