/*
 * @author GennadySX
 * @created at 2022
 **/
import { Stack } from '@app'
import { SCREENS } from '@routes/navigations.types'
import { MainScreen } from '@screens/Main'
import HomeTabs from '@layouts/HomeTabs'
import { VideoScreen } from '@screens/Video'
import { VideoPreparingScreen } from '@screens/Workout/screens/VideoPreparing'
import { WorkoutFinishScreen } from '@screens/Workout/screens/WorkoutFinish'
import { AuthInitScreen } from '@screens/Auth'
import { AuthPhoneScreen } from '@screens/Auth/screens/Phone'
import { AuthCodeScreen } from '@screens/Auth/screens/Code'
import { AuthEmailScreen } from '@screens/Auth/screens/Email'
import { AuthNameScreen } from '@screens/Auth/screens/Name'
import { AuthAboutScreen } from '@screens/Auth/screens/About'
import { AuthNutritionScreen } from '@screens/Auth/screens/NutritionProgam'
import { AuthPhotoScreen } from '@screens/Auth/screens/Photo'
import { AuthAllergicProductsScreen } from '@screens/Auth/screens/AllergicProducts'
import { AuthPreparingScreen } from '@screens/Auth/screens/Preparing'
import { AuthOfferScreen } from '@screens/Auth/screens/Offer'
import { AuthAgreementsScreen } from '@screens/Auth/screens/Agreements'
import { AuthAgreementScreen } from '@screens/Auth/screens/Agreements/Agreement'

export type ScreenProps = Parameters<typeof Stack['Screen']>[number]

export const RoutesScreens: (ScreenProps & { name: SCREENS })[] = [
  ///
  {
    name: SCREENS.AUTH_INIT,
    component: AuthInitScreen,
    options: {
      headerShown: false,
    },
  },
  {
    name: SCREENS.AUTH_PHONE,
    component: AuthPhoneScreen,
    options: {
      headerShown: true,
      headerTitle: '',
    },
  },
  {
    name: SCREENS.AUTH_CODE,
    component: AuthCodeScreen,
    options: {
      headerShown: true,
      headerTitle: '',
    },
  },
  {
    name: SCREENS.AUTH_EMAIL,
    component: AuthEmailScreen,
    options: {
      headerShown: false,
    },
  },
  {
    name: SCREENS.AUTH_NAME,
    component: AuthNameScreen,
    options: {
      headerShown: false,
    },
  },
  {
    name: SCREENS.AUTH_ALLERGIC_PRODUCTS,
    component: AuthAllergicProductsScreen,
    options: {
      headerShown: false,
    },
  },
  {
    name: SCREENS.AUTH_ABOUT,
    component: AuthAboutScreen,
    options: {
      headerShown: false,
    },
  },
  {
    name: SCREENS.AUTH_NUTRITION_PROGRAM,
    component: AuthNutritionScreen,
    options: {
      headerShown: false,
    },
  },
  {
    name: SCREENS.AUTH_PREPARING,
    component: AuthPreparingScreen,
    options: {
      headerShown: false,
    },
  },
  {
    name: SCREENS.AUTH_OFFER,
    component: AuthOfferScreen,
    options: {
      headerShown: false,
    },
  },
  {
    name: SCREENS.AUTH_PHOTO,
    component: AuthPhotoScreen,
    options: {
      headerShown: false,
    },
  },
  {
    name: SCREENS.AUTH_AGREEMENTS,
    component: AuthAgreementsScreen,
    options: {
      headerShown: true,
      headerTitle: '',
    },
  },
  {
    name: SCREENS.AUTH_AGREEMENT,
    component: AuthAgreementScreen,
    options: {
      headerShown: true,
      headerTitle: '',
    },
  },
  ///
  {
    name: SCREENS.HOME_TABS,
    component: HomeTabs,
    options: {
      headerShown: false,
    },
  },
  {
    name: SCREENS.MAIN,
    component: MainScreen,
    options: {
      headerShown: false,
    },
  },
  {
    name: SCREENS.VIDEO,
    component: VideoScreen,
    options: {
      headerShown: false,
    },
  },
  {
    name: SCREENS.VIDEO_PREPARING,
    component: VideoPreparingScreen,
    options: {
      headerShown: false,
    },
  },
  {
    name: SCREENS.WORKOUT_FINISH,
    component: WorkoutFinishScreen,
    options: {
      headerShown: false,
    },
  },
]
