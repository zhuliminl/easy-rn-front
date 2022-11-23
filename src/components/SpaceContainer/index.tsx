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
      margin: 'auto', width: Theme.LayoutContentWidth,
    }}>
      {children}
    </div>
  )
}