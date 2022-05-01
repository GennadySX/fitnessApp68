/*
 * @author GennadySX
 * @created at 2022
 **/

import { SCREENS } from './navigations.types'

export type StackParamList = {
  ///
  [SCREENS.AUTH_INIT]: undefined
  [SCREENS.AUTH_PHONE]: undefined
  [SCREENS.AUTH_CODE]: undefined | { phone?: string, email?: string }
  [SCREENS.AUTH_EMAIL]: undefined
  [SCREENS.AUTH_NAME]: undefined
  [SCREENS.AUTH_ALLERGIC_PRODUCTS]: undefined
  [SCREENS.AUTH_PHOTO]: undefined
  [SCREENS.AUTH_ABOUT]: undefined
  [SCREENS.AUTH_NUTRITION_PROGRAM]: undefined
  [SCREENS.AUTH_PREPARING]: undefined
  [SCREENS.AUTH_OFFER]: undefined
  [SCREENS.AUTH_AGREEMENTS]: undefined
  [SCREENS.AUTH_AGREEMENT]: undefined

  ///
  [SCREENS.HOME_TABS]: undefined
  [SCREENS.MAIN]: undefined
  [SCREENS.VIDEO_PREPARING]: undefined
  [SCREENS.WORKOUT_FINISH]: undefined
  [SCREENS.VIDEO]: {
    uri: string
  }
}
