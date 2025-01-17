import React, { ReactNode } from 'react'
import './ToolTip.css'


interface ToolTipProps {
text: string,
children: ReactNode;
}

const ToolTip: React.FC <ToolTipProps> = ({text, children}) => {
  return (
    <div className="tooltip">
    {children}
    <span className="tooltip-text">{text}</span>
  </div>
  )
}

export default ToolTip;
