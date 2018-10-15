import { compose, fromRenderProps, withHandlers } from 'recompose'
import { KeywordResearchConsumer } from 'modules/KeywordResearch/context'
import withStatics from 'helpers/statics/set'
import withStyle from './style'
import * as statics from './statics'

export default compose(
  fromRenderProps(
    KeywordResearchConsumer,
    ({
      keywordsSelected,
      updateKeywordsSelected,
      updateKeywordsApplied,
      keywordsApplied
    }) => ({
      keywordsSelected,
      updateKeywordsSelected,
      updateKeywordsApplied,
      keywordsApplied
    })
  ),
  withHandlers({
    onChangeStatus: ({ updateKeywordsApplied }) => (
      id,
      { target: { checked } }
    ) => updateKeywordsApplied(id, checked)
  }),
  withStyle,
  withStatics(statics)
)
