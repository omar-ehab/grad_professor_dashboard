import React from 'react';
import clone from 'clone';
import IntlMessages from '@iso/components/utility/intlMessages';
import { TextCell } from '@iso/components/Tables/HelperCells';

const renderCell = (object, key) => {
  const value = object[key];
  return TextCell(value);
};

const columns = [
  {
    title: <IntlMessages id="lecture_name" />,
    key: 'lecture_name',
    width: 200,
    className: 'isoImageCell',
    render: object => renderCell(object, 'lecture_name'),
  },
  {
    title: <IntlMessages id="lecture_class" />,
    key: 'lecture_class',
    width: 200,
    render: object => renderCell(object, 'lecture_class'),
  },
  {
    title: <IntlMessages id="created_at" />,
    key: 'created_at',
    width: 200,
    render: object => renderCell(object, 'created_at'),
  }
];
const sortColumns = [
  { ...columns[0], sorter: true },
  { ...columns[1], sorter: true },
  { ...columns[2], sorter: true },
  { ...columns[3], sorter: false },
];
const tableInfo = {
    title: 'Lectures',
    value: 'sort',
    columns: clone(sortColumns),
  };
export { columns, tableInfo };
