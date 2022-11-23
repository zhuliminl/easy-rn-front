import React from 'react'
import Theme from '@styles/theme'
import { PaddingIt } from '@components/UI'

type IProps = {
  relativeColor?: string,
  Icon: any,
}

export default ({
  relativeColor,
  Icon,
}: IProps) => {
  return (
    <PaddingIt
      radius={Theme.BorderRadius2}
      style={{
        justifyContent: 'center',
        alignItems: 'center',
        width: Theme.Height4,
        height: Theme.Height4,
        backgroundColor: relativeColor || Theme.ColorBg2,
      }}>
      <Icon />
    </PaddingIt>
  )
}