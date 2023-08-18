import React from 'react'

interface ProgressBarProps {
    minValue: number,
    maxValue: number,
    currentValue: number
}

const ProgressBar: React.FC<ProgressBarProps> = ({ minValue, maxValue, currentValue }) => {
    return (
        <div className="progress">
            <div className="progress-bar bg-danger"
                 role="progressbar"
                 style={{ width: `${currentValue}%` }}
                 aria-valuenow={ currentValue }
                 aria-valuemin={ minValue }
                 aria-valuemax={ maxValue }>
            </div>
        </div>
    )
}

export default ProgressBar