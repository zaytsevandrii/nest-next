import React from 'react';
import {ITrack} from "../types/tracks";
import {Card, Grid, IconButton} from "@material-ui/core";
import styles from '../styles/TrackItem.module.scss'
import {Delete, Pause, PlayArrow} from "@material-ui/icons";
import {useRouter} from "next/router";

interface TrackItemProps {
    track: ITrack;
    active?: boolean;
}
const TrackItem: React.FC<TrackItemProps> = ({track, active = false}) => {
  return (
   <div>{track.name}</div>
  )
}

export default TrackItem