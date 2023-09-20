
/** @type {import('./$types').PageLoad} */

export const load = async ({ fetch }) => {
  const res = await fetch('https://opensheet.justinoneill2007.workers.dev/1ktzmsutSff58KRV9mZbxdKGAr7vWWnN08YFpbG5DHsc/home')
  const data = await res.json()
  const products = data

  return {
    products: products
  }
}