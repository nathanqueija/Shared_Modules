import React from 'react'
import KeywordResearchContext from 'modules/KeywordResearch/context'
import KeywordSearch from 'modules/KeywordResearch/KeywordSearch'
import KeywordList from 'modules/KeywordResearch/KeywordList'
import ListingForm from 'modules/KeywordResearch/ListingForm'

export default ({ className, ...props }) => (
  <div className={className}>
    <KeywordResearchContext.Provider value={{ ...props }}>
      <KeywordSearch />
      <KeywordList />
      <ListingForm />
    </KeywordResearchContext.Provider>
  </div>
)
