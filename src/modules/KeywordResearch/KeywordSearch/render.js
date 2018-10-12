import React from 'react'
import SearchBar from 'modules/KeywordResearch/SearchBar'
import KeywordResults from 'modules/KeywordResearch/KeywordResults'
import KeywordResearchContext from 'modules/KeywordResearch/context'

export default ({ className }) => (
  <KeywordResearchContext.Consumer>
    {({ results }) => (
      <div className={className}>
        <SearchBar />
        <KeywordResults results={results} />
      </div>
    )}
  </KeywordResearchContext.Consumer>
)
