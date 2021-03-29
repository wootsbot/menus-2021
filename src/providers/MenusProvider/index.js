import { memo, Children } from 'react';
import PropTypes from 'prop-types';

import { compose } from 'redux';
import { connect } from 'react-redux';

import { useInjectReducer } from 'utils/inject-reducer';
import { useInjectSaga } from 'utils/inject-saga';

import saga from './saga';
import reducer from './reducer';

export function MenusProvider({ children }) {
  useInjectSaga({ key: 'menusProvider', saga });
  useInjectReducer({ key: 'menusProvider', reducer });

  return Children.only(children);
}

MenusProvider.propTypes = {
  children: PropTypes.element.isRequired,
};

const withConnect = connect();

export default compose(withConnect, memo)(MenusProvider);
