import React from 'react'
import ResultsTable from 'modules/KeywordResearch/ResultsTable'

export default ({ className, keywordsSelected, updateKeywordsSelected }) => (
  <div className={className}>
    <ResultsTable headings={['Keyword', 'Relevance', 'SV', 'Action']}>
      {keywordsSelected.map(({ id, relevance, name, sv }) => (
        <tr key={id}>
          <td>
            <button
              type="button"
              id={`result${id}`}
              onClick={() => updateKeywordsSelected(id, true)}
            >
              x
            </button>
            {name}
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
