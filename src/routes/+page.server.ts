import { PUBLIC_ENV } from '$env/static/public'
import { PRIVATE_ENV } from '$env/static/private'

console.log('PUBLIC_ENV: ' + PUBLIC_ENV, 'PRIVATE_ENV: ' + PRIVATE_ENV)

/** @type {import('./$types').PageServerLoad} */
export function load() {
  return { detail: `PUBLIC_ENV: ${PUBLIC_ENV}, PRIVATE_ENV: ${PRIVATE_ENV}` }
}
