import type { PageServerLoad } from './$types'
import type { Scholarship } from '$lib/types'
import { generateFilterParam } from '@/lib/utils'
import { redirect } from '@sveltejs/kit'

export const load = (async ({ locals, url }) => {
	!locals.pb.authStore.isValid && redirect(303, '/account/login')

	// User info for filter params
	const { income, grade, gpa, university, major, region } = locals.user

	const page = Number(url.searchParams.get('page')) || 1
	const filter = generateFilterParam({ income, grade, gpa, major, region })
	console.log(filter)

	// Fetch data
	const scholarships = await locals.pb.collection('scholarships').getList<Scholarship>(page, 10, {
		filter,
		sort: 'duration',
	})

	return { scholarships }
}) satisfies PageServerLoad
