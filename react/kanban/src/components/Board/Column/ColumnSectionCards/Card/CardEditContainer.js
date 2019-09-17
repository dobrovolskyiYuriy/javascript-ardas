import { connect } from 'react-redux';
import { updateCard } from '../../../../../store/actions/card';

import CardEdit from './CardEdit';

export default connect(null, { updateCard })(CardEdit);