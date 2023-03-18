import React from 'react';
import { TwitterShareButton, TwitterIcon } from 'react-share';


export default function Twitter({ url, quote, hashtag }) {
    return (
        <TwitterShareButton
            url={url}
            quote={quote}
            hashtag={[{hashtag}]}
        >
            <TwitterIcon size={32} round />
        </TwitterShareButton>
    );
}
