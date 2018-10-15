import { compose, withProps } from 'recompose'
import findIndex from 'lodash/findIndex'
import withStatics from 'helpers/statics/set'
import withStyle from './style'
import * as statics from './statics'

export default compose(
  withStyle,
  withProps(({ keywordsSelected, id }) => ({
    selected: findIndex(keywordsSelected, ['id', id]) !== -1
  })),
  withStatics(statics)
)
