import React from 'react';
import { EmailShareButton, EmailIcon } from 'react-share';


export default function Email({ title, description }) {
    return (
        <EmailShareButton
            subject={title}
            body={description}
        >
            <EmailIcon size={32} round />
        </EmailShareButton>
    );
}
