import { handleActions } from 'redux-actions';

import assignDeep from '~/utils/assign-deep';

import { INITIAL, SET_DATA } from './constants';

export default handleActions({
  [SET_DATA](state, { data }) {
    return { ...assignDeep(state, data) };
  },
}, INITIAL);
