/*
 * @author GennadySX
 * @created at 2021
 **/

import ReactNativeHapticFeedback from '@gennadysx/react-native-haptic-feedback'

export enum HapticFeedbacks {
  selection = 'selection',
  impactLight = 'impactLight',
  impactMedium = 'impactMedium',
  impactHeavy = 'impactHeavy',
  rigid = 'rigid',
  soft = 'soft',
  notificationSuccess = 'notificationSuccess',
  notificationWarning = 'notificationWarning',
  notificationError = 'notificationError',
  clockTick = 'clockTick',
  contextClick = 'contextClick',
  keyboardPress = 'keyboardPress',
  keyboardRelease = 'keyboardRelease',
  keyboardTap = 'keyboardTap',
  longPress = 'longPress',
  textHandleMove = 'textHandleMove',
  virtualKey = 'virtualKey',
  virtualKeyRelease = 'virtualKeyRelease',
  effectClick = 'effectClick',
  effectDoubleClick = 'effectDoubleClick',
  effectHeavyClick = 'effectHeavyClick',
  effectTick = 'effectTick',
}

/**
 * Функция для вибрации
 * отличие от обычной вибрации, тут можете передевать эффекты хаптика
 * @param vibrateEffect
 * @constructor
 */
export const HapticVibration = (vibrateEffect?: HapticFeedbacks) => {
  const options = {
    enableVibrateFallback: true,
    ignoreAndroidSystemSettings: false,
  }
  // @ts-ignore
  ReactNativeHapticFeedback.trigger(vibrateEffect || HapticFeedbacks.clockTick, options)
}
