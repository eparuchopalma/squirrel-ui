import { api, handleError, handleResponse } from "./api"

export function createFund(name: string, demo: boolean) {
  api.post(demo ? "/public/fund" : "/fund", { name })
    .then(handleResponse)
    .catch(handleError)
}

export function readFunds(demo: boolean) {
  api.get(demo ? "/public/fund" : "/fund")
    .then(handleResponse)
    .catch(handleError)
}

export function updateFund({ id, name }: { id: string, name: string }, demo: boolean) {
  api.patch(demo ? `/public/fund/${id}` : `/fund/${id}`, { name })
    .then(handleResponse)
    .catch(handleError)
}

export function deleteFund(id: string, demo: boolean) {
  api.delete(demo ? `/public/fund/${id}` : `/fund/${id}`)
    .then(handleResponse)
    .catch(handleError)
}
