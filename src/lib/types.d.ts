interface Scholarship {
	company_name: string
	university: string
	major: string
	duration: Date
	grade_level: string[]
}
export type { Scholarship }

interface User {
	id: string
	username: string
	email: string
	name: string
	avatar?: string
}
export type { User }
