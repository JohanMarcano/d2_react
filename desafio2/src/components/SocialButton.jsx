import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook } from '@fortawesome/free-brands-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';

const SocialButton = ({ icon }) => {
  let socialIcon;

  switch (icon) {
    case 'facebook':
      socialIcon = faFacebook;
      break;
    case 'github':
        socialIcon = faGithub;
      break;
    case 'linkedin':
      socialIcon = faLinkedin;
      break;
    default:
      socialIcon = null;
  }

  return (
    <button className="social-button">
      {socialIcon && <FontAwesomeIcon icon={socialIcon} />}
    </button>
  );
};

export default SocialButton;

