import React from 'react'
import ResultsTable from 'modules/KeywordResearch/ResultsTable'
import RelatedResults from 'modules/KeywordResearch/RelatedResults'
import KeywordResult from 'modules/KeywordResearch/KeywordResult'

export default ({ className, results, ...props }) => (
  <div className={className}>
    <h4>{results.length} Results</h4>
    <button type="button">Add to seed search</button>
    <ResultsTable headings={['Keyword', 'Relevance', 'SV', 'Actions']}>
      {results.map(result => (
        <KeywordResult key={result.id} {...result} {...props} />
      ))}
    </ResultsTable>
    <RelatedResults />
  </div>
)
