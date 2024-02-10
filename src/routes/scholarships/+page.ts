import type { PageLoad } from './$types'
import PocketBase from 'pocketbase'

export const load: PageLoad = async ({}) => {
	const pb = new PocketBase('https://skrr.pockethost.io')
	const scholarships = await pb.collection('scholarships').getList(1, 10, {
		sort: '-created',
	})

	return { scholarships }
}
