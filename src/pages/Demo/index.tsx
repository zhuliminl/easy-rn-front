import React, { useEffect } from 'react'
import IconsPannel from './IconsPannel'
import { IconActivity, IconAddPhoto } from '@components/UI/Icon'
import { Desc, Line, PaddingIt, Text, Space, Modal, Card } from '@components/UI'
import Theme from '@styles/theme'
import { useModal } from '@hooks/useModal'
import { useCloseToast, useShowToast, useToastIsShow, useToastTitle } from '@store/toast'


export default () => {
  const modal1 = useModal()
  const showToast = useShowToast()
  const closeToast = useCloseToast()
  const isShow = useToastIsShow()
  const title = useToastTitle()

  useEffect(() => {

  }, [])

  return (
    <div>
      <IconActivity />
      <IconAddPhoto />
      <IconsPannel />
      <Line />

      <div style={{ width: 300, }}>
        <PaddingIt padding={10} hover border radius={20} bgColor={Theme.ColorWhite} column center style={{ height: 90 }}
          onClick={() => {
            isShow ? closeToast() :
              // showToast('已经加入收藏')
            modal1.open()
          }}
        >
          <Text normal >Modal</Text>
          <Desc>
            {title}
          </Desc>
        </PaddingIt>
        <Space height={100} />
        <Desc>
          空间反垄断
        </Desc>
        <Card shadow border width={300} radius={Theme.BorderRadius2} height={100} />
      </div>
      <Modal ref={modal1.ref}>
        <Card radius={Theme.BorderRadius1} shadow height={100}/>
        <Foo />
      </Modal>
    </div>
  )
}

const Foo = () => {
  console.log('saul FFFFFFf')
  return <div>FFF</div>
}