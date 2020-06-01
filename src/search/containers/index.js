import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';

import {reqSearch, updateTerm} from '../ducks';
import Search from '../components';

export function mapStateToProps({search}) {
  return {
    ...search,
  };
}

export function mapDispatchToProps(dispatch) {
  return bindActionCreators(
    {
      reqSearch,
      updateTerm,
    },
    dispatch,
  );
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Search);
