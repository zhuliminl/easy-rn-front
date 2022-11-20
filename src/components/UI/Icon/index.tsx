
import React from 'react'
import { ReactComponent as Activity } from './svg/activity-icon.svg'
import { ReactComponent as AddPhoto } from './svg/add-photo-icon.svg'
import { ReactComponent as Android } from './svg/android-icon.svg'
import Theme from '@theme'


const iconsMap = {
  'default': Activity,
  'activity': Activity,
  'addPhoto': AddPhoto,
  'android': Android,
}

type IconProps = {
  name?: string,
  size?: number,
  fill?: string,
}

export const IconActivity = (props: IconProps) => {
  return <Icon  {...props} name='activity' />
}

export const IconAddPhoto = (props: IconProps) => {
  return <Icon  {...props} name='addPhoto' />
}

export const IconAndroid = (props: IconProps) => {
  return <Icon  {...props} name='android' />
}


const Icon = ({
  name = 'default',
  size = Theme.IconSize1,
  fill = Theme.IconColor1,
  // size = 100,
  // fill = 'red'
}: IconProps) => {
  const Icon = iconsMap[name]
  return (
    <div>
      <Icon
        width={size}
        height={size}
        fill={fill}
      />
    </div>
  )
}
