import React from 'react'
import ContentLoader from "react-content-loader"

function LoadingBlock() {
  return (
    <ContentLoader
      speed={2}
      width={280}
      height={460}
      viewBox="0 0 280 460"
      backgroundColor="#f3f3f3"
      foregroundColor="#ecebeb"
    >
      <circle cx="140" cy="140" r="140" />
      <rect x="0" y="300" rx="6" ry="6" width="280" height="25" />
      <rect x="3" y="335" rx="6" ry="6" width="280" height="80" />
      <rect x="7" y="427" rx="5" ry="5" width="133" height="25" />
      <rect x="160" y="422" rx="12" ry="12" width="116" height="35" />
  </ContentLoader>
  )
}

export default LoadingBlock
