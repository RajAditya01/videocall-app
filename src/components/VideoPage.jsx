// src/components/VideoPage.jsx
import React, { useEffect, useRef } from 'react';
import { useParams } from 'react-router-dom';
import { ZegoUIKitPrebuilt } from '@zegocloud/zego-uikit-prebuilt';
import { APP_ID, SERVER_SECRET } from './constant'; // Adjust the path if necessary

const VideoPage = () => {
    const { id } = useParams();
    const containerRef = useRef(null);
    const roomID = id;

    useEffect(() => {
        const initializeMeeting = async () => {
            const kitToken = ZegoUIKitPrebuilt.generateKitTokenForTest(APP_ID, SERVER_SECRET, roomID, Date.now().toString(), 'AdityaRaj');

            const zp = ZegoUIKitPrebuilt.create(kitToken);
            zp.joinRoom({
                container: containerRef.current,
                sharedLinks: [
                    {
                        name: 'Copy link',
                        url: `${window.location.protocol}//${window.location.host}${window.location.pathname}?roomID=${roomID}`,
                    },
                ],
                scenario: {
                    mode: ZegoUIKitPrebuilt.OneONoneCall,
                },
            });
        };

        initializeMeeting();
    }, [roomID]);

    return (
        <div ref={containerRef} style={{ width: '100%', height: '100vh' }}>
            {/* ZegoUIKitPrebuilt will render the video call interface in this div */}
        </div>
    );
};

export default VideoPage;
