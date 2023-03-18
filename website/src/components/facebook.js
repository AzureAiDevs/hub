import React from 'react';
import { FacebookShareButton, FacebookIcon } from 'react-share';

export default function Facebook({ url, quote, hashtag }) {
    return (
        <FacebookShareButton
            url={url}
            quote={quote}
            hashtag="hashtag"
        >
            <FacebookIcon size={32} round />
        </FacebookShareButton>
    );
};