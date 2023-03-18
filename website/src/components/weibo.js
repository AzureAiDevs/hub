import React from 'react';
import { WeiboShareButton, WeiboIcon } from 'react-share';


export default function Weibo({ url, image }) {
    return (
        <WeiboShareButton
            url={url}
            image={image}
        >
            <WeiboIcon size={32} round />
        </WeiboShareButton>
    );
}
