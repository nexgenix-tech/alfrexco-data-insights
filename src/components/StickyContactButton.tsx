
import { Link } from "react-router-dom";

const StickyContactButton = () => {
  return (
    <Link
      to="/contact"
      className="fixed bottom-6 right-6 bg-[#F37021] text-white px-6 py-3 rounded-full shadow-lg hover:bg-[#E5651C] transition-all duration-300 hover:scale-105 z-40 font-medium text-sm"
    >
      Contact Us
    </Link>
  );
};

export default StickyContactButton;
