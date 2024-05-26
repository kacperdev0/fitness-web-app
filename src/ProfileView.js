import React from 'react';
import { Card, CardContent, Avatar, Typography, Box, LinearProgress } from '@mui/material';
import { styled } from '@mui/system';

const ProfileCard = styled(Card)(({ theme }) => ({
    maxWidth: 345,
    margin: 'auto',
    padding: theme.spacing(2),
  }));
  
  const ProfileAvatar = styled(Avatar)(({ theme }) => ({
    width: theme.spacing(10),
    height: theme.spacing(10),
    margin: 'auto',
  }));

function ProfileView({ user }) {

    const progress = (user.caloriesBurned / user.caloriesNeeded) * 100;

  return (
    <div id="right-panel" style={{ height: "92%", padding: "2%", width: "96%", color: "rgb(63, 63, 63)" }}>
    <ProfileCard>
      <CardContent>
        <ProfileAvatar alt={user.name} src={user.avatar} />
        <Typography variant="h5" component="div" align="center" gutterBottom>
          {user.name}
        </Typography>
        <Typography variant="subtitle1" color="textSecondary" align="center" gutterBottom>
          {user.rank}
        </Typography>
        <Box display="flex" justifyContent="space-between" mt={2}>
          <Box textAlign="center">
            <Typography variant="body1" component="div">
              {user.caloriesBurned}
            </Typography>
            <Typography variant="body2" color="textSecondary">
              Calories Burned
            </Typography>
          </Box>
          <Box textAlign="center">
            <Typography variant="body1" component="div">
              {user.exerciseTime}
            </Typography>
            <Typography variant="body2" color="textSecondary">
              Exercise Time
            </Typography>
          </Box>
        </Box>
        <Box mt={2}>
          <Typography variant="body2" color="textSecondary">
            {`Calories needed for next rank: ${user.caloriesNeeded - user.caloriesBurned}`}
          </Typography>
          <LinearProgress variant="determinate" value={progress} />
        </Box>
        <Typography variant="body1" color="textPrimary" align="center" mt={2}>
          {user.description}
        </Typography>
      </CardContent>
    </ProfileCard>
    </div>
  );
}

export default ProfileView;
