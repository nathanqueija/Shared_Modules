import React from 'react'
import ResultsTable from 'modules/KeywordResearch/ResultsTable'

export default ({ className }) => (
  <div className={className}>
    <ResultsTable headings={['Keyword', 'Relevance', 'SV', 'Action']}>
      <tr>
        <td>
          <label htmlFor="key">
            <input type="checkbox" id="key" value="Super Keyword" /> Super
            Keyword
          </label>
        </td>
        <td>1</td>
        <td>SV</td>
        <td>
          <button type="button">-</button>
          <button type="button">+</button>
        </td>
      </tr>
    </ResultsTable>
    <button type="button">Clear List</button>
    <button type="button">Add to backend KW</button>
    <button type="button">Export Keywords</button>
  </div>
)
