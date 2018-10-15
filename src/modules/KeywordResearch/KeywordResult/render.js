import React from 'react'

export default ({
  className,
  id,
  name,
  relevance,
  sv,
  updateKeywordsSelected,
  selected
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
      <button
        type="button"
        onClick={() => updateKeywordsSelected(id, true)}
        disabled={!selected}
      >
        -
      </button>
      <button
        type="button"
        onClick={() => updateKeywordsSelected(id)}
        disabled={selected}
      >
        +
      </button>
    </td>
  </tr>
)
