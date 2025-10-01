import api from "./api"

type Payload = {
  amount: number
  date: string
  fund_id: string
  correlated_fund_id?: string
  note?: string
  tag?: string
}

export function createRecord(payload: Payload, demo: boolean) {
  return api.post(demo ? "/public/record" : "/record", payload)
}

export function readRecords(demo: boolean) {
  return api.get(demo ? "/public/record" : "/record")
}

export function updateRecord({ id, name }: { id: string, name: string }, demo: boolean) {
  return api.patch(demo ? `/public/record/${id}` : `/record/${id}`, { name })
}

export function deleteRecord(id: string, demo: boolean) {
  return api.delete(demo ? `/public/record/${id}` : `/record/${id}`)
}
