interface Scholarship {
	id: string
	company_name: string
	university?: string
	major?: string
	duration: Date
	grade_level: string[]
	GPA_requirement: number
	income_requirement: string[]
	region?: string
	specific_qualifications?: string
	website_url: URL
}
export type { Scholarship }

interface User {
	id: string
	username: string
	email: string
	name: string
	avatar?: string
	grade: string
	gpa: number
	income: string
	university?: string
	major?: string
	region?: string
}
export type { User }
