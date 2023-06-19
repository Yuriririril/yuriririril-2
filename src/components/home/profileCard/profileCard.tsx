import ProfileBadge from './profileBadge/profileBadge';
import SocialMediaButtons from './socialMediaButtons/socialMediaButtons';

const profileCard = () => {
  return (
    <div className="profileCard">
      <ProfileBadge />
      <SocialMediaButtons />
    </div>
  );
};

export default profileCard;
