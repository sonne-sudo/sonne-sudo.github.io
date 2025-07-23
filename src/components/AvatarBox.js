import { Avatar, Box } from '@mui/material';
import AccountCircleRoundedIcon from '@mui/icons-material/AccountCircleRounded';
import Icon from '../static/images/face1.jpeg';

const AvatarBox = () => (
  <Box className="AvatarBox" display="flex">
    <Avatar
      className="Avatar"
      alt="Evan Julius"
      src={Icon}
      sx={{ width: 240, height: 240 }}
    />
  </Box>
);

export default AvatarBox;
