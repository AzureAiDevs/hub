import React from 'react';
import { TwitterShareButton, TwitterIcon } from 'react-share';


export default function Twitter({ url, title, hashtag }) {
    return (
        <TwitterShareButton
            url={url}
            title={title}
            hashtag={[{hashtag}]}
        >
            <TwitterIcon size={32} round />
        </TwitterShareButton>
    );
}
