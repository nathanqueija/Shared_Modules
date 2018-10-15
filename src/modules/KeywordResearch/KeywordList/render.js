import React, { Fragment } from 'react'
import ResultsTable from 'modules/KeywordResearch/ResultsTable'

export default ({
  className,
  keywordsSelected,
  updateKeywordsSelected,
  onChangeStatus,
  keywordsApplied
}) => (
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
            {name.split(' ').map(piece => (
              <Fragment key={piece}>
                <span
                  className={`${
                    keywordsApplied.indexOf(piece) === -1 ? 'not-' : ''
                  }included`}
                >
                  {piece}
                </span>{' '}
              </Fragment>
            ))}
          </td>
          <td>{relevance}</td>
          <td>
            <progress value={sv} max="5" />
          </td>
          <td>
            <input type="checkbox" onChange={onChangeStatus.bind(null, id)} />
          </td>
        </tr>
      ))}
    </ResultsTable>
    <button type="button">Clear List</button>
    <button type="button">Add to backend KW</button>
    <button type="button">Export Keywords</button>
  </div>
)
