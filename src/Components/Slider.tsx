import { SliderWrapper, Row, Box, Info, Overley, BigMovie, BigCover, BigTitle, BigOverview } from '../assets/Home';
import { AnimatePresence, useViewportScroll } from "framer-motion";
import { useState } from "react";
import { useHistory, useRouteMatch } from "react-router-dom";
import { IGetMoviesResult } from "../api";
import { makeImagePath } from "../utils";

const rowVariants = {
    hidden: {
        x: window.outerWidth + 5,
    },
    visible: {
        x: 0,
    },
    exit: {
        x: -window.outerWidth - 5,
    },
};

const boxVariants = {
    normal: {
        scale: 1,
    },
    hover: {
        scale: 1.3,
        y: -80,
        transition: {
            delay: 0.5,
            duaration: 0.1,
            type: "tween",
        },
    },
};

const infoVariants = {
    hover: {
        opacity: 1,
        transition: {
            delay: 0.5,
            duaration: 0.1,
            type: "tween",
        },
    },
};

const offset = 6;

export const Slider = ({ data }: { data: IGetMoviesResult}) => {
    const history = useHistory();
    const bigMovieMatch = useRouteMatch<{ movieId: string }>("/movies/:movieId");
    const { scrollY } = useViewportScroll();

    const [index, setIndex] = useState(0);
    const [leaving, setLeaving] = useState(false);
    const incraseIndex = () => {
        if (data) {
            if (leaving) return;
            toggleLeaving();
            const totalMovies = data.results.length - 1;
            const maxIndex = Math.floor(totalMovies / offset) - 1;
            setIndex((prev) => (prev === maxIndex ? 0 : prev + 1));
        }
    };
    const toggleLeaving = () => setLeaving((prev) => !prev);
    const onBoxClicked = (movieId: number) => {
        history.push(`/movies/${movieId}`);
    };
    const onOverlayClick = () => history.push("/");
    const clickedMovie = bigMovieMatch?.params.movieId && data?.results.find((movie) => movie.id === +bigMovieMatch?.params.movieId);
    return (
        <>
            <SliderWrapper>
                <AnimatePresence initial={false} onExitComplete={toggleLeaving}>
                    <Row
                        variants={rowVariants}
                        initial="hidden"
                        animate="visible"
                        exit="exit"
                        transition={{ type: "tween", duration: 1 }}
                        key={index}
                    >
                        {data?.results
                            .slice(1)
                            .slice(offset * index, offset * index + offset)
                            .map((movie) => (
                                <Box
                                    layoutId={movie.id + ""}
                                    key={movie.id}
                                    whileHover="hover"
                                    initial="normal"
                                    variants={boxVariants}
                                    onClick={() => onBoxClicked(movie.id)}
                                    transition={{ type: "tween" }}
                                    bgPhoto={makeImagePath(movie.backdrop_path, "w500")}
                                >
                                    <Info variants={infoVariants}>
                                        <h4>{movie.title}</h4>
                                    </Info>
                                </Box>
                            ))}
                    </Row>
                </AnimatePresence>
                <h2>화살표</h2>          
            </SliderWrapper>
                          
            <AnimatePresence>
                {bigMovieMatch ? (
                    <>
                        <Overley
                            onClick={onOverlayClick}
                            exit={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                        />
                        <BigMovie
                            style={{ top: scrollY.get() + 100 }}
                            layoutId={bigMovieMatch.params.movieId}
                        >
                            {

                                clickedMovie && (
                                    <>
                                        <BigCover
                                            style={{
                                                backgroundImage: `linear-gradient(to top, black, transparent), url(${makeImagePath(clickedMovie.backdrop_path, "w500")})`
                                            }}
                                        />
                                        <BigTitle>{clickedMovie.title}</BigTitle>
                                        <BigOverview>{clickedMovie.overview}</BigOverview>
                                    </>
                                )
                            }
                        </BigMovie>
                    </>
                ) : null}
            </AnimatePresence>
        </>
       
    )
}