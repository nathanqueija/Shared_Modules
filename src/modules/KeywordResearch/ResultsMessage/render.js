import React from 'react'

export default ({ className, messages }) => (
  <div className={className}>
    {messages.map(message => (
      <p key={message}>{message}</p>
    ))}
  </div>
)
