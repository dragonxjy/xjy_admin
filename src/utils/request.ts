import { message } from "@/Hooks/Element-plus"
import axios, {
  type AxiosResponse,
  type InternalAxiosRequestConfig,
} from "axios"
import { useUserStore } from "@/stores/modules/user"
const request = axios.create({
  baseURL: import.meta.env.VITE_BASE_URL,
  timeout: 5000,
})
request.interceptors.request.use((config: InternalAxiosRequestConfig) => {
  const userStore = useUserStore()
  if (userStore.token) {
    config.headers.token = userStore.token
  }
  return config
})
request.interceptors.response.use(
  (response) => {
    return response.data
  },
  (err) => {
    const errObj: any = {
      "401": "token过期了",
      "403": "无权访问",
      "404": "请求地址错误",
      "500": "服务器内部错误",
    }
    message("error", errObj[err.response.status] || "网络问题")
    return Promise.reject(new Error(err))
  },
)
export default request
