import React from 'react';
import { storyBuilder, KnobsInterface } from 'core/stories';
import Template from 'app/components/templates/LightCentered';
import FibonacciModal, { Props } from '.';

export const mockProps: Props = {
  number: 3,
  isOpen: true,
  onClose: () => {
    console.log('onClose');
  },
};

export const renderScene = (
  knobProps: Props,
) => (
  knobs: KnobsInterface,
  props: Props = knobProps,
) => (
  <FibonacciModal
    number={knobs.number('number', props.number)}
    isOpen={knobs.boolean('isOpen', props.isOpen)} 
    onClose={mockProps.onClose}
  />
);

export const scenes = {
  'sample': renderScene({
    ...mockProps,
  }),
};

storyBuilder(
  scenes,
  'molecules/FibonacciModal',
  Template,
);
