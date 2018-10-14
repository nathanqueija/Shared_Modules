import {
  compose,
  withStateHandlers,
  withHandlers,
  fromRenderProps
} from 'recompose'
import { KeywordResearchConsumer } from 'modules/KeywordResearch/context'
import withStatics from 'helpers/statics/set'
import withStyle from './style'
import * as statics from './statics'

export default compose(
  withStyle,
  withStatics(statics),
  withStateHandlers(({ masks }) => ({ mask: masks[0] }), {
    setMask: () => ({ target: { value } }) => ({
      mask: value
    })
  }),
  fromRenderProps(KeywordResearchConsumer, ({ onSearch }) => ({
    onSearch
  })),
  withHandlers({
    onSubmit: ({ onSearch, mask }) => e => {
      e.preventDefault()

      const values = Array.from(e.target.elements).reduce(
        (elements, { type, name, value, checked }) => {
          const newValues = { ...elements }
          newValues[name] =
            type === 'checkbox' || type === 'radio' ? checked : value

          return newValues
        },
        {}
      )

      values.mask = mask.toLowerCase()
      onSearch(values)
    }
  })
)
