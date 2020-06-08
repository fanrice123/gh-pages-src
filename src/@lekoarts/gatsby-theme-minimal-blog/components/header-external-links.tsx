import React from 'react';
import { Link as TLink } from 'theme-ui';
import { faGlobe } from '@fortawesome/free-solid-svg-icons';
import { faInstagram, faGithub, faFacebook } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import useMinimalBlogConfig from "@lekoarts/gatsby-theme-minimal-blog/src/hooks/use-minimal-blog-config"

const HeaderExternalLinks = () => {
  const { externalLinks } = useMinimalBlogConfig();

  const iconizedLinks = externalLinks.map((link) => {
    const newLink = {
      ...link,
      icon: null
    };
    switch (link.name) {
      case 'instagram':
        newLink.icon = faInstagram;
        break;
      case 'facebook':
        newLink.icon = faFacebook;
        break;
      case 'github':
        newLink.icon = faGithub;
        break;
      case 'web':
      default:
        newLink.icon = faGlobe;
        break;
    }

    return newLink;

  });


  //<div sx={{ "a:not(:first-of-type)": { ml: 3 }, fontSize: [`13px`] }} style={{ fontSize: '13px' }}></div>
  return (
    <React.Fragment>
      {iconizedLinks && iconizedLinks.length > 0 && (
        <div style={{ fontSize: '13px' }}>
          {iconizedLinks.map(link => (
            <div style={{ display: 'inline-block', margin: '0 10px' }}>
              <TLink key={link.url} href={link.url}>
                <FontAwesomeIcon icon={link.icon} size='2x' />
              </TLink>
            </div>
          ))}
        </div>
      )}
    </React.Fragment>
  )
};

export default HeaderExternalLinks;
