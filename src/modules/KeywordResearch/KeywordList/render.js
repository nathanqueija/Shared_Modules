import React from 'react'
import ResultsTable from 'modules/KeywordResearch/ResultsTable'

export default ({ className, keywordsSelected }) => (
  <div className={className}>
    <ResultsTable headings={['Keyword', 'Relevance', 'SV', 'Action']}>
      {keywordsSelected.map(({ id, relevance, name, sv }) => (
        <tr key={id}>
          <td>
            <label htmlFor={`result${id}`}>
              <input type="checkbox" id={`result${id}`} value="Super Keyword" />
              {name}
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
    <button type="button">Clear List</button>
    <button type="button">Add to backend KW</button>
    <button type="button">Export Keywords</button>
  </div>
)
