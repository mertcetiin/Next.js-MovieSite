import FeaturedMovie from '@/components/featured-movie';
import React from 'react'

function MovieContainer({ movie }: any) {
    return (
        <FeaturedMovie movie={movie} isCompact={false} />
    )
}

export default MovieContainer;