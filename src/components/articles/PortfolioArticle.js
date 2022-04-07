import React from 'react';
import {
    Button,
    Divider,
    Paper,
    Stack,
    Typography,
    Box,
    ImageList,
    ImageListItem,
} from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import ReviewsCard from '../ReviewsCard'
import { useState } from 'react';
import { useEffect } from 'react';
import NewsCard from '../NewsCard';





const PortfolioArticle = ({projectFromDatabase} ) => {
    

    const [projectData, setProjectData] = useState(projectFromDatabase)
    const handleDelete = () => console.log('%c delete', 'color: red');
    const handleEdit = () => console.log('%c edit', 'color: blue');

    useEffect(() => {
        setProjectData(projectFromDatabase)
    }, [projectFromDatabase])
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
                <Stack justifyContent='end' direction="row" spacing={2}>
                    <Button onClick={handleDelete} color='error' variant="outlined" startIcon={<DeleteIcon />}>
                        Delete
                    </Button>
                    <Button onClick={handleEdit} color='primary' variant="contained" endIcon={<EditIcon />}>
                        Edit
                    </Button>
                </Stack>
                <Typography variant='h5'>Work name: {projectData.workName}</Typography>
                <Typography variant='body1'>Client name: {projectData.clientName}</Typography>
                <Typography variant='body1'>Post date: {new Date(projectData.postDate).toDateString()}</Typography>
                <Divider sx={{ paddingY: 3 }} />
                <ImageList cols={8} rowHeight={164}>
                    {projectData.workImages.map((item) => (
                        <ImageListItem key={item.img}>
                            <img
                                src={`${item.img}?w=164&h=164&fit=crop&auto=format`}
                                srcSet={`${item.img}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
                                alt={item.title}
                                loading="lazy"
                            />
                        </ImageListItem>
                    ))}
                </ImageList>
                <Divider sx={{ paddingY: 3 }} />
                <NewsCard
                    noOptions
                    fullWidth
                    coverImage={projectData.projectBakcgroundImage}
                    title=' Project background'
                    caption={projectData.projectBakcgroundText}
                />
                <Divider sx={{ paddingY: 3 }} />
                <NewsCard
                    noOptions
                    fullWidth
                    coverImage={projectData.whatWeHaveDoneImage}
                    title='What we have done'
                    caption={projectData.whatWeHaveDoneText}
                />
                <Divider sx={{ paddingY: 3 }} />
                <ReviewsCard
                    clientName={projectData.clientName}
                    jopTitle={projectData.clientJopTitle}
                    avatar={projectData.cilentAvatar}
                    caption={projectData.whatOurClientSays}
                    noOptions
                />
            </Paper>
        </Box>
    );
}

export default PortfolioArticle;
