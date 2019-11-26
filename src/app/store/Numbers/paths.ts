import { StorePaths } from 'core/store';

const paths: StorePaths = {
  frequencies: () => ['numbers', 'frequencies'],
  frequency: (number: number) => ['numbers', 'frequencies', number.toString()],
  fibModal: () => ['numbers', 'fibModal'],
};

export default paths;
