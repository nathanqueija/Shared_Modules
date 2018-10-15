import { compose } from 'recompose'
import withStatics from 'helpers/statics/set'
import withStyle from './style'
import * as statics from './statics'

export default compose(
  withStyle,
  withStatics(statics)
)
