import React from 'react'
import Theme from '@styles/theme'
import { IconChevronDown } from '@components/UI/Icon'

export default () => {
  return (
    <div style={{
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      width: Theme.Height2,
      height: Theme.Height2,
      borderRadius: Theme.BorderRadius1,
      border: `1px solid ${Theme.BorderColor}`
    }}>
      <IconChevronDown color={Theme.TextColor9} style={{
        height: Theme.Height2 - 4,
        width: Theme.Height2 - 4,
      }} />
    </div>
  )
}
