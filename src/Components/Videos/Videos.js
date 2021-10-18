import React, { useState } from 'react';
import InfiniteScroll from 'react-infinite-scroll-component';
import { Link } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';
// import useVideoList from '../../useVideos';
import Video from './Video';

const Videos = () => {
    const { videoLoading, videoError, useVideoList, videos, hasMore } = useAuth();
    const [page, setPage] = useState(1);

    useVideoList(page);

    return (
        <div className=" w-11/12 sm:w-full my-12 mx-auto flex justify-center flex-wrap">
            {videos.length > 0 && (
                <InfiniteScroll
                    dataLength={videos.length}
                    hasMore={hasMore}
                    loader="Loading..."
                    next={() => setPage(page + 8)}
                    className=" w-11/12 sm:w-full my-12 mx-auto flex justify-center flex-wrap"
                >
                    {videos.map((video) =>
                        video.noq > 0 ? (
                            <Link to={`/quiz/${video.youtubeID}`} key={video.youtubeID}>
                                <Video title={video.title} id={video.youtubeID} noq={video.noq} />
                            </Link>
                        ) : (
                            <Video title={video.title} id={video.youtubeID} noq={video.noq} />
                        )
                    )}
                </InfiniteScroll>
            )}
            {!videoLoading && videos.length === 0 && <div>no data found</div>}
            {videoError && <div>there was an error !</div>}
            {videoLoading && <div>Loading...</div>}
        </div>
    );
};

export default Videos;
