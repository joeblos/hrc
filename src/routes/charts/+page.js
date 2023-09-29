
/** @type {import('./$types').PageLoad} */

export const load = async ({ fetch }) => {
  const res = await fetch('https://opensheet.justinoneill2007.workers.dev/1bH0EFfIpQBYffbTCfCfanc_B-caWfzl2COuqStsV9FU/components_v2')
  const data = await res.json()
  const components = data

  return {
    components: components
  }
}