import { compose, fromRenderProps } from 'recompose'
import { KeywordResearchConsumer } from 'modules/KeywordResearch/context'
import withStatics from 'helpers/statics/set'
import withStyle from './style'
import * as statics from './statics'

// usar connect ants do db pra puxar info da store via props
export default compose(
  fromRenderProps(KeywordResearchConsumer, ({ keywordsSelected }) => ({
    keywordsSelected
  })),
  withStyle,
  withStatics(statics)
)
