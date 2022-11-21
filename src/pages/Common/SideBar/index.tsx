import React from 'react'
import { PaddingIt, Text, Space, Line } from '@components/UI'
import Theme from '@styles/theme'
import { IconActivity, IconAndroid, IconApple } from '@components/UI/Icon'

export default () => {
  return (
    <div>
      <PaddingIt padding={Theme.Space2} column>
        <Space />
        <PaddingIt active hover radius={Theme.BorderRadius1} paddingH={Theme.Space3} bgColor={Theme.ColorWhite} height={Theme.Height4} row style={{ alignItems: 'center', }}>
          <IconActivity />
          <Text noSelect middle style={{ marginLeft: Theme.Space2 }}>Home</Text>
        </PaddingIt>
        <Space />
        <PaddingIt hover radius={Theme.BorderRadius1} paddingH={Theme.Space3} bgColor={Theme.ColorWhite} height={Theme.Height4} row style={{ alignItems: 'center', }}>
          <IconApple />
          <Text noSelect middle style={{ marginLeft: Theme.Space2 }}>Home</Text>
        </PaddingIt>
        <Space />
      </PaddingIt>
      <Text normal style={{ color: Theme.TextColor1, marginLeft: Theme.Space2 }}>Projects</Text>
      <Space height={Theme.Space2} />
      <Line />
      <PaddingIt padding={Theme.Space2} column>
        <Space />
        <PaddingIt hover radius={Theme.BorderRadius1} paddingH={Theme.Space3} bgColor={Theme.ColorWhite} height={Theme.Height4} row style={{ alignItems: 'center', }}>
          <IconAndroid />
          <Text noSelect middle style={{ marginLeft: Theme.Space2 }}>Home</Text>
        </PaddingIt>
      </PaddingIt>
    </div>
  )
}