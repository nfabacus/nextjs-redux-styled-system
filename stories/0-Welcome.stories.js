import React from 'react';
import LinkTo from '@storybook/addon-links/react';

export default {
  title: 'Introduction'
};

export const Welcome = () => {
  return (
    <div>
      <h1>Welcome to Storybook!</h1>
      <LinkTo kind="buttons--buttons">Link to Button</LinkTo>
    </div>
  )
};

//// you can change the name of the story here.
// Welcome.story = {
//   name: 'Welcome',
// };
