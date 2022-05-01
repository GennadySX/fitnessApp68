/*
 * @author GennadySX
 * @created at 2021
 **/

import { Dimensions } from 'react-native'
import { hasNotch as hasNotchDevice } from 'react-native-device-info'

const Window = Dimensions.get('window')
const Screen = Dimensions.get('screen')
const WIDTH = Window.width
const HEIGHT = Window.height
const SCREEN_WIDTH = Screen.width
const SCREEN_HEIGHT = Screen.height
const hasNotch = hasNotchDevice()
export { Window, WIDTH, HEIGHT, hasNotch, SCREEN_WIDTH, SCREEN_HEIGHT }
