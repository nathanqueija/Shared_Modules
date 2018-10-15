import React, { Component } from 'react'
import faker from 'faker'
import KeywordResearch from 'modules/KeywordResearch'

const keyresults = Array.from({ length: 40 }, (value, index) => ({
  id: index,
  name: faker.name.title(),
  relevance: faker.random.number({
    min: 1,
    max: 5
  }),
  sv: faker.random.number({
    min: 1,
    max: 5
  })
}))

class App extends Component {
  state = {}

  onSearchKeyword = async () => {
    const results = await new Promise(resolve =>
      setTimeout(() => resolve([]), 1)
    )
    this.setState({ results: keyresults || results })
  }

  render() {
    const { results } = this.state
    return (
      <div
        style={{
          height: '100vh',
          boxSizing: 'border-box',
          background: '#F3F7F9'
        }}
      >
        <KeywordResearch onSearch={this.onSearchKeyword} results={results}>
          <KeywordResearch.Search />
          <KeywordResearch.KeywordList />
          <KeywordResearch.ListingForm />
        </KeywordResearch>
      </div>
    )
  }
}

export default App
