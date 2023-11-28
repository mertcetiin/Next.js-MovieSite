import React from 'react'

import MovieContainer from '@/containers/movie'
import Movies from '@/mocks/movies.json'
import { notFound } from 'next/navigation'

interface MoviePageProps {
    params: {
        id: string;
    };
    searchParams: {
        error: string
    }
}

async function delay(ms: any) {
    return new Promise((resolve) => setTimeout(resolve, ms))
}

function MoviePage({ params, searchParams }: MoviePageProps) {

    const movieDetail = Movies.results.find(movie => movie.id.toString() === params.id)

    if (!movieDetail) {
        notFound()
    }

    if (searchParams.error === 'true') {
        throw new Error("Error happened");
    }

    return (
        <MovieContainer movie={movieDetail} />
    )
}

export default MoviePage;