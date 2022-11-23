import React from 'react'
import Theme from '@theme'
import { PaddingIt, Text } from '@components/UI'
import { IconChevronRight } from '@components/UI/Icon'


type Iprops = {
  toolTip?: string,
  active?: boolean,
  title: string,
  withArrow?: boolean,
  onPress: () => void,
  Icon?: any,
  onlyText?: boolean,
}

export default ({
  toolTip,
  title,
  active,
  withArrow,
  onPress,
  Icon,
  onlyText = false,
}: Iprops) => {

  return (
    <PaddingIt
      onClick={onPress}
      row
      hover
      data-tip={toolTip}
      active={active || false}
      radius={Theme.BorderRadius1}
      paddingH={Theme.Space3}
      bgColor={Theme.ColorWhite}
      height={Theme.Height4}
      style={{ alignItems: 'center', }}>
      {!onlyText && <Icon />}
      <Text
        noSelect
        middle={!onlyText}
        style={{ marginLeft: Theme.Space2, flex: 1,}}>{title}</Text>
      {withArrow && <IconChevronRight color={Theme.TextColor9} />}
    </PaddingIt>
  )
}
