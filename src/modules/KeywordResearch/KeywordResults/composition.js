import { compose, branch, renderComponent } from 'recompose'
import isUndefined from 'lodash/isUndefined'
import withStatics from 'helpers/statics/set'
import NoResults from 'modules/KeywordResearch/NoResults'
import KeywordResultsStart from 'modules/KeywordResearch/KeywordResultsStart'
import withStyle from './style'
import * as statics from './statics'

export default compose(
  branch(
    ({ results }) => isUndefined(results),
    renderComponent(KeywordResultsStart)
  ),
  branch(({ results }) => results.length === 0, renderComponent(NoResults)),
  withStyle,
  withStatics(statics)
)
