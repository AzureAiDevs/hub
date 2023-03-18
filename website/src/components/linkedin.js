// https://www.npmjs.com/package/react-share

import React from 'react';
import { LinkedinShareButton, LinkedinIcon } from 'react-share';

export default function LinkedIn({ url, title }) {
    return (
        <LinkedinShareButton
            title={title}
            url={url}
        >
            <LinkedinIcon size={32} round />
        </LinkedinShareButton>
    )
}