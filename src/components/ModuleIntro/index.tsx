import React from 'react'
import Theme from '@theme'
import { LargeTitle, PaddingIt, Space, Text, Box } from '@components/UI'
import { IconActivity, IconBuild, IconChevronRight } from '@components/UI/Icon'
import BoxIcon from '@components/BoxIcon'


type IProps = {
  title: string,
  Icon: any,
  renderBottom: () => void,
}

export default ({
  title,
  Icon,
  renderBottom = () => null,
}: IProps) => {
  return (
    <PaddingIt
      column
      style={{
        backgroundColor: Theme.ColorWhite,
      }}>
      <Space height={Theme.Height3} />
      <PaddingIt
        row
        style={{
          alignItems: 'center',
        }}>
        <Box width={Theme.Space4} />
        <BoxIcon Icon={IconBuild}
        //  relativeColor='#999'
        />
        <Box width={Theme.Space3} />
        <LargeTitle title={title} />
      </PaddingIt>
      <Space height={Theme.Height3} />
    </PaddingIt>
  )
}
