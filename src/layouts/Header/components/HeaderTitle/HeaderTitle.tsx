import React from 'react'
import { getHeaderTitle } from '@react-navigation/elements'
import { Text } from 'react-native'
import { NativeStackHeaderProps } from '@react-navigation/native-stack'
import { typography } from '@styles/typography'

type HeaderTitleProps = Pick<NativeStackHeaderProps, 'options' | 'route'>
const HeaderTitle = ({ route, options }: HeaderTitleProps) => {
  const title = getHeaderTitle(options, route.name)

  const CustomTitle = options.headerTitle as
    | string
    | ((props: { children: string; tintColor?: string | undefined }) => JSX.Element)
    | undefined

  if (typeof CustomTitle === 'function') return <CustomTitle>{title}</CustomTitle>

  return <Text style={{ ...typography.medium, fontWeight: '500', lineHeight: 22 }}>{title}</Text>
}
export default HeaderTitle
