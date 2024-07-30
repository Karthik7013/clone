import { Avatar, Box, Card, CardContent, Divider, Stack, Typography } from "@mui/material"


type profileCardProps = {
  profile: {
    imgUrl: string,
    firstName: string,
    lastName: string,
    empId: string,
    access: string,
    joinDate: string,
    role: string
  }
}
const ProfileCard = ({ profile }: profileCardProps) => {

  return <Card sx={{ minWidth: 300 }}>
    <CardContent>
      <Stack>
        <Stack direction={'row'} alignItems={'center'} gap={1}>
          <Avatar src="https://img.freepik.com/free-photo/3d-illustration-young-business-man-with-funny-expression-his-face_1142-55156.jpg" />
          <Box>
            <Typography variant="body1">{`${profile.firstName} ${profile.lastName}`}</Typography>
            <Typography variant="caption">{profile.role}</Typography>
          </Box>
        </Stack>
        <Divider sx={{ my: 1 }} />
        <Typography variant="caption">Emp ID : {profile.empId}</Typography>
        <Typography variant="caption">Access : {profile.access}</Typography>
        <Typography variant="caption">Join Date : {profile.joinDate}</Typography>
      </Stack>
    </CardContent>


  </Card>
}

export default ProfileCard;