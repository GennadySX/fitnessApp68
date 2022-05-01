/*
 * @author GennadySX
 * @created at 2022
 **/

export const TimerSleep = (sec: number) =>
  new Promise(resolve => setTimeout(resolve, sec * 1000 || 1500))
