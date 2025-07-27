import React from 'react';

import Modal from '@/components/modal';
import { useModal } from '@/hooks/useModal';

const ModalExample: React.FC = () => {
  const termsModal = useModal();
  const confirmModal = useModal();

  const handleAcceptTerms = () => {
    console.log('Terms accepted');
    termsModal.close();
  };

  const handleDeclineTerms = () => {
    console.log('Terms declined');
    termsModal.close();
  };

  const handleConfirmAction = () => {
    console.log('Action confirmed');
    confirmModal.close();
  };

  return (
    <div className="space-y-4 p-8">
      <h1 className="text-2xl font-bold">Modal Component Examples</h1>

      <div className="space-x-4">
        <button
          onClick={termsModal.open}
          className="rounded-lg bg-blue-600 px-4 py-2 text-white hover:bg-blue-700"
        >
          Open Terms Modal
        </button>

        <button
          onClick={confirmModal.open}
          className="rounded-lg bg-green-600 px-4 py-2 text-white hover:bg-green-700"
        >
          Open Confirmation Modal
        </button>
      </div>

      {/* Terms of Service Modal */}
      <Modal
        isOpen={termsModal.isOpen}
        onClose={termsModal.close}
        title="Terms of Service"
        size="md"
        footer={
          <div className="flex space-x-3">
            <button
              onClick={handleAcceptTerms}
              className="rounded-lg bg-blue-700 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              I accept
            </button>
            <button
              onClick={handleDeclineTerms}
              className="rounded-lg border border-gray-200 bg-white px-5 py-2.5 text-sm font-medium text-gray-900 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:outline-none focus:ring-4 focus:ring-gray-100 dark:border-gray-600 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white dark:focus:ring-gray-700"
            >
              Decline
            </button>
          </div>
        }
      >
        <div className="space-y-4">
          <p className="text-base leading-relaxed text-gray-500 dark:text-gray-400">
            With less than a month to go before the European Union enacts new
            consumer privacy laws for its citizens, companies around the world
            are updating their terms of service agreements to comply.
          </p>
          <p className="text-base leading-relaxed text-gray-500 dark:text-gray-400">
            The European Union&apos;s General Data Protection Regulation
            (G.D.P.R.) goes into effect on May 25 and is meant to ensure a
            common set of data rights in the European Union. It requires
            organizations to notify users as soon as possible of high-risk data
            breaches that could personally affect them.
          </p>
        </div>
      </Modal>

      {/* Confirmation Modal */}
      <Modal
        isOpen={confirmModal.isOpen}
        onClose={confirmModal.close}
        title="Confirm Action"
        size="sm"
        footer={
          <div className="flex space-x-3">
            <button
              onClick={handleConfirmAction}
              className="rounded-lg bg-red-700 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-red-800 focus:outline-none focus:ring-4 focus:ring-red-300"
            >
              Confirm
            </button>
            <button
              onClick={confirmModal.close}
              className="rounded-lg border border-gray-200 bg-white px-5 py-2.5 text-sm font-medium text-gray-900 hover:bg-gray-100 focus:z-10 focus:outline-none focus:ring-4 focus:ring-gray-100"
            >
              Cancel
            </button>
          </div>
        }
      >
        <p className="text-base leading-relaxed text-gray-500 dark:text-gray-400">
          Are you sure you want to perform this action? This cannot be undone.
        </p>
      </Modal>
    </div>
  );
};

export default ModalExample;
