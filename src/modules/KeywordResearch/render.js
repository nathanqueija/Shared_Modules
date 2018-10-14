import React from 'react'
import { KeywordResearchProvider } from 'modules/KeywordResearch/context'

export default ({ className, children, ...props }) => (
  <div className={className}>
    <KeywordResearchProvider value={{ ...props }}>
      {children}
    </KeywordResearchProvider>
  </div>
)
