import Box from '@mui/material/Box';
import LinearProgress from '@mui/material/LinearProgress';
import Typography from '@mui/material/Typography';
import * as React from 'react';

export default function LinearProgressWithLabel({ progress }) {
    console.log(progress);
    return (
        <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <Box sx={{ width: '100%', mr: 1 }}>
                <LinearProgress value={progress} variant="determinate" />
            </Box>
            <Box sx={{ minWidth: 35 }}>
                <Typography variant="body2" color="text.secondary">{`${progress}%`}</Typography>
            </Box>
        </Box>
    );
}
