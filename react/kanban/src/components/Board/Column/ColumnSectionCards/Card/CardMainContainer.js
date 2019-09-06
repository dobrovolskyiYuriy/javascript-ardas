import { connect } from 'react-redux';
import { deleteCard } from '../../../../../store/actions/card';

import CardMain from './CardMain';

export default connect(null, { deleteCard })(CardMain);