import React from 'react'

export default ({ className, mask, setMask, masks, onSubmit }) => (
  <form className={className} onSubmit={onSubmit}>
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
)
