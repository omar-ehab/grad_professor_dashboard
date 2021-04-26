import React from 'react';
import { Button } from 'antd';
import IntlMessages from '@iso/components/utility/intlMessages';
import { direction } from '@iso/lib/helpers/rtl';

const margin = {
  margin: direction === 'rtl' ? '0 0 8px 8px' : '0 8px 8px 0',
};

export default function({ lecture_id }) {
  return (
    <Button type="primary" style={margin}>
        {<IntlMessages id="attendance_sheet" />}
    </Button>
  );
}
