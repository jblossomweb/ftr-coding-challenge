import React from 'react';
import mapValues from 'lodash/mapValues';
import Adapter from 'enzyme-adapter-react-16';
import { MemoryRouter as Router } from 'react-router-dom';
import {
  ReactWrapper,
  configure,
  mount,
  shallow,
} from 'enzyme';

import { mockKnobs } from 'core/knobs';

configure({ adapter: new Adapter() });

export type Scene = (...args: any[]) => JSX.Element;

export interface Scenes {
  [key: string]: Scene,
};

export type MountedScene = ReactWrapper;

export interface MountedScenes {
  [key: string]: MountedScene,
};

export const mountScenes = (
  scenes: Scenes,
  shallowMount?: boolean,
) => {
  const mounter: Function = shallowMount ? shallow : mount;
  return mapValues(
    scenes,
    (scene: Scene) => mounter(
      <Router>
        {scene(mockKnobs)}
      </Router>
    ),
  );
};

export const getTestScenes = (
  mountedScenes: MountedScenes,
  mainComponent: (
    ((props: any) => JSX.Element | null) |
    React.Component |
    React.ComponentClass<any>
  ),
  getElements: (mountedComponent: any) => any,
) => mapValues(mountedScenes, (
  wrapper: MountedScene,
) => {
  const component = wrapper.find(mainComponent);
  const props = component.props();
  const elements = getElements(component);
  return { component, props, elements, wrapper };
});
