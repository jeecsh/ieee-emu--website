import styles from './logos.module.css';
import ieeeLogo from '../../../public/ieee.png'; // Update with the correct path to the IEEE logo image
import emuLogo from '../../../public/emu.png';   // Update with the correct path to the EMU logo image
import Image from 'next/image';

export default function FloatingLogos() {
  return (
    <div className={styles.floatingLogos}>
      <div className={styles.logo}>
        <Image src={ieeeLogo} alt="IEEE Logo" width={250} height={100} />
      </div>
      <div className={styles.logo}>
        <Image src={emuLogo} alt="EMU Logo" width={200} height={200} />
      </div>
    </div>
  );
}
