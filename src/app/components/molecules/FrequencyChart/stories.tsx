import React from 'react';
import { storyBuilder, KnobsInterface } from 'core/stories';
import Template from 'app/components/templates/LightCentered';
import mockData from 'app/__test__/mocks/chartData.json';
import palette from 'app/palette';
import FrequencyChart, { Props } from '.';

export const mockProps: Props = {
  color: palette.red,
  data: mockData,
};

export const renderScene = (
  knobProps: Props,
) => (
  knobs: KnobsInterface,
  props: Props = knobProps,
) => (
  <div style={{ minWidth: '80vw' }}>
    <FrequencyChart
      color={knobs.text('color', props.color || '')}
      data={knobs.object('data', props.data)}
    />
  </div>
);

export const scenes = {
  'sample': renderScene({
    ...mockProps,
  }),
  'color': renderScene({
    ...mockProps,
    color: '#bada55',
  }),
  'no data': renderScene({
    ...mockProps,
    data: [],
  }),
};

storyBuilder(
  scenes,
  'molecules/FrequencyChart',
  Template,
);
