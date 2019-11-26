import forEach from 'lodash/forEach';
import { mount } from 'enzyme';
import {
  BarChart,
  ResponsiveContainer,
} from 'recharts';
import { getTestScenes, mountScenes } from 'core/test';
import { scenes } from './stories';
import FrequencyChart from '.';
import * as Style from './style';

// hacky suppress recharts width/height warnings (I would normally not do this)
console.warn = () => {};

const testScenes = getTestScenes(
  mountScenes(scenes),
  FrequencyChart,
  component => ({
    styleWrapper: component
      .find(Style.Wrapper),
    responsiveContainer: component
      .find(Style.Wrapper)
      .find(ResponsiveContainer),
    barChart: component
      .find(Style.Wrapper)
      .find(BarChart),
}));

describe('components/FrequencyChart', () => {
  it(`always mounts the FrequencyChart component`, () => {
    forEach(testScenes, scene => {
      expect(scene.component.length).toBe(1);
    });
  });
  it(`always mounts a Style.Wrapper component`, () => {
    forEach(testScenes, scene => {
      expect(scene.elements.styleWrapper.length).toBe(1);
    });
  });
  describe('if there is no data', () => {
    it(`does not mount a recharts ResponsiveContainer component`, () => {
      forEach(testScenes, scene => {
        if (!scene.props.data.length) {
          expect(scene.elements.responsiveContainer.length).toBe(0);
        }
      });
    });
  });
  describe('if there is data', () => {
    it(`mounts a recharts ResponsiveContainer component`, () => {
      forEach(testScenes, scene => {
        if (scene.props.data.length) {
          expect(scene.elements.responsiveContainer.length).toBe(1);
        }
      });
    });
    it(`mounts a recharts BarChart component`, () => {
      forEach(testScenes, scene => {
        if (scene.props.data.length) {
          expect(scene.elements.barChart.length).toBe(1);
        }
      });
    });
    it(`passes data prop to a BarChart data prop`, () => {
      forEach(testScenes, scene => {
        if (scene.props.data.length) {
          const { barChart } = scene.elements;
          expect(barChart.props().data).toEqual(scene.props.data);
        }
      });
    });
    it(`mounts a recharts CartesianGrid component first inside BarChart`, () => {
      forEach(testScenes, scene => {
        if (scene.props.data.length) {
          const component = scene.elements.barChart.props().children[0];
          expect(component.type.displayName).toEqual('CartesianGrid');
          const wrapper = mount(component);
          expect(wrapper.length).toBe(1);
        }
      });
    });
    it(`mounts a recharts XAxis component next inside BarChart`, () => {
      forEach(testScenes, scene => {
        if (scene.props.data.length) {
          const component = scene.elements.barChart.props().children[1];
          expect(component.type.displayName).toEqual('XAxis');
          const wrapper = mount(component);
          expect(wrapper.length).toBe(1);
        }
      });
    });
    it(`mounts a recharts YAxis component next inside BarChart`, () => {
      forEach(testScenes, scene => {
        if (scene.props.data.length) {
          const component = scene.elements.barChart.props().children[2];
          expect(component.type.displayName).toEqual('YAxis');
          const wrapper = mount(component);
          expect(wrapper.length).toBe(1);
        }
      });
    });
    it(`mounts a recharts Tooltip component next inside BarChart`, () => {
      forEach(testScenes, scene => {
        if (scene.props.data.length) {
          const component = scene.elements.barChart.props().children[3];
          expect(component.type.displayName).toEqual('Tooltip');
          const wrapper = mount(component);
          expect(wrapper.length).toBe(1);
        }
      });
    });
    it(`mounts a recharts Bar component inside BarChart`, () => {
      forEach(testScenes, scene => {
        if (scene.props.data.length) {
          const component = scene.elements.barChart.props().children[4];
          expect(component.type.displayName).toEqual('Bar');
          const wrapper = mount(component);
          expect(wrapper.length).toBe(1);
        }
      });
    });
    it(`passes color prop to a Bar fill prop`, () => {
      forEach(testScenes, scene => {
        if (scene.props.data.length) {
          const component = scene.elements.barChart.props().children[4];
          expect(component.type.displayName).toEqual('Bar');
          const bar = mount(component) as any;
          expect(bar.props().fill).toEqual(scene.props.color);
        }
      });
    });
  });
});
