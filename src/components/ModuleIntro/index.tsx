import React from 'react'
import Theme from '@theme'
import { LargeTitle, PaddingIt, Space, Text, Box } from '@components/UI'
import { IconActivity, IconBuild, IconChevronRight } from '@components/UI/Icon'
import BoxIcon from '@components/BoxIcon'


type IProps = {
  title: string,
  Icon: any,
  renderBottom?: () => React.ReactNode,
}

export default ({
  title,
  Icon,
  renderBottom = () => null,
}: IProps) => {
  return (
    <PaddingIt
      column
      paddingH={Theme.Space2}
      style={{
        backgroundColor: Theme.ColorWhite,
      }}>
      <PaddingIt
        row
        style={{
          alignItems: 'center',
        }}>
        <BoxIcon Icon={IconBuild}
        //  relativeColor='#999'
        />
        <Box width={Theme.Space3} />
        <LargeTitle title={title} />
      </PaddingIt>
      {renderBottom()}
    </PaddingIt>
  )
}
