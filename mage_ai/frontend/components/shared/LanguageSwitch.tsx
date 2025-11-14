import React from 'react';
import { useTranslation } from 'react-i18next';
import { useLanguage } from '@context/Language';
import Select from '@oracle/elements/Inputs/Select';
import Spacing from '@oracle/elements/Spacing';
import Text from '@oracle/elements/Text';
import { PADDING_UNITS } from '@oracle/styles/units/spacing';

type LanguageSwitchProps = {
  compact?: boolean;
};

const LanguageSwitch: React.FC<LanguageSwitchProps> = ({ compact = false }) => {
  const { i18n } = useTranslation();
  const { currentLanguage, setLanguage } = useLanguage();

  const handleLanguageChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const newLang = e.target.value;
    setLanguage(newLang);
  };

  return (
    <div>
      {!compact && (
        <Spacing mb={1}>
          <Text bold>
            {i18n.t('settings.language.title', 'Language')}
          </Text>
        </Spacing>
      )}
      <Select
        monospace
        onChange={handleLanguageChange}
        value={currentLanguage}
      >
        <option value="en">
          {i18n.t('common.english', 'English') as string}
        </option>
        <option value="zh">
          {i18n.t('common.chinese', '中文') as string}
        </option>
      </Select>
      {!compact && (
        <Spacing mt={1}>
          <Text muted small>
            {i18n.t('settings.language.description', 'Select your preferred language for the interface.')}
          </Text>
        </Spacing>
      )}
    </div>
  );
};

export default LanguageSwitch;
