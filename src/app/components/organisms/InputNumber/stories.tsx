import React from 'react';
import { storyBuilder, KnobsInterface } from 'core/stories';
import Template from 'app/components/templates/LightCentered';
import InputNumber, { Props } from '.';

export const mockProps: Props = {
  min: 0,
  max: 1000,
  dataExists: false,
  disabled: false,
  onSubmit: (n: number) => {
    console.log(`onSubmit(${n.toString()})`);
  },
};

export const renderScene = (
  knobProps: Props,
) => (
  knobs: KnobsInterface,
  props: Props = knobProps,
) => (
  <div style={{ width: '80vw' }}>
    <InputNumber
      min={knobs.number('min', props.min)}
      max={knobs.number('max', props.max)}
      dataExists={knobs.boolean('dataExists', !!props.dataExists)}
      disabled={knobs.boolean('disabled', !!props.disabled)}
      onSubmit={mockProps.onSubmit}
    />
  </div>
);

export const scenes = {
  'sample': renderScene({
    ...mockProps,
  }),
  'data exists': renderScene({
    ...mockProps,
    dataExists: true,
  }),
  'disabled': renderScene({
    ...mockProps,
    disabled: true,
  }),
};

storyBuilder(
  scenes,
  'organisms/InputNumber',
  Template,
);
