import { StoryObj, Meta } from '@storybook/react';

import Text from '../text';

export default {
  component: Text.SansMedium,
} as Meta<typeof Text.SansMedium>;

export const SansMedium: StoryObj<typeof Text.SansMedium> = {
  args: {
    children: 'SansMedium',
  },
};