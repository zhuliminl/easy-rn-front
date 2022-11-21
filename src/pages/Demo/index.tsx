import React from 'react'
import IconsPannel from './IconsPannel'
import { IconActivity, IconAddPhoto } from '@components/UI/Icon'
import { Desc, Line, PaddingIt, Text, Space, Modal, Card } from '@components/UI'
import Theme from '@styles/theme'
import {useModal} from '@hooks/useModal'


export default () => {
  const modal1 = useModal()

  return (
    <div>
      <IconActivity />
      <IconAddPhoto />
      <IconsPannel />
      <Line />

      <div style={{ width: 300, }}>
        <PaddingIt padding={10} hover border radius={20} bgColor={Theme.ColorWhite} column center style={{ height: 90}}
        onClick={() => {
          modal1.open()
        }}
        >
          <Text normal >Modal</Text>
          <Desc>
            空间反垄断
          </Desc>
        </PaddingIt>
        <Space height={100} />
          <Desc>
            空间反垄断
          </Desc>
        <Card showdow border width={300} radius={Theme.BorderRadius2}/>
      </div>
      <Modal ref={modal1.ref}>
        <Card radius={Theme.BorderRadius1} showdow/>
      </Modal>
    </div>
  )
}