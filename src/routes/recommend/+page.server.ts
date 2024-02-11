import type { PageServerLoad } from './$types'
import type { Scholarship } from '$lib/types'

export const load = (async ({ locals }) => {
	const scholarships = await locals.pb.collection('scholarships').getList<Scholarship>(1, 10, {
		sort: 'duration',
	})

	return { scholarships }
}) satisfies PageServerLoad
