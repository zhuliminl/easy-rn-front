import React from 'react'

type Iprops = {
  height?: number,
  width?: number,
}

export default ({
  height = 0,
  width = 0,
}: Iprops) => {
  return (
    <div style={{
      width,
      height,
    }}></div>
  )
}