import type { PageServerLoad, Actions } from './$types'
import { fail, redirect } from '@sveltejs/kit'
import { superValidate } from 'sveltekit-superforms/server'
import { loginSchema, registerSchema } from '$lib/schema'

export const load = (async ({ locals }) => {
	locals.pb.authStore.isValid && redirect(303, '/scholarships')

	// Different schemas, so no id required.
	const loginForm = await superValidate(loginSchema)
	const registerForm = await superValidate(registerSchema)

	// Return them both
	return { loginForm, registerForm }
}) satisfies PageServerLoad

export const actions: Actions = {
	login: async ({ request, locals }) => {
		const loginForm = await superValidate(request, loginSchema)

		if (!loginForm.valid) return fail(400, { loginForm })

		// TODO: Login user
		try {
			await locals.pb
				.collection('users')
				.authWithPassword(loginForm.data.username, loginForm.data.password)
		} catch (err) {
			console.log('Error:', err)
			return fail(400, { loginForm })
		}

		return { loginForm }
	},

	register: async ({ request, locals }) => {
		const registerForm = await superValidate(request, registerSchema)

		if (!registerForm.valid) return fail(400, { registerForm })

		// TODO: Register user
		try {
			const record = await locals.pb
				.collection('users')
				.create({ name: registerForm.data.username, ...registerForm.data })

			console.log(record)
		} catch (err) {
			console.error('Error:', err)
			return fail(400, { registerForm })
		}

		return { registerForm }
	},
}
