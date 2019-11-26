import { createSelector } from 'reselect';
import { AppState } from 'core/store';
import * as DataTypes from './dataTypes';
import paths from './paths';

/*
 * getFrequency
 */

const getFrequencySelector = (
  state: AppState,
  number: number,
): DataTypes.Frequency => state.get('app').getIn(
  paths.frequency(number),
  DataTypes.defaultFrequency,
);

export const getFrequency = createSelector([
  getFrequencySelector,
], (frequency: DataTypes.Frequency) => frequency);

/*
 * getFrequencies
 */

const getFrequenciesSelector = (
  state: AppState,
): DataTypes.Frequencies => state.get('app').getIn(
  paths.frequencies(),
  DataTypes.defaultFrequencies,
);

export const getFrequencies = createSelector([
  getFrequenciesSelector,
], (frequencies: DataTypes.Frequencies) => frequencies);

/*
 * getFrequencyChartData
 */

export const getFrequencyChartData = createSelector([
  getFrequenciesSelector,
], (frequencies: DataTypes.Frequencies) => frequencies.map((
  value: number,
  key: number,
) => ({
  number: key.toString(),
  frequency: value,
})).valueSeq());

/*
 * getFibModal
 */

const getFibModalSelector = (
  state: AppState,
): DataTypes.FibModal => state.get('app').getIn(
  paths.fibModal(),
  DataTypes.defaultFibModal,
);

export const getFibModal = createSelector([
  getFibModalSelector,
], (fibModal: DataTypes.FibModal) => fibModal);
