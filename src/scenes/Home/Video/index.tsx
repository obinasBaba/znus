import React, { useState } from 'react';
import s from './video.module.scss';
import dynamic from 'next/dynamic';
import clsx from 'clsx';
import { IconButton } from '@mui/material';
import {
  PauseCircleFilledTwoTone,
  PlayCircleFilledTwoTone,
} from '@mui/icons-material';

const ReactPlayer = dynamic(() => import('react-player/lazy'), { ssr: false });

const Video = () => {
  const [playing, setPlaying] = useState(false);

  return (
    <div className={s.container}>
      <div className={s.wrapper}>
        <ReactPlayer
          url="https://assets.mixkit.co/videos/preview/mixkit-dubai-city-skyscrapers-and-the-burj-khalifa-20114-large.mp4"
          className={clsx([s.video, 'react-player'])}
          loop={true}
          controls={false}
          playing={playing}
        />

        <div className={clsx([s.overlay, playing && s.playing])} />
        <IconButton
          className={s.play_btn}
          size="large"
          onClick={() => {
            setPlaying(!playing);
          }}
        >
          {playing ? (
            <PauseCircleFilledTwoTone color="primary" fontSize="large" />
          ) : (
            <PlayCircleFilledTwoTone color="primary" fontSize="large" />
          )}
        </IconButton>
      </div>
    </div>
  );
};

export default Video;
