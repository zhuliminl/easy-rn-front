import React from 'react'
import Theme from '@theme'
import { LargeTitle, PaddingIt, Space, Text, Box } from '@components/UI'
import { IconActivity, IconChevronRight } from '@components/UI/Icon'


type Iprops = {
  title: string,
  Icon: any,
  renderBottom: () => void,
}

export default ({
  title,
  Icon,
  renderBottom = () => null,
}: Iprops) => {

  return (
    <PaddingIt
      column
      style={{
        minHeight: Theme.LayoutIntroHeight,
        backgroundColor: Theme.ColorWhite,
      }}>
      <Space height={Theme.Height3} />
      <PaddingIt
        row
        style={{
          alignItems: 'center',
        }}>
        <IconActivity />
        <Box width={Theme.Space4} />
        <LargeTitle title='Builds' />
      </PaddingIt>

    </PaddingIt>
  )
}
