// https://www.npmjs.com/package/react-share

import React from 'react';
import { TwitterShareButton, TwitterIcon } from 'react-share';
import { WeiboShareButton, WeiboIcon } from 'react-share';
import { FacebookShareButton, FacebookIcon } from 'react-share';
import { EmailShareButton, EmailIcon } from 'react-share';
import { LinkedinShareButton, LinkedinIcon } from 'react-share';


export default function Social({ page_url, image_url, title, hashtags, hashtag, description }) {
    return (
        <div>
            <TwitterShareButton
                url={page_url}
                title={description}
                hashtags={[hashtags]}
            >
                <TwitterIcon size={32} round />
            </TwitterShareButton>
            &nbsp;

            <WeiboShareButton
                url={page_url}
                image={image_url}
            >
                <WeiboIcon size={32} round />
            </WeiboShareButton>
            &nbsp;

            <FacebookShareButton
                url={page_url}
                quote={title}
                hashtag={hashtag}
            >
                <FacebookIcon size={32} round />
            </FacebookShareButton>
            &nbsp;

            <LinkedinShareButton
                title={title}
                url={page_url}
            >
                <LinkedinIcon size={32} round />
            </LinkedinShareButton>
            &nbsp;

            <EmailShareButton
                subject={title}
                body={description}
                url={page_url}
            >
                <EmailIcon size={32} round />
            </EmailShareButton>
        </div>
    );
}
