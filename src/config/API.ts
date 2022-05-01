/*
 * @author GennadySX
 * @created at 2022
 **/

const DEV = 'dev api url'
const PROD = 'prod api url'

export const IS_DEV = 'DEV'
const origin = IS_DEV ? DEV : PROD

const route = (uri?: string) => `${origin}${uri ? uri : ''}`

export const API = {
  baseUrl: origin,
  authApiBaseUrl: route(),
  route: (uri: string) => route(uri),
}
