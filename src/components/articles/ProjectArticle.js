import { Divider, Paper, Stack, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import Paragraph from './Paragraph';



const ProjectArticle = ({
    title ,
    description ,
    startDate,
    endDate,
    teamleader,
    teammember ,
}) => {
    return (
        <Box
            sx={{
                display: 'flex',
                flexWrap: 'wrap',
                justifyContent: 'center',
                paddingX: 4,
                '& > :not(style)': {
                    m: 1,
                },
            }}
        >
            <Paper elevation={3} sx={{ padding: 2 }}>
            <Typography variant='h5'>Title: {title}</Typography>
            <Paragraph paragraphTitle='Description :' paragraphText={description} />
            <Divider sx={{ marginY: 2 }} />
             <Typography variant='h6'>team leader: {teamleader}</Typography>
             <Divider sx={{ marginY: 2 }} />
             <Typography variant='h5'>Team Member </Typography>
            <Stack direction="row" spacing={1}>
                {teammember.map((name, index) =>
                    <Typography key={name + index} >{name + " - "}</Typography>
                )}
            </Stack>
            <Divider sx={{ marginY: 2 }} />
            <Typography> start date: {new Date(startDate).toDateString()} - End date: {new Date(endDate).toDateString()}</Typography>

            </Paper>
        </Box>
    );
}

export default ProjectArticle;
