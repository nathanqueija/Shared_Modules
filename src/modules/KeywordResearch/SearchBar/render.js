import React from 'react'
import KeywordResearchProvider from 'modules/KeywordResearch/context'

export default ({ className, mask, setMask, masks }) => (
  <KeywordResearchProvider.Consumer>
    {({ onSearch }) => (
      <form
        className={className}
        onSubmit={e => {
          e.preventDefault()

          const values = Array.from(e.target.elements).reduce(
            (elements, { type, name, value, checked }) => {
              const newValues = { ...elements }
              newValues[name] =
                type === 'checkbox' || type === 'radio' ? checked : value

              return newValues
            },
            {}
          )

          values.mask = mask.toLowerCase()
          onSearch(values)
        }}
      >
        {masks.map(currentMask => (
          <label key={currentMask} htmlFor={`mask${currentMask.toLowerCase()}`}>
            {currentMask}
            <input
              type="radio"
              name="mask"
              id={`mask${currentMask.toLowerCase()}`}
              value={currentMask.toLowerCase()}
              checked={mask.toLowerCase() === currentMask.toLowerCase()}
              onChange={setMask}
            />
          </label>
        ))}
        <select name="country">
          <option value="DE">Germany</option>
          <option value="US">US</option>
          <option value="IT">Italy</option>
          <option value="SP">Spain</option>
        </select>
        <input type="text" name="keyword" autoComplete="off" />
        <label htmlFor="exclude-permutations">
          <input
            type="checkbox"
            id="exclude-permutations"
            name="permutations"
            defaultChecked={false}
          />
          Exclude Permutations
        </label>
      </form>
    )}
  </KeywordResearchProvider.Consumer>
)
