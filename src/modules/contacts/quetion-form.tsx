import { useTranslations } from 'next-intl';
import React from 'react';
import { IoDiamondOutline } from 'react-icons/io5';

import Input from '@/components/field/input';
import InputRadio from '@/components/field/input-radio';
import TextArea from '@/components/field/text-area';

const QuestionForm = () => {
  const t = useTranslations('contacts.questionForm');
  const tFields = useTranslations('contacts.questionForm.fields');

  return (
    <div className="mx-auto mt-5 flex max-w-[770px] flex-col items-center justify-center md:mt-[70px]">
      <IoDiamondOutline
        color="var(--color-primary)"
        size={44}
        className="mb-[18px]"
      />
      <h2 className="mb-2 text-center font-trajan-bold text-lg font-light uppercase">
        {t('title')}
      </h2>
      <p className="pb-5 font-red-hat text-tertiary md:text-sm">
        {t('subtitle')}
      </p>
      <form action="" className="flex flex-col gap-x-8 md:flex-row">
        <div className="flex-1">
          <Input
            label={tFields('name')}
            placeholder={tFields('namePlaceholder')}
            type="text"
            className="mb-6"
            name="name"
            required
          />
          <Input
            label={tFields('email')}
            placeholder={tFields('emailPlaceholder')}
            type="email"
            className="mb-6"
            name="email"
            required
          />
          <Input
            label={tFields('telephone')}
            placeholder={tFields('telephonePlaceholder')}
            type="tel"
            className="mb-6"
            name="telephone"
            required
          />
        </div>
        <div className="flex-1">
          <Input
            label={tFields('subject')}
            placeholder={tFields('subjectPlaceholder')}
            type="text"
            className="mb-6"
            name="subject"
            required
          />
          <TextArea
            label={tFields('message')}
            placeholder={tFields('messagePlaceholder')}
            className="mb-6"
            name="message"
            required
          />
          <InputRadio
            name="authorization"
            options={[
              {
                label: t('authorization'),
                value: 'authorize',
              },
            ]}
          />
          <button
            type="submit"
            className="mt-6 w-full rounded-3xl bg-[#3D3E40] p-4 font-red-hat font-light text-white md:mt-8 md:w-fit md:px-8 md:py-3"
          >
            {t('sendMessage')}
          </button>
        </div>
      </form>
    </div>
  );
};

export default QuestionForm;
