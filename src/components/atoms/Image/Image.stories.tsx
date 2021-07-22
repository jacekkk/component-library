import React from 'react'
import { Meta, Story } from '@storybook/react'
import { Image, ImageProps } from './Image'

export default {
  title: 'Atoms/Image',
  component: Image,
} as Meta

const Template: Story<ImageProps> = (args) => <Image {...args} />

export const Basic: Story<ImageProps> = Template.bind({})
Basic.args = {
  src: 'https://www.ctvsh.com/sites/default/files/styles/large/public/golden-retriever-dog-breed-info.jpg',
  alt: 'Good boy',
}

export const WithCustomStyles = Template.bind({})
WithCustomStyles.args = {
  src: 'https://www.ctvsh.com/sites/default/files/styles/large/public/golden-retriever-dog-breed-info.jpg',
  alt: 'Good boy',
  style: {
    width: '200px',
  },
}

export const WithLink = Template.bind({})
WithLink.args = {
  src: 'https://www.ctvsh.com/sites/default/files/styles/large/public/golden-retriever-dog-breed-info.jpg',
  alt: 'Good boy',
  link: 'https://dogtime.com/dog-breeds/golden-retriever',
}
