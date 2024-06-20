import { useEffect, useLayoutEffect, useMemo, useRef, useState } from 'react';

import { useOnClickOutside } from '~/utils/hooks';

interface UseSelectParams {
  options: Option[];
  value?: Option['value'] | null;
  onSelect?: (value: Option['value']) => void;
  filter?: (option: Option, value: string) => boolean;
}

const DEFAULT_FILTER_FUNCTION = (option: Option, value: string) =>
  option.label.toLowerCase().includes(value.toLowerCase());

export const useSelect = ({
  options,
  filter = DEFAULT_FILTER_FUNCTION,
  value,
  onSelect,
}: UseSelectParams) => {
  const selectedOption = useMemo(
    () => options.find((option) => option.value === value),
    [value, options],
  );

  const [open, setOpen] = useState(false);
  const [inputValue, setInputValue] = useState(selectedOption?.label ?? '');
  const [activeOption, setActiveOption] = useState(() => {
    const selectedOptionIndex = options.findIndex((option) => option.value === value);
    if (selectedOptionIndex === -1) return { ...options[0], index: 0 };
    return { ...options[selectedOptionIndex], index: selectedOptionIndex };
  });

  const filteredOptions = useMemo(
    () => options.filter((option) => filter(option, inputValue)),
    [options, inputValue],
  );

  const onOpen = () => {
    setInputValue('');
    setOpen(true);
  };

  const onClose = () => {
    setOpen(false);
  };

  const onSelectOption = (option: Option) => {
    onClose();
    onSelect?.(option.value);
  };

  const onInputChange = (event: React.ChangeEvent<HTMLInputElement>) =>
    setInputValue(event.target.value);

  const onInputFocus = onOpen;

  const onInputKeyDown = (event: React.KeyboardEvent) => {
    const firstOptionIndex = 0;
    const lastOptionIndex = filteredOptions.length - 1;

    if (!open && event.code !== 'Enter') return;

    if (event.code === 'Enter') {
      event.preventDefault();

      if (!open) return onOpen();

      const newSelectedOption = filteredOptions.find(
        (option) => option.value === activeOption.value,
      );

      if (newSelectedOption) onSelectOption(newSelectedOption);
    }

    if (event.code === 'ArrowUp') {
      event.preventDefault();
      if (activeOption.index <= firstOptionIndex) {
        const lastOption = filteredOptions[lastOptionIndex];
        return setActiveOption({ ...lastOption, index: lastOptionIndex });
      }

      const upperIndex = activeOption.index - 1;
      const upperOption = filteredOptions[upperIndex];

      return setActiveOption({
        ...upperOption,
        index: upperIndex,
      });
    }

    if (event.code === 'ArrowDown') {
      event.preventDefault();
      if (activeOption.index >= lastOptionIndex) {
        const firstOption = filteredOptions[firstOptionIndex];
        return setActiveOption({ ...firstOption, index: firstOptionIndex });
      }

      const lowerIndex = activeOption.index + 1;
      const lowerOption = filteredOptions[lowerIndex];

      return setActiveOption({
        ...lowerOption,
        index: lowerIndex,
      });
    }
  };

  const onOptionClick = (option: Option) => () => onSelectOption(option);

  const isOptionSelected = (option: Option) => option.value === value;

  const isOptionActive = (option: Option) => option.value === activeOption.value;

  const listRef = useRef<HTMLUListElement>(null);
  const wrapperRef = useOnClickOutside<HTMLDivElement>(() => onClose());

  useEffect(() => {
    const newActiveOption = selectedOption ?? options[0];
    setActiveOption({
      ...newActiveOption,
      index: options.findIndex((option) => option.value === newActiveOption.value),
    });
  }, [selectedOption, open]);

  useEffect(() => {
    if (!filteredOptions.length) return;

    const newActiveOption =
      filteredOptions.find((option) => option.value === activeOption.value) ?? options[0];

    setActiveOption({
      ...newActiveOption,
      index: filteredOptions.findIndex((option) => option.value === newActiveOption.value),
    });
  }, [filteredOptions]);

  useLayoutEffect(() => {
    if (!listRef.current) return;

    const optionHeight = listRef.current.scrollHeight / filteredOptions.length;
    const optionOffsetTop = optionHeight * activeOption.index;

    if (optionOffsetTop < listRef.current.scrollTop) {
      listRef.current.scrollTop = optionOffsetTop;
      return;
    }

    if (optionOffsetTop > listRef.current.scrollTop + listRef.current.offsetHeight - optionHeight) {
      listRef.current.scrollTop = optionOffsetTop - listRef.current.offsetHeight + optionHeight;
    }
  }, [listRef, filteredOptions.length, activeOption.index, open]);

  return {
    refs: { listRef, wrapperRef },
    state: { selectedOption, inputValue, open, filteredOptions },
    functions: {
      onInputFocus,
      onInputChange,
      onInputKeyDown,
      onOptionClick,
      isOptionSelected,
      isOptionActive,
    },
  };
};
