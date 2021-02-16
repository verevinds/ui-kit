import { Story } from '@storybook/react/types-6-0';
import type { InputProps } from './Input';
import Input from './Input';
import React, { useEffect, useMemo, useRef } from 'react';
import { useForm } from 'react-hook-form';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default {
  title: 'Input',
  component: Input,
};

const Template: Story<InputProps> = args => {
  const { register, handleSubmit, errors, setError, setValue } = useForm<{
    test: string;
  }>();

  useEffect(() => {
    register({ name: 'test' }, { required: 'Обязательно к заполнению' });
  }, []);

  const onSubmit = async brand => {
    console.log(brand);

  };
  console.log(errors)

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Input
        {...args}
        name='test'
        type='text'
        error={errors.test?.message}
        onChange={(e: React.SyntheticEvent)=>{
          const {value} = e.target as HTMLInputElement
          if(value)
          setError('test', {
            type: 'required',
            message: '',
          });
          setValue('test', value)
        }}

      />
      <button type='submit'>Ok
      </button>
    </form>
  );
};
export const Default = Template.bind({});

Default.args = {
  disabled: false,
  className: 'addClass',
  variant: 'primary',
  icon: <FontAwesomeIcon icon={faSearch} />,
  placeholder: 'Тестовый текст',
  text: 'Поиск',
};

export const Empty = Template.bind({});

Empty.args = {
  disabled: false,
};