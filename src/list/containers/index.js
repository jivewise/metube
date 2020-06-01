import {connect} from 'react-redux';

import List from '../components';

export function mapStateToProps({search}) {
  return {
    ...search,
  };
}

export default connect(mapStateToProps)(List);
