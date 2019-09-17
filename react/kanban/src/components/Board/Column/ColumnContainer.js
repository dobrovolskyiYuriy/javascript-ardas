import { connect } from 'react-redux';
import { addCard } from '../../../store/actions/card';

import Column from './Column';

export default connect(null, { addCard })(Column);