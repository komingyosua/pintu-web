import { ComponentMeta, ComponentStory } from '@storybook/react';

import Container from './Container.component';

export default {
  title: 'Components/Container',
  component: Container,
} as ComponentMeta<typeof Container>;

const Template: ComponentStory<typeof Container> = args => (
  <Container {...args} />
);

export const Base = Template.bind({});

Base.args = {
  children: <span>This is a test message</span>,
};
