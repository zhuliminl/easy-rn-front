import React from 'react'
import Theme from '@styles/theme'

type Iprops = {
  children: React.ReactNode,
}

export default ({
  children,
}: Iprops) => {
  return (
    <div style={{
      margin: 'auto',
      maxWidth: Theme.LayoutContentWidth,
    }}>
      {children}
    </div>
  )
}