/*
 * @author GennadySX
 * @created at 2022
 **/

import React, { Fragment, useMemo, useState } from 'react'
import { getDates, getDayName } from '@helpers/date'
import moment from 'moment'
import { StringDate } from '@apptypes/types'
import { BadgeCarousel } from '@components/BadgeCarousel'
import { Text, View } from 'react-native'
import { style } from '@screens/Main/styles'
import { LocaleConfig } from '@helpers/calendarLocale'

export const DateCarousel = () => {
  const dates = getDates(new Date(), '2022-09-05' as StringDate).map(date => ({
    name: getDayName(date),
    value: date,
  }))

  const [selectedDays, setDays] = useState<string[]>([dates[0]?.value as string])
  const [month, setMonth] = useState<number>(new Date().getMonth())

  const onDayPress = (day: string) => {
    if (selectedDays.includes(day))
      return setDays(selectedDays.filter(existDay => existDay !== day))
    setDays([...selectedDays, day])
  }

  const getViewableItems = ({ last }: { last: any }) => {
    const monthIs = moment(last?.item?.value).month()
    console.log('month:::', LocaleConfig.monthNames[monthIs])
    if (monthIs <= 11) {
      if (monthIs !== month) setMonth(monthIs)
    }
  }

  return (
    <Fragment>
      <View style={style.header}>
        <Text style={style.headerTitle}>
          Меню на
          <Text style={style.dateTitle}> {LocaleConfig.monthNames[month]} 2022</Text>
        </Text>
      </View>
      <BadgeCarousel
        data={dates}
        onPress={onDayPress}
        activeList={selectedDays}
        activeDot
        contentContainerStyle={{paddingRight: 40}}
        isDate
        clickAble
        onViewableItemsChange={getViewableItems}
      />
    </Fragment>
  )
}
