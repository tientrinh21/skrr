import { type ClassValue, clsx } from 'clsx'
import { twMerge } from 'tailwind-merge'
import { cubicOut } from 'svelte/easing'
import type { TransitionConfig } from 'svelte/transition'
import { accountSchema } from './schema'
import { z } from 'zod'

export function cn(...inputs: ClassValue[]) {
	return twMerge(clsx(inputs))
}

type FlyAndScaleParams = {
	y?: number
	x?: number
	start?: number
	duration?: number
}

export const flyAndScale = (
	node: Element,
	params: FlyAndScaleParams = { y: -8, x: 0, start: 0.95, duration: 150 },
): TransitionConfig => {
	const style = getComputedStyle(node)
	const transform = style.transform === 'none' ? '' : style.transform

	const scaleConversion = (
		valueA: number,
		scaleA: [number, number],
		scaleB: [number, number],
	) => {
		const [minA, maxA] = scaleA
		const [minB, maxB] = scaleB

		const percentage = (valueA - minA) / (maxA - minA)
		const valueB = percentage * (maxB - minB) + minB

		return valueB
	}

	const styleToString = (style: Record<string, number | string | undefined>): string => {
		return Object.keys(style).reduce((str, key) => {
			if (style[key] === undefined) return str
			return str + `${key}:${style[key]};`
		}, '')
	}

	return {
		duration: params.duration ?? 200,
		delay: 0,
		css: (t) => {
			const y = scaleConversion(t, [0, 1], [params.y ?? 5, 0])
			const x = scaleConversion(t, [0, 1], [params.x ?? 0, 0])
			const scale = scaleConversion(t, [0, 1], [params.start ?? 0.95, 1])

			return styleToString({
				transform: `${transform} translate3d(${x}px, ${y}px, 0) scale(${scale})`,
				opacity: t,
			})
		},
		easing: cubicOut,
	}
}

export const convertPathnameToTitle = (pathname: string): string => {
	const p = pathname.slice(1)
	const title = 'SKrr - '

	switch (p) {
		case '':
			return title.concat('Home')
		default:
			return title.concat(p.charAt(0).toUpperCase(), p.slice(1))
	}
}

export const isEmptyObj = (obj: Object): boolean => {
	if (!Object.keys(obj).length) return true
	return false
}

export const badgeOutputForMultipleChoicesRequirement = ({
	array,
	unit,
}: {
	array: string[]
	unit: string
}): string[] => {
	if (!array.length) return []

	const output: string[] = []
	const numArray: number[] = array.filter(Number).map(Number)

	if (numArray.length > 2)
		output.push(`${Math.min(...numArray)}~${Math.max(...numArray)} ${unit}`)

	if (numArray.length === 1) output.push(`${numArray[0]} ${unit}`)

	const stringArrOfNumArr = numArray.map(String)
	array.forEach((e) => !stringArrOfNumArr.includes(e) && output.push(e))

	return output
}

export const generateFilterParam = ({
	duration = '@now',
	id = null,
	income = null,
	grade = null,
	gpa = null,
	university = null,
	major = null,
	region = null,
}: {
	duration?: string
	id?: string | null
	income?: string | null
	grade?: string | null
	gpa?: number | null
	university?: string | null
	major?: string | null
	region?: string | null
}): string => {
	const duratonFilter = `duration > ${duration}`
	const idFilter = id ? `&& id = '${id}'` : ''

	const incomeFilter = income
		? `&& (income_requirement = '[]' || income_requirement ~ '${income}')`
		: ''
	const gradeFilter = grade ? `&& (grade_level = '[]' || grade_level ~ '${grade}')` : ''
	const gpaFilter = (gpa ?? 0) > 0 ? `&& GPA_requirement <= ${gpa}` : ''
	const universityFilter = university
		? `&& (university = null || university ~ '${university}')`
		: ''
	const majorFilter = major ? `&& (major = null || major ~ '${major}')` : ''
	const regionFilter = region ? `&& (region = null || region ~ '${region}')` : ''

	return `${duratonFilter} ${idFilter} ${incomeFilter} ${gradeFilter} ${gpaFilter} ${universityFilter} ${universityFilter} ${majorFilter} ${regionFilter}`
}

export const getRouteTitle = (path: string): string => {
	const p = path.slice(1)
	switch (p) {
		case '':
			return 'Home'
		default:
			return `${p.charAt(0).toUpperCase()}${p.slice(1)}`
	}
}

type AccountType = z.infer<typeof accountSchema>

export const checkForAccountFormFilled = (data: AccountType): boolean => {
	for (const key in data) {
		const d = data[key as keyof typeof data]
		if (d !== undefined && d !== 'undefined') {
			return true
		}
	}
	return false
}

export const isGPAInfoValid = (gpa: string | undefined) => {
	return Number.isFinite(parseFloat(gpa as string))
}

export const proccessAccountData = (data: AccountType): Object => {
	const name = data.name
	const university = data.university
	const major = data.major
	const region = data.region
	const income = data.income === 'undefined' ? undefined : data.income
	const grade = data.grade === 'undefined' ? undefined : data.grade

	const numDataGPA = parseFloat(data.gpa as string)
	const gpa = numDataGPA > 0 ? numDataGPA : undefined

	return { name, university, major, region, income, grade, gpa }
}
