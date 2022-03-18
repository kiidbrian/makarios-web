import React from 'react';
import Select from 'react-select';

const SingleSelect = ({
  isSearchable,
  isClearable,
  name,
  isDisabled,
  options,
}) => {
  //   const options = [
  //     { value: 'chocolate', label: 'Brian Paintsil' },
  //     { value: 'strawberry', label: 'Victoria Paintsil' },
  //     { value: 'vanilla', label: 'Jude Quao' },
  //   ];

  return (
    <>
      <Select
        className="basic-single"
        classNamePrefix="select"
        defaultValue={''}
        isDisabled={isDisabled}
        isLoading={false}
        isClearable={isClearable}
        isRtl={false}
        isSearchable={isSearchable}
        name={name}
        options={options}
      />
    </>
  );
};

export default SingleSelect;
