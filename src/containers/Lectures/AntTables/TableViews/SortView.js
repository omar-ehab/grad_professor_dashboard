import React from 'react';
import clone from 'clone';
import TableWrapper from '../AntTables.styles';
import IntlMessages from '@iso/components/utility/intlMessages';
import { ShowQrModal, DownloadExcel } from '@iso/components/Tables/HelperCells';

export default function(props) {

  const [state, setState] = React.useState({
    columns: createcolumns(clone(props.tableInfo.columns)),
    dataList: props.dataList.getAll(),
  });

  const { columns, dataList } = state;  

  function onChange(pagination, filters, sorter) {
    if (sorter && sorter.columnKey && sorter.order) {
      if (sorter.order === 'ascend') {
        dataList.getSortAsc(sorter.columnKey);
      } else {
        dataList.getSortDesc(sorter.columnKey);
      }
      setState(dataList.getAll());
    }
  }

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
      onChange={onChange}
      dataSource={dataList}
      pagination={{ pageSize: 5 }}
      className="isoSortingTable"
    />
  );
}
