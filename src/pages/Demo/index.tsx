import React from 'react'
import IconsPannel from './IconsPannel'
import { IconActivity, IconAddPhoto } from '@components/UI/Icon'
import { Desc, Line, PaddingIt, Text, Space } from '@components/UI'
import Theme from '@styles/theme'

export default () => {
  return (
    <div>
      <IconActivity />
      <IconAddPhoto />
      <IconsPannel />
      <Line />

      <div style={{ width: 300, }}>
        <PaddingIt padding={10} hover border radius={20} bgColor={Theme.ColorWhite} column center style={{ height: 90}}>
          <Text normal >收看</Text>
          <Desc>
            空间反垄断
          </Desc>
        </PaddingIt>
        <Space height={100} />
          <Desc>
            空间反垄断
          </Desc>
      </div>
    </div>
  )
}