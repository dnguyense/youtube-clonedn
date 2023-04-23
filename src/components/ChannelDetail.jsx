import React from 'react';
import {useState, useEffect} from "react";
import { useParams } from 'react-router-dom';
import { Box } from '@mui/material';

import {Video, ChannelCard} from './';
import { fetchFromAPI } from '../utils/fetchFromAPI';
const ChannelDetail = () => {

  const [channelDetail, setChannelDetail] = useState(null);
  const [videos, setVideos] = useState([]);
  const {id} = useParams();
  useEffect(() =>{
    fetchFromAPI(`search?channelId=${id}&part=snippet&order=date`).then((data) => setVideos(data?.items));
 }, [id])

  useEffect(() =>{
     fetchFromAPI(`channels?part=snippet&id=${id}`).then((data) => setChannelDetail(data?.items[0]));
  }, [id])
  return (
    <Box minHeight="95vh">
      <Box>
        <div style={{background: 'linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(121,76,9,1) 5%, rgba(0,212,255,1) 100%)',zIndex: 10, height: "300px"
}}>
       
        </div>
        <ChannelCard channelDetail={channelDetail} marginTop='-110px' />
      </Box>
      <Box display="flex" p="2">
        <Box sx={{mr: {sm: "100px"}}} />
            <Video videos={videos}></Video>
      </Box>
    </Box>
  )
}

export default ChannelDetail