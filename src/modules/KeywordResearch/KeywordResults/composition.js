import React from 'react'
import { compose, branch, renderComponent, fromRenderProps } from 'recompose'
import isUndefined from 'lodash/isUndefined'
import withStatics from 'helpers/statics/set'
import ResultsMessage from 'modules/KeywordResearch/ResultsMessage'
import { KeywordResearchConsumer } from 'modules/KeywordResearch/context'
import withStyle from './style'
import * as statics from './statics'

const noResults = [
  'We could not find any results.',
  'Please, try to search with different terms.'
]

const initialMessage = ['Type the keyword to start searching.']

export default compose(
  fromRenderProps(
    KeywordResearchConsumer,
    ({ results, updateKeywordsSelected, keywordsSelected }) => ({
      results,
      updateKeywordsSelected,
      keywordsSelected
    })
  ),
  branch(
    ({ results }) => isUndefined(results),
    renderComponent(() => <ResultsMessage messages={initialMessage} />)
  ),
  branch(
    ({ results }) => results.length === 0,
    renderComponent(() => <ResultsMessage messages={noResults} />)
  ),
  withStyle,
  withStatics(statics)
)
