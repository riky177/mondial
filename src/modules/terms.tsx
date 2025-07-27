'use client';

import { useTranslations } from 'next-intl';
import React from 'react';

const Terms = () => {
  const t = useTranslations('terms');

  return (
    <div className="container-sm w-full px-5 pb-40 pt-2 font-red-hat font-light md:px-0">
      <div className="terms-wrapper">
        <div className="list">
          <h2 className="mb-[15px] mt-10 text-lg font-medium md:mb-5 md:text-xl">
            {t('title')}
          </h2>
          <p className="mb-2 text-[15px] font-light leading-[22px] md:text-base">
            {t('introduction.welcome')}
          </p>
          <p className="mb-2 text-[15px] font-light leading-[22px] md:text-base">
            {t('introduction.applicability')}
          </p>
        </div>
        <div className="list">
          <h2 className="mb-[15px] mt-10 text-lg font-medium md:mb-5 md:text-xl">
            {t('definitions.title')}
          </h2>
          <p className="mb-2 text-[15px] font-light leading-[22px] md:text-base">
            {t('definitions.intro')}
          </p>
          <ul className="list-disc space-y-2 pl-6">
            {Array.from({ length: 7 }).map((_, index) => (
              <li key={index}>{t(`definitions.items.${index + 1}`)}</li>
            ))}
          </ul>
        </div>
        <div className="list">
          <h2 className="mb-[15px] mt-10 text-lg font-medium md:mb-5 md:text-xl">
            {t('accountRegistration.title')}
          </h2>
          <p className="mb-2 text-[15px] font-light leading-[22px] md:text-base">
            {t('accountRegistration.content')}
          </p>
        </div>
        <div className="list">
          <h2 className="mb-[15px] mt-10 text-lg font-medium md:mb-5 md:text-xl">
            {t('statements.title')}
          </h2>
          <ul className="list-disc space-y-2 pl-6">
            {Array.from({ length: 4 }).map((_, index) => (
              <li key={index}>{t(`statements.items.${index + 1}`)}</li>
            ))}
          </ul>
        </div>
        <div className="list">
          <h2 className="mb-[15px] mt-10 text-lg font-medium md:mb-5 md:text-xl">
            {t('prohibitedActivities.title')}
          </h2>
          <p className="mb-2 text-[15px] font-light leading-[22px] md:text-base">
            {t('prohibitedActivities.intro')}
          </p>
          <ul className="list-disc space-y-2 pl-6">
            {Array.from({ length: 10 }).map((_, index) => (
              <li key={index}>
                {t(`prohibitedActivities.items.${index + 1}`)}
              </li>
            ))}
          </ul>
        </div>
        <div className="list">
          <h2 className="mb-[15px] mt-10 text-lg font-medium md:mb-5 md:text-xl">
            {t('contractFormation.title')}
          </h2>
          <ul className="list-disc space-y-2 pl-6">
            {Array.from({ length: 4 }).map((_, index) => (
              <li key={index}>{t(`contractFormation.items.${index + 1}`)}</li>
            ))}
          </ul>
        </div>
        <div className="list">
          <h2 className="mb-[15px] mt-10 text-lg font-medium md:mb-5 md:text-xl">
            {t('priceAndPayment.title')}
          </h2>
          <ul className="list-disc space-y-2 pl-6">
            {Array.from({ length: 5 }).map((_, index) => (
              <li key={index}>{t(`priceAndPayment.items.${index + 1}`)}</li>
            ))}
          </ul>
        </div>
        <div className="list">
          <h2 className="mb-[15px] mt-10 text-lg font-medium md:mb-5 md:text-xl">
            {t('rejectionAndOrderErrors.title')}
          </h2>
          <ul className="list-disc space-y-2 pl-6">
            {Array.from({ length: 4 }).map((_, index) => (
              <li key={index}>
                {t(`rejectionAndOrderErrors.items.${index + 1}`)}
              </li>
            ))}
          </ul>
        </div>
        <div className="list">
          <h2 className="mb-[15px] mt-10 text-lg font-medium md:mb-5 md:text-xl">
            {t('separation.title')}
          </h2>
          <p className="mb-2 text-[15px] font-light leading-[22px] md:text-base">
            {t('separation.content')}
          </p>
        </div>
        <div className="list">
          <h2 className="mb-[15px] mt-10 text-lg font-medium md:mb-5 md:text-xl">
            {t('measurementProcedures.title')}
          </h2>
          <p className="mb-2 text-[15px] font-light leading-[22px] md:text-base">
            {t('measurementProcedures.content')}
          </p>
        </div>
        <div className="list">
          <h2 className="mb-[15px] mt-10 text-lg font-medium md:mb-5 md:text-xl">
            {t('memberPointsAndLoyalty.title')}
          </h2>
          <p className="mb-2 text-[15px] font-light leading-[22px] md:text-base">
            {t('memberPointsAndLoyalty.content')}
          </p>
        </div>
        <div className="list">
          <h2 className="mb-[15px] mt-10 text-lg font-medium md:mb-5 md:text-xl">
            {t('exchangeWarranty.title')}
          </h2>
          <ul className="list-disc space-y-2 pl-6">
            {Array.from({ length: 3 }).map((_, index) => (
              <li key={index}>{t(`exchangeWarranty.items.${index + 1}`)}</li>
            ))}
          </ul>
        </div>
        <div className="list">
          <h2 className="mb-[15px] mt-10 text-lg font-medium md:mb-5 md:text-xl">
            {t('buybackTerms.title')}
          </h2>
          <p className="mb-2 text-[15px] font-light leading-[22px] md:text-base">
            {t('buybackTerms.content')}
          </p>
        </div>
        <div className="list">
          <h2 className="mb-[15px] mt-10 text-lg font-medium md:mb-5 md:text-xl">
            {t('productDelivery.title')}
          </h2>
          <ul className="list-disc space-y-2 pl-6">
            {Array.from({ length: 3 }).map((_, index) => (
              <li key={index}>{t(`productDelivery.items.${index + 1}`)}</li>
            ))}
          </ul>
        </div>
        <div className="list">
          <h2 className="mb-[15px] mt-10 text-lg font-medium md:mb-5 md:text-xl">
            {t('responsibility.title')}
          </h2>
          <ul className="list-disc space-y-2 pl-6">
            {Array.from({ length: 9 }).map((_, index) => (
              <li key={index}>{t(`responsibility.items.${index + 1}`)}</li>
            ))}
          </ul>
        </div>
        <div className="list">
          <h2 className="mb-[15px] mt-10 text-lg font-medium md:mb-5 md:text-xl">
            {t('privacyPolicy.title')}
          </h2>
          <p className="mb-2 text-[15px] font-light leading-[22px] md:text-base">
            {t('privacyPolicy.content')}
          </p>
        </div>
        <div className="list">
          <h2 className="mb-[15px] mt-10 text-lg font-medium md:mb-5 md:text-xl">
            {t('forceWajeup.title')}
          </h2>
          <ul className="list-disc space-y-2 pl-6">
            {Array.from({ length: 4 }).map((_, index) => (
              <li key={index}>{t(`forceWajeup.items.${index + 1}`)}</li>
            ))}
          </ul>
        </div>
        <div className="list">
          <h2 className="mb-[15px] mt-10 text-lg font-medium md:mb-5 md:text-xl">
            {t('notifications.title')}
          </h2>
          <ul className="list-disc space-y-2 pl-6">
            {Array.from({ length: 6 }).map((_, index) => (
              <li key={index}>{t(`notifications.items.${index + 1}`)}</li>
            ))}
            <div className="list-wrapper">
              <span>{t('notifications.address.company')}</span>
              <span>{t('notifications.address.building')}</span>
              <span>{t('notifications.address.city')}</span>
              <span>{t('notifications.address.email')}</span>
            </div>
          </ul>
        </div>
        <div className="list">
          <h2 className="mb-[15px] mt-10 text-lg font-medium md:mb-5 md:text-xl">
            {t('intellectualProperty.title')}
          </h2>
          <ul className="list-disc space-y-2 pl-6">
            {Array.from({ length: 2 }).map((_, index) => (
              <li key={index}>
                {t(`intellectualProperty.items.${index + 1}`)}
              </li>
            ))}
          </ul>
        </div>
        <div className="list">
          <h2 className="mb-[15px] mt-10 text-lg font-medium md:mb-5 md:text-xl">
            {t('informationCenter.title')}
          </h2>
          <ul className="list-disc space-y-2 pl-6">
            {Array.from({ length: 3 }).map((_, index) => (
              <li key={index}>{t(`informationCenter.items.${index + 1}`)}</li>
            ))}
          </ul>
        </div>
        <div className="list">
          <h2 className="mb-[15px] mt-10 text-lg font-medium md:mb-5 md:text-xl">
            {t('thirdParty.title')}
          </h2>
          <p className="mb-2 text-[15px] font-light leading-[22px] md:text-base">
            {t('thirdParty.content')}
          </p>
        </div>
        <div className="list">
          <h2 className="mb-[15px] mt-10 text-lg font-medium md:mb-5 md:text-xl">
            {t('choiceOfLaw.title')}
          </h2>
          <p className="mb-2 text-[15px] font-light leading-[22px] md:text-base">
            {t('choiceOfLaw.content')}
          </p>
        </div>
        <div className="list">
          <h2 className="mb-[15px] mt-10 text-lg font-medium md:mb-5 md:text-xl">
            {t('miscellaneous.title')}
          </h2>
          <ul className="list-disc space-y-2 pl-6">
            {Array.from({ length: 4 }).map((_, index) => (
              <li key={index}>{t(`miscellaneous.items.${index + 1}`)}</li>
            ))}
          </ul>
        </div>
        <div className="list">
          <h2 className="mb-[15px] mt-10 text-lg font-medium md:mb-5 md:text-xl">
            {t('privacyPolicySection.title')}
          </h2>
          <h3 className="mb-4 mt-[30px] text-[15px] font-medium md:mt-[45px] md:text-base">
            {t('privacyPolicySection.introduction.title')}
          </h3>
          <p className="mb-2 text-[15px] font-light leading-[22px] md:text-base">
            {t('privacyPolicySection.introduction.content1')}
          </p>
          <p className="mb-2 text-[15px] font-light leading-[22px] md:text-base">
            {t('privacyPolicySection.introduction.content2')}
          </p>
        </div>
        <div className="list">
          <h3 className="mb-4 mt-[30px] text-[15px] font-medium md:mt-[45px] md:text-base">
            {t('privacyPolicySection.dataCollection.title')}
          </h3>
          <p className="mb-2 text-[15px] font-light leading-[22px] md:text-base">
            {t('privacyPolicySection.dataCollection.intro')}
          </p>
          <ul className="list-disc space-y-2 pl-6">
            {Array.from({ length: 8 }).map((_, index) => (
              <li key={index}>
                {t(`privacyPolicySection.dataCollection.items.${index + 1}`)}
              </li>
            ))}
          </ul>
        </div>
        <div className="list">
          <h3 className="mb-4 mt-[30px] text-[15px] font-medium md:mt-[45px] md:text-base">
            {t('privacyPolicySection.dataUsage.title')}
          </h3>
          <p className="mb-2 text-[15px] font-light leading-[22px] md:text-base">
            {t('privacyPolicySection.dataUsage.intro')}
          </p>
          <ul className="list-disc space-y-2 pl-6">
            {Array.from({ length: 4 }).map((_, index) => (
              <li key={index}>
                {t(`privacyPolicySection.dataUsage.items.${index + 1}`)}
              </li>
            ))}
          </ul>
        </div>
        <div className="list">
          <h3 className="mb-4 mt-[30px] text-[15px] font-medium md:mt-[45px] md:text-base">
            {t('privacyPolicySection.dataManagement.title')}
          </h3>
          <p className="mb-2 text-[15px] font-light leading-[22px] md:text-base">
            {t('privacyPolicySection.dataManagement.intro')}
          </p>
          <ul className="list-disc space-y-2 pl-6">
            {Array.from({ length: 4 }).map((_, index) => (
              <li key={index}>
                {t(`privacyPolicySection.dataManagement.items.${index + 1}`)}
              </li>
            ))}
          </ul>
        </div>
        <div className="list">
          <h3 className="mb-4 mt-[30px] text-[15px] font-medium md:mt-[45px] md:text-base">
            {t('privacyPolicySection.hotline.title')}
          </h3>
          <p className="mb-2 text-[15px] font-light leading-[22px] md:text-base">
            {t('privacyPolicySection.hotline.content')}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Terms;
