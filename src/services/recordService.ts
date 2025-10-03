import { api, handleError, handleResponse } from "./api"

type Payload = {
  amount: number
  date: string
  fund_id: string
  correlated_fund_id?: string
  note?: string
  tag?: string
}

export function createRecord(payload: Payload, demo: boolean) {
  api.post(demo ? "/public/record" : "/record", payload)
    .then(handleResponse)
    .catch(handleError)
}

export function readRecords(demo: boolean) {
  api.get(demo ? "/public/record" : "/record")
    .then(handleResponse)
    .catch(handleError)
}

export function updateRecord({ id, name }: { id: string, name: string }, demo: boolean) {
  api.patch(demo ? `/public/record/${id}` : `/record/${id}`, { name })
    .then(handleResponse)
    .catch(handleError)
}

export function deleteRecord(id: string, demo: boolean) {
  api.delete(demo ? `/public/record/${id}` : `/record/${id}`)
    .then(handleResponse)
    .catch(handleError)
}
