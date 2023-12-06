import { FC } from 'react';
import styles from './BuyMeCoffee.module.scss';
import Link from 'next/link';

import buyMeCoffee from 'assets/imgs/bymecoffeeMembership.png';
import Image from 'next/image';

interface BuyMeCoffeeProps {
  showTitle?: boolean;
}

const BuyMeCoffee: FC<BuyMeCoffeeProps> = ({ showTitle = true }) => {
  return (
    <div className={styles.buyMeCoffeeWrapper}>
      {showTitle && (
        <h2 className="text-2xl md:text-4xl mb-4 md:6">
          Offer me a Coffee ☕ or Tea 🍵
        </h2>
      )}
      <p className="text-lg w-full text-center capitalize md:text-xl">
        click or scan the QR code
      </p>
      <Link
        href="https://www.buymeacoffee.com/kolpaja"
        target="_blank"
        className="w-full flex justify-center p-4 md:p-6"
      >
        <div>
          <Image
            src={buyMeCoffee}
            alt="buy me a cofee"
            width={164}
            height={164}
            className="rounded-xl animate-pulse ring-2 ring-yellow-400"
          />
        </div>
      </Link>
    </div>
  );
};

export { BuyMeCoffee };
