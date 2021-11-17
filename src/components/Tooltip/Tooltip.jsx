import React from "react";
import { OverlayTrigger, Tooltip, Popover } from 'react-bootstrap';
import './Tooltip.css';

export const TooltipComponent = ({ children, borders = false, placement, tooltipColor = 'white', title = null, tooltipMessage }) => {
  return (
    <>
      <OverlayTrigger
        key={`tooltip-${placement}`}
        placement={placement}
        trigger="hover"
        overlay={
          tooltipColor === 'white' ? (
            borders ? (
              <Popover id="popover-container-borders">
                <div className="popover-div">
                  {(title !== null || title !== '') ? <h6 className="popover-title">{title}</h6> : <h6 style={{ margin: '0' }} className="popover-title">{title}</h6>}
                  <p className="popover-paragraph">{tooltipMessage}</p>
                </div>
              </Popover>
            ) : (
              <Popover id="popover-container">
                <div className="popover-div">
                  {(title !== null || title !== '') ? <h6 className="popover-title">{title}</h6> : <h6 style={{ margin: '0' }} className="popover-title">{title}</h6>}
                  <p className="popover-paragraph">{tooltipMessage}</p>
                </div>
              </Popover>
            )
          ) : (
            <Tooltip id="tooltip-container">
              <div className="tootip-div">
                {(title !== null || title !== '') ? <h6 className="tooltip-title">{title}</h6> : <h6 style={{ margin: '0' }} className="popover-title">{title}</h6>}
                <p className="tooltip-paragraph">{tooltipMessage}</p>
              </div>
            </Tooltip>
          )
        }
      >
        {children}
      </OverlayTrigger>

    </>
  )
}
