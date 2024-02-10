import { writable } from 'svelte/store'
export let isRegisterOrLogin = writable('login')

export { default as RegisterForm } from './register-form.svelte'
export { default as LoginForm } from './login-form.svelte'
export { default as RegisterLoginTabs } from './register-login-tabs.svelte'
