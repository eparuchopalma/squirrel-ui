import { reactive } from "vue"
import { authStore } from "./authStore"
import { readFunds } from "../services/fundService"

type Fund = {
  id: string
  name: string
  balance: number
  is_main: boolean
}

export const fundStore = reactive({
  funds: [] as Fund[],
  async getFunds() {
    const response = await readFunds(authStore.inDemo)
    if (!response.errorMessage) this.setFunds(response.data)
    return response
  },
  setFunds(funds: Fund[]) {
    this.funds = funds
  }
})