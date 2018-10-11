import React from 'react'
import ResultsTable from 'modules/KeywordResearch/ResultsTable'
import RelatedResults from 'modules/KeywordResearch/RelatedResults'

export default ({ className, data }) => (
  <div className={className}>
    <h4>{data.length} Results</h4>
    <button type="button">Add to seed search</button>
    <ResultsTable headings={['Keyword', 'Relevance', 'SV', 'Actions']}>
      {data.map(({ id, name, relevance, sv }) => (
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
