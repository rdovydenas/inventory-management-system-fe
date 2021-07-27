import React from 'react';
import Card from './Card';

export default {
  component: Card,
  title: 'Components/Card',
};

export const CardStory = () => (
  <Card quantity={423} name="Name" size="S" color="White" id={23} />
);
