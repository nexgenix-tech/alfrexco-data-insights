import { SocialIcon } from 'react-social-icons';
import { useState } from 'react';

interface TeamCardProps {
  name: string;
  title: string;
  description: string;
  linkedinUrl: string;
  initials: string;
  avatar?: string; // Optional avatar URL
}

const TeamCard = ({ name, title, description, linkedinUrl, initials, avatar }: TeamCardProps) => {
  const [imageError, setImageError] = useState(false);
  const [imageLoaded, setImageLoaded] = useState(false);
  
  const hasValidAvatar = avatar && avatar.trim() !== '' && !imageError;
  return (
    <div className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 p-6 text-center group">
      <div className="mb-6">
        <div className="w-24 h-24 rounded-full mx-auto mb-4 group-hover:scale-110 transition-transform duration-300 overflow-hidden relative">
          {hasValidAvatar ? (
            <img 
              src={avatar} 
              alt={name} 
              className="w-full h-full object-cover"
              onError={() => {
                console.log(`Failed to load avatar for ${name}:`, avatar);
                setImageError(true);
              }}
              onLoad={() => {
                console.log(`Successfully loaded avatar for ${name}`);
                setImageLoaded(true);
              }}
            />
          ) : (
            <div className="w-full h-full bg-gradient-to-br from-[#F37021] to-[#E5651C] rounded-full flex items-center justify-center">
              <span className="text-2xl font-bold text-white">{initials}</span>
            </div>
          )}
        </div>
        <h3 className="text-xl font-bold text-[#1A1A1A] mb-2">{name}</h3>
        <p className="text-[#F37021] font-semibold mb-3">{title}</p>
        <p className="text-gray-600 text-sm leading-relaxed">{description}</p>
      </div>
      
      <div className="flex justify-center">
        <SocialIcon
          url={linkedinUrl}
          style={{ height: 40, width: 40 }}
          className="hover:scale-110 transition-transform duration-300"
        />
      </div>
    </div>
  );
};

export default TeamCard;
