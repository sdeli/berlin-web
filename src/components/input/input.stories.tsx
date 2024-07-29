import React from 'react';
import type {Meta, StoryObj} from '@storybook/react';

import {input} from './input';

const meta: Meta<typeof input> = {
  component: input,
};

export default meta;

type Story = StoryObj<typeof input>;

export const Basic: Story = {args: {}};
