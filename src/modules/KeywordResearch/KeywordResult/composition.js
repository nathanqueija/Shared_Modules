import { compose, fromRenderProps } from 'recompose'
import { KeywordResearchConsumer } from 'modules/KeywordResearch/context'
import withStatics from 'helpers/statics/set'
import withStyle from './style'
import * as statics from './statics'

export default compose(
  fromRenderProps(KeywordResearchConsumer, ({ updateKeywordsOmmited }) => ({
    updateKeywordsOmmited
  })),
  withStyle,
  withStatics(statics)
)
