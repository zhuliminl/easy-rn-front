import React from 'react'
import Theme from '@styles/theme'
import { Text } from '@components/UI'

type Iprops = {
  title?: string,
}

export default ({
  title,
}: Iprops) => {
  return (
    <Text
      normal
      style={{
        color: Theme.TextColor1,
        marginLeft: Theme.Space2,
      }}
    >{title}</Text>
  )
}