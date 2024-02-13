import type { PageServerLoad } from './$types'
import type { Scholarship } from '$lib/types'
import { generateFilterParam } from '@/lib/utils'

export const load = (async ({ locals, url }) => {
	// Search params
	const income = url.searchParams.get('income')
	const grade = url.searchParams.get('grade')
	const gpa = Number(url.searchParams.get('gpa'))
	const id = url.searchParams.get('id')

	const page = Number(url.searchParams.get('page')) || 1
	const filter = generateFilterParam({ income, grade, gpa, id })

	// Fetch data
	const scholarships = await locals.pb.collection('scholarships').getList<Scholarship>(page, 10, {
		// filter,
		sort: 'duration',
	})

	return { scholarships }
}) satisfies PageServerLoad
