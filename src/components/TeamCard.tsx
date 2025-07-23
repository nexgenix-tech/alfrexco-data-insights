import { SocialIcon } from 'react-social-icons';

interface TeamCardProps {
  name: string;
  title: string;
  description: string;
  linkedinUrl: string;
  initials: string;
}

const TeamCard = ({ name, title, description, linkedinUrl, initials }: TeamCardProps) => {
  return (
    <div className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 p-6 text-center group">
      <div className="mb-6">
        <div className="w-20 h-20 bg-gradient-to-br from-[#F37021] to-[#E5651C] rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
          <span className="text-2xl font-bold text-white">{initials}</span>
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