import React from 'react'
import SearchBar from 'modules/KeywordResearch/SearchBar'
import KeywordResults from 'modules/KeywordResearch/KeywordResults'

export default ({ className }) => (
  <div className={className}>
    <SearchBar />
    <KeywordResults />
  </div>
)
