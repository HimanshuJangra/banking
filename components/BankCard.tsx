import { formatAmount } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const BankCard = ({
  account,
  userName,
  showBalance = true,
}: CreditCardProps) => {
  return (
    <div className="flex flex-col">
      <Link href="" className="bank-card">
        <div className="bank-card_content">
          <div>
            <h1 className="text-16 font-semibold text-white">
              {account.name || userName}
            </h1>
            <p className="font-ibm-plex-serif font-black text-white">
              {formatAmount(account.currentBalance)}
            </p>
          </div>
          <article className="flex flex-col gap-2">
            <div className="flex justify-between">
              <h1 className="text-12 font-semibold text-white">{userName}</h1>
              <h2 className="text-12 font-semibold text-white">
                &#9679;&#9679; / &#9679;&#9679;
              </h2>
            </div>
            <p className="text-14 font-semibold tracking-[1.1px] text-white">
              &#9679;&#9679;&#9679;&#9679; &#9679;&#9679;&#9679;&#9679;
              &#9679;&#9679;&#9679;&#9679;{" "}
              <span className="text-16">{account.mask || "1234"}</span>
            </p>
          </article>
        </div>
        <div className="bank-card_icon">
          <Image src="/icons/Paypass.svg" height={24} width={20} alt="pay" />
          <Image
            src="/icons/mastercard.svg"
            height={32}
            width={45}
            alt="mastercard"
            className="ml-5"
          />
          <Image
            src="/icons/lines.png"
            height={190}
            width={316}
            alt="lines"
            className="absolute top-0 left-0"
          />
          {/** Copy */}
        </div>
      </Link>
    </div>
  );
};

export default BankCard;
