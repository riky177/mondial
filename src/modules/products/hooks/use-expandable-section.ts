import { useCallback, useState } from 'react';

import { INITIAL_EXPANSION_STATE } from '../constants';
import type { ExpansionState } from '../types';

export const useExpandableSection = () => {
  const [expandedSections, setExpandedSections] = useState<ExpansionState>(
    INITIAL_EXPANSION_STATE,
  );

  const toggleSection = useCallback((section: keyof ExpansionState) => {
    setExpandedSections((prev) => ({
      ...prev,
      [section]: !prev[section],
    }));
  }, []);

  return {
    expandedSections,
    toggleSection,
  };
};
