import { Map } from 'immutable';

export type Frequency = number;
export const defaultFrequency: Frequency = 0;

export type Frequencies = Map<number, Frequency>;
export const defaultFrequencies: Frequencies = Map();

export type FibModal = number | undefined;
export const defaultFibModal = undefined;

export type FrequencyChartData = {
  number: string,
  frequency: number,
}[];
