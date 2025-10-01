import api from './api';

export function createFund(name: string, demo: boolean) {
  return api.post(demo ? '/public/fund' : '/fund', { name })
}

export function readFunds(demo: boolean) {
  return api.get(demo ? '/public/fund' : '/fund')
}

export function updateFund({ id, name }: { id: string, name: string }, demo: boolean) {
  return api.patch(demo ? `/public/fund/${id}` : `/fund/${id}`, { name })
}

export function deleteFund(id: string, demo: boolean) {
  return api.delete(demo ? `/public/fund/${id}` : `/fund/${id}`)
}
