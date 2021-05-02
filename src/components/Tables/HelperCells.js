import React from 'react';
import ShowQrModal from './ShowQrModal';
import DownloadExcel from './DownloadExcel';

const DateCell = data => <p>{data.toLocaleString()}</p>;
const LinkCell = (link, href) => <a href={href ? href : '#'}>{link}</a>;
const TextCell = text => <p>{text}</p>;

export {
  DateCell,
  LinkCell,
  TextCell,
  ShowQrModal,
  DownloadExcel
};
