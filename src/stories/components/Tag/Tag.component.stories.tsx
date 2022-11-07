import { ComponentMeta, ComponentStory } from '@storybook/react';

import Tag from './Tag.component';

export default {
  title: 'Components/Tag',
  component: Tag,
} as ComponentMeta<typeof Tag>;

const Template: ComponentStory<typeof Tag> = args => <Tag {...args} />;

export const Primary = Template.bind({});

Primary.args = {
  label: 'DeFi/NFT',
  checked: false,
};
