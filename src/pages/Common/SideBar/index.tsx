import React from 'react'
import { PaddingIt, Text, Space, Line } from '@components/UI'
import Theme from '@styles/theme'
import { IconActivity, IconAddPhoto, IconAndroid, IconApple, IconAppleAppStore, IconBell, IconUpdate } from '@components/UI/Icon'
import ModuleCell from '@components/ModuleCell'
import ModuleTitle from '@components/ModuleTitle'

export default () => {
  return (
    <div>
      <PaddingIt padding={Theme.Space2} column>
        <Space height={Theme.Space2} />
        <ModuleCell Icon={IconAppleAppStore} title='发布' onPress={() => {

        }} />
        <Space height={Theme.Space3} />
        <Space height={Theme.Space2} />
        <ModuleTitle title='Project' />
        <Space height={Theme.Space2} />
      </PaddingIt>
      <Line />
      <PaddingIt padding={Theme.Space2} column>
        <ModuleCell Icon={IconAddPhoto} title='开发者' onPress={() => {

        }} />
        <Space />
        <ModuleCell active Icon={IconAppleAppStore} title='发布' onPress={() => {

        }} />
        <Space />
        <ModuleCell Icon={IconUpdate} title='灰度控制' onPress={() => {

        }} />
        <Space />
        <ModuleCell Icon={IconAndroid} title='灰度控制' onPress={() => {

        }} />
        <Space />
        <ModuleCell Icon={IconBell} title='流量' onPress={() => {

        }} />
        <Space />
        {/* <ModuleCell active onlyText title='异常' onPress={() => {
        }} /> */}
        <Space />
      </PaddingIt>
      <ModuleTitle title='Project' />
      <Space height={Theme.Space2} />
      <Line />
      <PaddingIt padding={Theme.Space2} column>
        <ModuleCell Icon={IconAddPhoto} title='Apple' onPress={() => {

        }} />
        <Space />
        <ModuleCell Icon={IconAppleAppStore} title='Store' onPress={() => {

        }} />
        <Space />
        <ModuleCell Icon={IconUpdate} title='Update' onPress={() => {

        }} />
        <Space />
      </PaddingIt>

    </div>
  )
}