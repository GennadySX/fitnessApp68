/*
 * @author GennadySX
 * @created at 2022
 **/

import React from 'react'
import { Text, View } from 'react-native'
import { styles as s } from '@screens/Workout/styles'
import { styles } from '@screens/Workout/screens/VideoPreparing/styles'
import CircularProgress from 'react-native-circular-progress-indicator'
import { Colors } from '@styles/index'
import { WIDTH } from '@utils/normalizer'
import { VideoMock } from '@mocks/video.mock'
import { VideoPlayerRef } from '@layouts/AppBlock'
import { useNavigation } from '@react-navigation/native'
import { StackNavigationProp } from '@react-navigation/stack'
import { StackParamList } from '@routes/stackParams'
import { SCREENS } from '@routes/navigations.types'

export const VideoPreparingScreen = () => {
  const navigation = useNavigation<StackNavigationProp<StackParamList, SCREENS.VIDEO_PREPARING>>()

  const onFinished = () => {
    VideoPlayerRef?.onOpen(VideoMock.music, () => navigation.navigate(SCREENS.WORKOUT_FINISH))
  }

  return (
    <View style={styles.block}>
      <Text style={styles.title}>{'Подбираем тренировку для \nВас'}</Text>

      <View style={s.circleBlock}>
        <View style={[s.circle, { width: WIDTH * 0.85, height: WIDTH * 0.85 }]}>
          <View style={[s.circle, s.circleSecondary, { width: WIDTH * 0.7, height: WIDTH * 0.7 }]}>
            <CircularProgress
              value={100}
              clockwise
              valueSuffix={'%'}
              circleBackgroundColor={Colors.WHITE}
              inActiveStrokeColor={Colors.LIGHT_ORANGE}
              radius={120}
              duration={3000}
              onAnimationComplete={onFinished}
              activeStrokeSecondaryColor={Colors.PRIMARY}
              activeStrokeColor={Colors.PRIMARY_DARKER}
              maxValue={100}
              activeStrokeWidth={20}
            />
          </View>
        </View>
      </View>
      <Text style={styles.desc}>
        Мы стараемся подобрать луший план тренировок для вас, это займет неоторое время
      </Text>
    </View>
  )
}
