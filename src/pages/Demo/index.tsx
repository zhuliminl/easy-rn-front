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
        <PaddingIt padding={10}>
          <HoverIt>
            <div style={{ backgroundColor: 'green', height: 90, }}>xxx</div>
          </HoverIt>
        </PaddingIt>
      </div>
    </div>
  )
}