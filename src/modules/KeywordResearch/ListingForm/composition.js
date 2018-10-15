import { compose, withStateHandlers, fromRenderProps } from 'recompose'
import { KeywordResearchConsumer } from 'modules/KeywordResearch/context'
import withStatics from 'helpers/statics/set'
import withStyle from './style'
import * as statics from './statics'

const initialBulletpoints = Array.from({ length: 5 }, (value, index) => ({
  id: index
}))

export default compose(
  fromRenderProps(KeywordResearchConsumer, ({ keywordsApplied }) => ({
    keywords: keywordsApplied.join(' ')
  })),
  withStateHandlers(
    {
      finalKeywords: '',
      bulletpoints: initialBulletpoints
    },
    {
      addBulletpoint: ({ bulletpoints }) => () => ({
        bulletpoints: [...bulletpoints, { id: bulletpoints.length }]
      }),
      onChangeKeywords: () => e => ({
        finalKeywords: e.target.value
      })
    }
  ),
  withStyle,
  withStatics(statics)
)
