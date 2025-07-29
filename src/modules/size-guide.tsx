import Image from 'next/image';
import { useTranslations } from 'next-intl';
import React from 'react';

const SIZE_DATA = [
  { size: '5.5', circumference: '44.0', diameter: '14.1' },
  { size: '6.5', circumference: '45.2', diameter: '14.5' },
  { size: '8', circumference: '46.5', diameter: '14.9' },
  { size: '10', circumference: '49.0', diameter: '15.7' },
  { size: '11', circumference: '50.3', diameter: '16.0' },
  { size: '12.5', circumference: '51.7', diameter: '16.5' },
  { size: '13.5', circumference: '53.1', diameter: '17.0' },
  { size: '14.5', circumference: '54.3', diameter: '17.3' },
  { size: '15.5', circumference: '55.6', diameter: '17.5' },
  { size: '17', circumference: '57.2', diameter: '18.1' },
  { size: '18', circumference: '58.4', diameter: '18.5' },
  { size: '19.5', circumference: '59.7', diameter: '18.9' },
  { size: '20.5', circumference: '60.9', diameter: '19.5' },
  { size: '22', circumference: '62.2', diameter: '19.8' },
  { size: '23', circumference: '63.5', diameter: '20.5' },
  { size: '24', circumference: '64.7', diameter: '20.6' },
  { size: '25.5', circumference: '66.0', diameter: '21.0' },
  { size: '27', circumference: '67.2', diameter: '21.4' },
  { size: '28', circumference: '68.5', diameter: '22.0' },
  { size: '29', circumference: '69.7', diameter: '22.2' },
];

const SizeGuide = () => {
  const t = useTranslations('sizeGuide');

  return (
    <div className="mx-auto mb-32 w-full max-w-[950px] px-5 pt-5 md:mt-16 md:px-0 md:pt-0">
      <div className="mb-6 w-full bg-primary px-3 py-6 text-center text-xl uppercase text-white md:mb-16 md:py-4 md:text-[30px]">
        {t('title')}
      </div>
      <p className="font-trajan-bold text-sm uppercase text-primary">
        {t('usingString')}
      </p>
      <p className="text-sm uppercase text-primary">{t('description')}</p>

      <div className="flex w-full flex-col justify-center pt-5 md:flex-row md:justify-around">
        <div className="flex w-full max-w-full flex-col items-center justify-center md:max-w-[31%]">
          <Image
            src="https://mondialjeweler.com/static/website/img/ring-size-guide-01.png"
            alt="Ring Size Guide 1"
            width={317}
            height={317}
          />
          <p className="text-center text-sm uppercase text-primary">
            {t('steps.step1')}
          </p>
        </div>
        <div className="flex w-full max-w-full flex-col items-center justify-center md:max-w-[31%]">
          <Image
            src="https://mondialjeweler.com/static/website/img/ring-size-guide-02.png"
            alt="Ring Size Guide 1"
            width={317}
            height={317}
          />
          <p className="text-center text-sm uppercase text-primary">
            {t('steps.step2')}
          </p>
        </div>
      </div>
      <p className="mt-10 text-sm uppercase text-primary">{t('steps.step3')}</p>
      <table className="w-full">
        <thead>
          <tr className="bg-primary">
            <th className="p-3 text-center text-sm uppercase text-white">
              {t('table.size')}
            </th>
            <th className="p-3 text-center text-sm uppercase text-white">
              {t('table.circumference')}
            </th>
            <th className="p-3 text-center text-sm uppercase text-white">
              {t('table.diameter')}
            </th>
          </tr>
        </thead>
        <tbody>
          {SIZE_DATA.map((item, index) => (
            <tr
              key={index}
              className={`${index % 2 === 0 ? 'bg-gray-50' : 'bg-white'} border-b-[1px] border-b-black`}
            >
              <td className="p-3 text-center text-sm text-[#333333]">
                {item.size}
              </td>
              <td className="p-3 text-center text-sm text-[#333333]">
                {item.circumference}
              </td>
              <td className="p-3 text-center text-sm text-[#333333]">
                {item.diameter}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <p className="mt-7 text-sm uppercase text-primary">{t('tips.tip1')}</p>
      <p className="mt-2 text-sm uppercase text-primary">{t('tips.tip2')}</p>
    </div>
  );
};

export default SizeGuide;
