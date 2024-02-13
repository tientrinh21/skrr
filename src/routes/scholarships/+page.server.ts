import type { PageServerLoad } from './$types'
import type { Scholarship } from '$lib/types'

export const load = (async ({ locals, url }) => {
	const page = Number(url.searchParams.get('page')) || 1

	// Filter
	const income = url.searchParams.get('income') || undefined
	const grade = url.searchParams.get('grade') || undefined
	const gpa = Number(url.searchParams.get('gpa')) || undefined
	const id = url.searchParams.get('id') || undefined

	const incomeFilter = income
		? `&& (income_requirement ~ '' || income_requirement ~ '${income}')`
		: ''
	const gradeFilter = grade ? `&& (grade_level ~ '' || grade_level ~ '${grade}')` : ''
	const gpaFilter = gpa ? `&& GPA_requirement <= ${gpa}` : ''
	const idFilter = id ? `&& id = '${id}'` : ''

	const filter: string = `duration > @now ${incomeFilter} ${gradeFilter} ${gpaFilter} ${idFilter}`

	// Fetch data
	const scholarships = await locals.pb.collection('scholarships').getList<Scholarship>(page, 10, {
		filter: filter,
		sort: 'duration',
	})

	return { scholarships }
}) satisfies PageServerLoad
