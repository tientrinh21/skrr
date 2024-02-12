import type { PageServerLoad } from './$types'
import type { Scholarship } from '$lib/types'

export const load = (async ({ locals, url }) => {
	const page = Number(url.searchParams.get('page')) || 1
	// const page = Number(url.searchParams.get('page')) || 1

	const scholarships = await locals.pb.collection('scholarships').getList<Scholarship>(page, 10, {
		sort: 'duration',
	})

	return { scholarships }
}) satisfies PageServerLoad
