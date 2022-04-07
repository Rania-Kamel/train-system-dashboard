import React from 'react';

// material components
import { CardHeader, Card, Avatar, CardContent, IconButton, Typography } from '@mui/material';

// Icons 
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';

function ReviewsCard({
    handleEdit, handleDelete, avatar, clientName, jopTitle, caption, postDate, noOptions
}) {
    const postDateInString = new Date(postDate);
    return (
        <Card style={{ margin: 20, maxWidth: 345, "*": { padding: 0 } }}>
            <CardHeader
                avatar={<Avatar src={avatar} aria-label="recipe">
                    {clientName[0]}
                </Avatar>}
                title={clientName}
                subheader={jopTitle} />
            <CardContent>
                <Typography variant="body2">
                    {caption}
                </Typography>
            </CardContent>

            {!noOptions && <CardHeader
                action={<>
                    <IconButton onClick={handleEdit} color='primary' aria-label="settings">
                        <EditIcon />
                    </IconButton>
                    <IconButton onClick={handleDelete} color='secondary' aria-label="settings">
                        <DeleteIcon />
                    </IconButton>
                </>}

                subheader={'post date : ' + postDateInString.toDateString()} />}
        </Card>
    );
}

export default ReviewsCard;