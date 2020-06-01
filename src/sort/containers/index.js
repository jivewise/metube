import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';

import {updateSort} from '../ducks';
import Sort from '../components';

export function mapStateToProps({search}) {
  return {
    ...search,
  };
}

export function mapDispatchToProps(dispatch) {
  return bindActionCreators(
    {
      updateSort,
    },
    dispatch,
  );
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Sort);
