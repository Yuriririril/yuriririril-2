import Avatar from '@mui/material/Avatar';
import './ProfileAvatar.css';

const ProfileAvatar = () => {
  return (
    <div className="profileAvatar">
      <Avatar
        alt="Remy Sharp"
        src="/static/images/avatar/1.jpg"
        sx={{ width: 96, height: 96 }}
      />
      <div>Yuriririril</div>
    </div>
  );
};

export default ProfileAvatar;
