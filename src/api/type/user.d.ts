import type { responseType } from "./public"

export interface loginResult extends responseType {
  data: {
    token: string
  }
}
