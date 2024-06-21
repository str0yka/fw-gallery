import { Controller, useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import clsx from 'clsx';

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
  Button,
  Input,
  Select,
} from '~/components/ui';
import { CloseIcon, MinusIcon } from '~/components/ui/icons';
import { useGetAuthorsQuery, useGetLocationsQuery } from '~/utils/api';
import { useOnClickOutside } from '~/utils/hooks';

import type { FilterFormScheme } from './constants';
import { filterFormScheme } from './constants';

import s from './Filter.module.scss';

interface FilterProps {
  open: boolean;
  onClose: () => void;
  onSubmit: (values: FilterFormScheme) => void;
}

const FILTER_FORM_DEFAULT_VALUES: FilterFormScheme = {
  authorId: undefined,
  locationId: undefined,
  yearsFrom: undefined,
  yearsTo: undefined,
};

export const Filter: React.FC<FilterProps> = ({ open, onClose, onSubmit }) => {
  const getAuthorsQuery = useGetAuthorsQuery();
  const getLocationsQuery = useGetLocationsQuery();

  const filterForm = useForm<FilterFormScheme>({
    resolver: zodResolver(filterFormScheme),
    defaultValues: FILTER_FORM_DEFAULT_VALUES,
  });

  const containerRef = useOnClickOutside<HTMLElement>(onClose);

  return (
    <aside
      ref={containerRef}
      className={clsx(s.container, {
        [s.open]: open,
      })}
    >
      <button
        type="button"
        aria-label="Close filter menu"
        className={s['close-button']}
        onClick={onClose}
      >
        <CloseIcon className={s['close-icon']} />
      </button>
      <form
        className={s['form-container']}
        onSubmit={filterForm.handleSubmit(onSubmit)}
      >
        <Accordion className={s['accordion-container']}>
          <AccordionItem
            value="artist"
            className={s['accordion-item-container']}
          >
            <AccordionTrigger>Artist</AccordionTrigger>
            <AccordionContent>
              <Controller
                control={filterForm.control}
                name="authorId"
                render={({ field: { value, onChange, ...fieldProps } }) => (
                  <Select
                    placeholder="Select the artist"
                    options={getAuthorsQuery.data?.data.map((author) => ({
                      label: author.name,
                      value: author.id,
                    }))}
                    value={value}
                    onSelect={onChange}
                    {...fieldProps}
                  />
                )}
              />
            </AccordionContent>
          </AccordionItem>
          <AccordionItem
            value="location"
            className={s['accordion-item-container']}
          >
            <AccordionTrigger>Location</AccordionTrigger>
            <AccordionContent>
              <Controller
                control={filterForm.control}
                name="locationId"
                render={({ field: { value, onChange, ...fieldProps } }) => (
                  <Select
                    placeholder="Select the location"
                    options={getLocationsQuery.data?.data.map((location) => ({
                      label: location.location,
                      value: location.id,
                    }))}
                    value={value}
                    onSelect={onChange}
                    {...fieldProps}
                  />
                )}
              />
            </AccordionContent>
          </AccordionItem>
          <AccordionItem
            value="years"
            className={s['accordion-item-container']}
          >
            <AccordionTrigger>Years</AccordionTrigger>
            <AccordionContent className={s['years-content-container']}>
              <div className={s['years-content-input-container']}>
                <Controller
                  control={filterForm.control}
                  name="yearsFrom"
                  render={({ field: { value, onChange, ...field } }) => (
                    <Input
                      placeholder="To"
                      value={value ?? ''}
                      onChange={(event) => onChange(Number(event.target.value) || undefined)}
                      {...field}
                    />
                  )}
                />
              </div>
              <MinusIcon className={s['years-content-minus-icon']} />
              <div className={s['years-content-input-container']}>
                <Controller
                  control={filterForm.control}
                  name="yearsTo"
                  render={({ field: { value, onChange, ...field } }) => (
                    <Input
                      placeholder="To"
                      value={value ?? ''}
                      onChange={(event) => onChange(Number(event.target.value) || undefined)}
                      {...field}
                    />
                  )}
                />
              </div>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
        <div className={s['buttons-container']}>
          <Button type="submit">Show the results</Button>
          <Button
            disabled={!filterForm.formState.isDirty}
            onClick={() => filterForm.reset(FILTER_FORM_DEFAULT_VALUES)}
          >
            Clear
          </Button>
        </div>
      </form>
    </aside>
  );
};
