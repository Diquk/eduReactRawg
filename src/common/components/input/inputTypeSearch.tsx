import React from 'react';

import 'common/components/input/input.scss';

interface InputTypeSearchProps {
  value: string;
  onChange: (e: React.ChangeEvent) => void;
}

export const InputTypeSearch = ({
  value,
  onChange,
}: InputTypeSearchProps) => {
  return (
    <input
      type="text"
      placeholder="Search 500 000+ games"
      name="search"
      className="input input_type_search"
      value={value}
      onChange={onChange}
    />
  );
};
