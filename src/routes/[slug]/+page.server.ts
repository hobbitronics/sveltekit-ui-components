import { PRIVATE_ENV } from '$env/static/private'

/** @type {import('./$types').PageServerLoad} */
export async function load() {
  return {
    post: PRIVATE_ENV
  }
}
