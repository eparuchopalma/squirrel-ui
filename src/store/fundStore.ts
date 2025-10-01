import { reactive } from "vue"
import { readFunds } from "../services/fundService"

type Fund = {
  id: string
  name: string
  balance: number
  is_main: boolean
}

export const fundStore = reactive({
  funds: [] as Fund[],
  readFunds
})