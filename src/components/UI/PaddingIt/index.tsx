import React from 'react'
import Theme from '@theme'

export default ({
  children,
  padding = Theme.Space1,
  paddingH,
  paddingV,
}: {
  padding?: number,
  paddingH?: number,
  paddingV?: number,
  children: any,
}) => {

  let paddingHobj = paddingH ? { paddingLeft: paddingH, paddingRight: paddingH } : {}
  let paddingVobj = paddingV ? { paddingTop: paddingV, paddingBottom: paddingV } : {}
  return (
    <div style={{
      padding,
      ...paddingHobj,
      ...paddingVobj,
    }}>
      {children}
    </div>
  )
}