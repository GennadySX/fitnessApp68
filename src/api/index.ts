/*
 * @author GennadySX
 * @created at 2022
 **/

import { API } from '@configs/API'
import axios, { AxiosInstance } from 'axios'

export const authAxiosInstance = axios.create({
  baseURL: API.authApiBaseUrl,
  withCredentials: false,
})

export const appAxiosInstance: AxiosInstance = axios.create({
  baseURL: API.baseUrl,
  withCredentials: true,
  headers: {
    Accept: 'application/json',
  },
})
