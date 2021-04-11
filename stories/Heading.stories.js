import React from 'react';

import { Heading, allowedTypes } from '../src';

export default {
  title: 'Crip UI/Heading',
  component: Heading,
  decorators: [(story) => <>{story()}</>],
};

const Template = (args) => <Heading {...args}>Crip in Tech</Heading>;

export const Primary = Template.bind({});
Primary.args = {
  as: 'h1',
};
