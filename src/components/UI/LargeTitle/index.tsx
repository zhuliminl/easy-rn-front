import React from 'react'
import Theme from '@styles/theme'
import Text from '../Text'

type IProps = {
  title: string,
}

export default ({ title }: IProps) => {
  return (
    <Text
      bold
      huge
      noSelect
      style={{
        color: Theme.TextColor1,
      }}
    >{title}</Text>
  )
}