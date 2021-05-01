import React from 'react';
import clone from 'clone';
import TableWrapper from '../AntTables.styles';
import IntlMessages from '@iso/components/utility/intlMessages';
import { ShowQrModal, DownloadExcel } from '@iso/components/Tables/HelperCells';

export default function(props) {

  const columns = createcolumns(clone(props.tableInfo.columns));
  const dataList = props.dataList;

  function createcolumns(columns) {

    const showQrColumn = {
      title: <IntlMessages id="show_qr" />,
      dataIndex: 'show_qr',
      render: (text, record, index) => (
        <ShowQrModal image={record.qr} />
      ),
    };

    const downloadExcelColumn = {
      title: <IntlMessages id="attendance_sheet" />,
      dataIndex: 'download_excel',
      render: (text, record, index) => (
        <DownloadExcel lecture_id={record} />
      ),
    };
    columns.push(showQrColumn);
    columns.push(downloadExcelColumn);

    return columns;
  }
  
  return (
    <TableWrapper
      columns={columns}
      dataSource={dataList}
      pagination={{ pageSize: 10 }}
      className="isoSimpleTable"
    />
  );
}
