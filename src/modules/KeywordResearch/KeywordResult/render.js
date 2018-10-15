import React from 'react'

export default ({
  className,
  id,
  name,
  relevance,
  sv,
  updateKeywordsSelected,
  updateKeywordsOmmited
}) => (
  <tr className={className}>
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
      <button type="button" onClick={() => updateKeywordsOmmited(id)}>
        -
      </button>
      <button type="button" onClick={() => updateKeywordsSelected(id)}>
        +
      </button>
    </td>
  </tr>
)
