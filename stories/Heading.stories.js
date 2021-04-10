import React from 'react';

import { Heading } from '../src';

export default {
  title: 'Crip UI/Heading',
  component: Heading,
  argTypes: {},
};

const Template = (args) => <Heading {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  as: 'h1',
};
