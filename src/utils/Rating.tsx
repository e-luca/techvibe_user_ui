import React, { useEffect, useState } from 'react'

interface RatingProps {
    currentRating?: number
    onChange: (rating: number) => void
    editable?: boolean
}

const Rating: React.FC<RatingProps> = ({ currentRating = 0, onChange, editable = true }) => {

    const [rating, setRating] = useState(currentRating)
    const ratings = [1, 2, 3, 4, 5]

    const handleStarClick = (selectedRating: number) => {
        if (!editable) return
        setRating(selectedRating)
        onChange(selectedRating)
    }

    useEffect(() => {
        setRating(currentRating)
    }, [currentRating])

    return (
        <div>
            { ratings.map((index) => (
                <i key={ index } 
                    className={ `${index <= rating ? 'bi bi-star-fill' : 'bi bi-star'}` } 
                    onClick={ () => handleStarClick(index) }>
                </i>
            )) }
        </div>
    )
}

export default Rating