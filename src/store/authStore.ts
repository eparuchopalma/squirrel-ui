import { reactive } from "vue"

export const authStore = reactive({
  isAuthenticated: false,
  inDemo: false,

  loginForDemo() {
    this.inDemo = true
  }

})