import ProfileAvatar from './ProfileAvatar/ProfileAvatar';
import SocialMediaButtons from './SocialMediaButtons/SocialMediaButtons';
import './ProfileCard.css'


const ProfileCard = () => {
  return (
    <div className="profileCard">
      <ProfileAvatar />
      <SocialMediaButtons />
    </div>
  );
};

export default ProfileCard;
