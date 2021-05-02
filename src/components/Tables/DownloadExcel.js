import React from 'react';
import { Button } from 'antd';
import IntlMessages from '@iso/components/utility/intlMessages';
import { direction } from '@iso/lib/helpers/rtl';
import axios from 'axios';

const margin = {
  margin: direction === 'rtl' ? '0 0 8px 8px' : '0 8px 8px 0',
};




export default function({ lecture_id }) {
  
  const handleDownload = () => {
    const url = `http://127.0.0.1:8000/lectures/${lecture_id.id}/download`;
    axios({
      url,
      method: 'GET',
      responseType: 'blob',
    }).then((response) => {
      const url = window.URL.createObjectURL(new Blob([response.data]));
      const link = document.createElement('a');
      link.href = url;
      link.setAttribute('download', `${lecture_id.lecture_name}.xlsx`);
      document.body.appendChild(link);
      link.click();
    });
  }
  return (
    <Button type="primary" style={margin} onClick={handleDownload}>
        {<IntlMessages id="attendance_sheet" />}
    </Button>
  );
}
