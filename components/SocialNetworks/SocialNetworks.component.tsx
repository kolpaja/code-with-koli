import { FC } from 'react';
import styles from './SocialNetworks.module.scss';
interface SocialNetworksProps {

}

const SocialNetworks: FC<SocialNetworksProps> = () => (
  <div className={styles.socialNetworksWrapper}>
    <h2>SocialNetworks component</h2>
  </div>
);

export { SocialNetworks };
