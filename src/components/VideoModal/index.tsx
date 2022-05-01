/*
 * @author GennadySX
 * @created at 2022
 **/
import React, {
  ForwardedRef,
  forwardRef,
  useEffect,
  useImperativeHandle,
  useRef,
  useState,
} from 'react'
import Video, { OnLoadData, OnProgressData } from 'react-native-video'
import { Preloader } from '@components/Preloader'
import { Svg } from '@components/Svg'
import { PlayerControls } from '@components/VideoPlayer/elements/PlayerControls'

import { ProgressBar } from '@components/VideoPlayer/elements/ProgressBar'
import { hitSlop20 } from '@styles/spacing'
import { Modal, Pressable, Text, TouchableOpacity, View } from 'react-native'

import { style as s } from './style'
import { HEIGHT, WIDTH } from '@utils/normalizer'
import { IconsSVG } from '@constants/Icons/IconsSvg'
import Orientation from 'react-native-orientation-locker'
import { isAndroid, isIPhone } from '@utils/platform'
import { useNavigation } from '@react-navigation/native'
import { Colors, Spacing } from '@styles/index'

const HIDE_CONTROLS_DELAY = 1500

export type VideoComponentProps = {
  onCloseScreen?: () => void
  isScreen?: boolean
}

export type VideoModalProps = {
  onOpen: (uri: string, onCloseCallback?: () => void) => void
  onClose: () => void
}
export const VideoModal = forwardRef(
  ({ onCloseScreen, isScreen }: VideoComponentProps, ref: ForwardedRef<VideoModalProps>) => {
    const videoPlayer = React.useRef<Video>(null)
    const hideControlsTimerId = useRef<NodeJS.Timeout | undefined>(undefined)
    const [showControls, setShowControls] = useState<boolean>(false)
    const [isVisible, setVisible] = useState<boolean>(false)
    const [closeCallback, setCloseCallback] = useState<() => void>(() => {})
    const [url, setUrl] = useState<string>('')
    const [isUserUsingProgressBar, setIsUserUsingProgressBar] = useState<boolean>(false)
    const [state, setState] = useState({
      isFullscreen: false,
      isPlaying: true,
      currentTime: 0,
      duration: 0,
      isPreloaderActive: false,
    })

    function handlePlayPause() {
      onTouched()
      if (state.isPlaying) {
        setState({ ...state, isPlaying: false })
        return
      } else {
        setState({ ...state, isPlaying: true })
        return
      }
    }

    const skipBackward = () => {
      //@ts-ignore
      videoPlayer.current.seek(state.currentTime - 15)
      setState({ ...state, currentTime: state.currentTime - 15 })
      startHideControlsTimer()
    }

    const skipForward = () => {
      //@ts-ignore
      videoPlayer.current.seek(state.currentTime + 15)
      setState({ ...state, currentTime: state.currentTime + 15 })
      startHideControlsTimer()
    }

    function onSeek({ seekTime }: { seekTime: number }) {
      //@ts-ignore
      videoPlayer.current.seek(seekTime)
      setState({ ...state, currentTime: seekTime })
      startHideControlsTimer()
    }

    const startHideControlsTimer = () => {
      clearTimeout(hideControlsTimerId.current as unknown as number)
      hideControlsTimerId.current = setTimeout(() => setShowControls(false), HIDE_CONTROLS_DELAY)
    }

    useEffect(
      /*clearTimeout on Unmount*/
      () => () => clearTimeout(hideControlsTimerId.current as unknown as number),
      [],
    )

    const onTouched = () => {
      setShowControls(true)
      startHideControlsTimer()
    }

    const onBackdropPressHandler = () => {
      clearTimeout(hideControlsTimerId.current as unknown as number)
      !isUserUsingProgressBar && setShowControls(false)
    }

    const onLoaStart = () => {
      setState(localState => ({
        ...localState,
        isPreloaderActive: true,
      }))
    }

    const onLoadEnd = (data: OnLoadData) => {
      setState(localState => ({
        ...localState,
        duration: data.duration,
        currentTime: 0,
        isPreloaderActive: false,
      }))
    }

    function onProgress(data: OnProgressData) {
      setState(localState => ({
        ...localState,
        currentTime: data.currentTime,
      }))
    }

    function onEnd() {
      setState({ ...state, isPlaying: false })
      //@ts-ignore
      videoPlayer.current.seek(0)
    }

    const onOpen = (uri: string, onCloseCallback?: () => void) => {
      setUrl(uri)
      Orientation.lockToLandscape()

      videoPlayer.current?.presentFullscreenPlayer()
      setVisible(true)
      onCloseCallback && setCloseCallback(onCloseCallback)
    }

    const onClose = () => {
      if (isIPhone) {
        onCloseScreen && onCloseScreen()
      }
      Orientation.lockToPortrait()
      setVisible(false)
      closeCallback && closeCallback()
    }

    const getTimeSec = Math.round((state.duration - state.currentTime) % 60)
    const getTimeMin = Math.round((state.duration - state.currentTime) / 60)

    const countDown = `${getTimeMin}.${getTimeSec < 9 ? '0' + getTimeSec : getTimeSec}`

    useImperativeHandle(ref, () => ({
      onClose,
      onOpen,
    }))

    if (isScreen)
      return (
        <>
          {showControls && (
            <Pressable onPress={onBackdropPressHandler} style={[s.controlsBlock, s.controlOverlay]}>
              <TouchableOpacity
                activeOpacity={0.6}
                style={[s.fullScreenBtn, { right: 60, top: 30 }]}
                hitSlop={hitSlop20}
                onPress={onClose}>
                <Svg source={IconsSVG.decompressButton} style={s.fullScreenIcon} />
              </TouchableOpacity>

              {state.isPreloaderActive ? (
                <Preloader style={{ backgroundColor: '#111', opacity: 0.8 }} spinnerTheme="light" />
              ) : (
                <PlayerControls
                  onPlay={handlePlayPause}
                  onPause={handlePlayPause}
                  playing={state.isPlaying}
                  skipForward={skipForward}
                  skipBackward={skipBackward}
                />
              )}

              <ProgressBar
                currentTime={state.currentTime}
                duration={state.duration > 0 ? state.duration : 0}
                onSlideStart={handlePlayPause}
                onSlideComplete={handlePlayPause}
                setIsUserUsingProgressBar={setIsUserUsingProgressBar}
                style={{ width: HEIGHT - 95, bottom: 20, flex: 0 }}
                onSlideCapture={onSeek}
              />
            </Pressable>
          )}
          <Video
            ref={videoPlayer}
            allowsExternalPlayback
            automaticallyWaitsToMinimizeStalling
            onLoadStart={onLoaStart}
            onLoad={onLoadEnd}
            paused={!state.isPlaying}
            source={{ uri: url }}
            onTouchStart={onTouched}
            style={s.backgroundVideo}
            resizeMode={'cover'}
            fullscreen
            fullscreenOrientation={'landscape'}
            fullscreenAutorotate
            ignoreSilentSwitch={'ignore'}
            onProgress={onProgress}
            onEnd={onEnd}
          />
        </>
      )

    if (!isVisible) return <View />

    return isAndroid ? (
      <Modal onRequestClose={onClose}>
        <View style={[s.backgroundVideo]}>
          <Video
            onLoadStart={onLoaStart}
            onLoad={onLoadEnd}
            paused={!state.isPlaying}
            source={{ uri: url }}
            onTouchStart={onTouched}
            ref={videoPlayer}
            style={s.backgroundVideo}
            resizeMode={'cover'}
            fullscreen
            fullscreenOrientation={'landscape'}
            ignoreSilentSwitch={'ignore'}
            onProgress={onProgress}
            onEnd={onEnd}
          />
          {!showControls && state.isPreloaderActive && (
            <Preloader style={{ backgroundColor: 'black' }} spinnerTheme="light" />
          )}

          {showControls && (
            <Pressable
              onPress={onBackdropPressHandler}
              style={[
                s.controlsBlock,
                s.controlOverlay,
                { paddingHorizontal: Spacing.SMALL, paddingVertical: Spacing.MEDIUM },
              ]}>
              <TouchableOpacity
                activeOpacity={0.6}
                style={s.fullScreenBtn}
                hitSlop={hitSlop20}
                onPress={onClose}>
                <Svg source={IconsSVG.xCross} style={s.fullScreenIcon} />
              </TouchableOpacity>

              <Text style={s.seekTime}>{countDown}</Text>

              {state.isPreloaderActive ? (
                <Preloader style={{ backgroundColor: '#111', opacity: 0.8 }} spinnerTheme="light" />
              ) : (
                <PlayerControls
                  onPlay={handlePlayPause}
                  onPause={handlePlayPause}
                  playing={state.isPlaying}
                  skipForward={skipForward}
                  skipBackward={skipBackward}
                />
              )}

              <ProgressBar
                currentTime={state.currentTime}
                duration={state.duration > 0 ? state.duration : 0}
                onSlideStart={handlePlayPause}
                onSlideComplete={handlePlayPause}
                setIsUserUsingProgressBar={setIsUserUsingProgressBar}
                style={{ width: HEIGHT - 50, flex: 0 }}
                onSlideCapture={onSeek}
              />
            </Pressable>
          )}
        </View>
      </Modal>
    ) : (
      <View style={[s.backgroundVideo]}>
        <Video
          onLoadStart={onLoaStart}
          onLoad={onLoadEnd}
          paused={!state.isPlaying}
          source={{ uri: url }}
          onTouchStart={onTouched}
          ref={videoPlayer}
          style={s.backgroundVideo}
          resizeMode={'cover'}
          fullscreen
          fullscreenOrientation={'landscape'}
          ignoreSilentSwitch={'ignore'}
          onProgress={onProgress}
          onEnd={onEnd}
        />
        {!showControls && state.isPreloaderActive && (
          <Preloader style={{ backgroundColor: 'black' }} spinnerTheme="light" />
        )}

        {showControls && (
          <Pressable
            onPress={onBackdropPressHandler}
            style={[
              s.controlsBlock,
              s.controlOverlay,
              { paddingHorizontal: Spacing.SMALL, paddingVertical: Spacing.MEDIUM },
            ]}>
            <TouchableOpacity
              activeOpacity={0.6}
              style={[s.fullScreenBtn, { left: 50 }]}
              hitSlop={hitSlop20}
              onPress={onClose}>
              <Svg source={IconsSVG.xCross} style={s.fullScreenIcon} />
            </TouchableOpacity>
            <Text style={s.seekTime}>{countDown}</Text>

            {state.isPreloaderActive ? (
              <Preloader style={{ backgroundColor: '#111', opacity: 0.8 }} spinnerTheme="light" />
            ) : (
              <PlayerControls
                onPlay={handlePlayPause}
                onPause={handlePlayPause}
                playing={state.isPlaying}
                skipForward={skipForward}
                skipBackward={skipBackward}
              />
            )}

            <ProgressBar
              currentTime={state.currentTime}
              duration={state.duration > 0 ? state.duration : 0}
              onSlideStart={handlePlayPause}
              onSlideComplete={handlePlayPause}
              setIsUserUsingProgressBar={setIsUserUsingProgressBar}
              style={{ width: HEIGHT - 50, flex: 0 }}
              onSlideCapture={onSeek}
            />
          </Pressable>
        )}
      </View>
    )
  },
)
