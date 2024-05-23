import request from "@/utils/request"
import type { responseType } from "../type/public"
import type { AxiosPromise } from "axios"
import type { loginResult } from "../type/user"

/***
 * @mockjs模拟数据
 */
export const loginApi = (loginParams: {
  username: string
  password: number
}) => {
  return request<loginResult, any>({
    url: "/login",
    method: "POST",
    data: loginParams,
  })
}
export const getUserInfoApi = (token: string) => {
  return request<any, any>({
    url: "/user",
    data: token,
  })
}
