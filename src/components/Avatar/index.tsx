import React from 'react'
import Theme from '@styles/theme'
import { PaddingIt } from '@components/UI'

type IProps = {
  uri?: string,
  hover?: boolean,
  onPress?: () => void,
}

const baseUrl = 'https://s.gravatar.com/avatar/e96aa7009a37543ce5e459c7891ba2b5?s=480&r=pg&d=https%3A%2F%2Fstorage.googleapis.com%2Fexpo-website-default-avatars%2Fz-2x.png'
export default ({
  uri = baseUrl,
  hover,
  onPress = () => { },
}: IProps) => {
  return (
    <PaddingIt
      radius={Theme.BorderRadius1}
      hover2={hover}
      onClick={() => {
        onPress()
      }}
      style={{
        height: Theme.Height4,
        width: Theme.Height4,
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <img
        style={{
          width: Theme.AvatarSize,
          height: Theme.AvatarSize,
          borderRadius: Theme.AvatarSize / 2,
          backgroundColor: Theme.ColorBg1,
        }}
        src={uri}
      />
    </PaddingIt>
  )
}

