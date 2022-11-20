import React from 'react'
import IconsPannel from './IconsPannel'
import { IconActivity, IconAddPhoto } from '@components/UI/Icon'
import { Line, PaddingIt, HoverIt } from '@components/UI'

export default () => {
  return (
    <div>
      <IconActivity />
      <IconAddPhoto />
      <IconsPannel />
      <Line />

      <div style={{ width: 300, }}>
        <PaddingIt padding={10} hover={false} border radius={10}>
          <div style={{
            height: 30,
          }}>xxx</div>
        </PaddingIt>
      </div>
    </div>
  )
}