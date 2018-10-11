import React from 'react'
import faker from 'faker'
import SearchBar from './SearchBar'
import KeywordsResults from './KeywordsResults'
import KeywordList from './KeywordList'
import ListingForm from './ListingForm'

const keywordResults = Array.from({ length: 5 }, (value, index) => ({
  id: index,
  name: faker.company.companyName(),
  relevance: faker.random.number({
    min: 1,
    max: 5
  }),
  sv: faker.random.number({
    min: 1,
    max: 5
  })
}))

export default ({ className }) => (
  <div className={className}>
    <div>
      <h2>Discover Keywords</h2>
      <SearchBar />
      <KeywordsResults data={keywordResults} />
    </div>
    <div>
      <h2>Your Keyword List</h2>
      <KeywordList />
    </div>
    <div>
      <h2>Your Listing</h2>
      <ListingForm />
    </div>
  </div>
)
