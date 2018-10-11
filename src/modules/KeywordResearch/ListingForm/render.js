import React from 'react'

export default ({ className, bulletpoints, addBulletpoint }) => (
  <form className={className}>
    <label htmlFor="name">
      Name
      <input id="name" name="name" type="text" autoComplete="off" />
    </label>
    {bulletpoints.map(({ id }) => (
      <label htmlFor={`bulletpoint${id + 1}`} key={id}>
        {`Bulletpoint ${id + 1}`}
        <input
          id={`bulletpoint${id + 1}`}
          name={`bulletpoint${id + 1}`}
          type="text"
          autoComplete="off"
        />
      </label>
    ))}
    <button type="button" onClick={addBulletpoint}>
      Add bulletpoint
    </button>
    <label htmlFor="backend_keywords">
      Backend Keywords
      <textarea id="backend_keywords" rows="4" cols="50" />
    </label>
    <button type="submit">Export Listing</button>
  </form>
)
