import React from 'react'
import ResultsTable from 'modules/KeywordResearch/ResultsTable'
import RelatedResults from 'modules/KeywordResearch/RelatedResults'

export default ({ className, results }) => (
  <div className={className}>
    <h4>{results.length} Results</h4>
    <button type="button">Add to seed search</button>
    <ResultsTable headings={['Keyword', 'Relevance', 'SV', 'Actions']}>
      {results.map(({ id, name, relevance, sv }) => (
        <tr key={id}>
          <td>
            <label htmlFor={name}>
              <input type="checkbox" id={name} value={name} /> {name}
            </label>
          </td>
          <td>{relevance}</td>
          <td>
            <progress value={sv} max="5" />
          </td>
          <td>
            <button type="button">-</button>
            <button type="button">+</button>
          </td>
        </tr>
      ))}
    </ResultsTable>
    <RelatedResults />
  </div>
)
