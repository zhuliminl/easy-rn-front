import React from 'react'
import Theme from '@styles/theme'
import { PaddingIt } from '@components/UI'

export default () => {
  return (
    <PaddingIt
      bgColor={Theme.ColorBg1} style={{
        height: Theme.Height5,
        width: Theme.Height8,
      }}>
    </PaddingIt>
  )
}