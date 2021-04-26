import React from 'react';
import { Button } from 'antd';
import { useDispatch } from 'react-redux';
import IntlMessages from '@iso/components/utility/intlMessages';
import { direction } from '@iso/lib/helpers/rtl';
import qrModalActions from '@iso/redux/qrModal/actions';

const margin = {
  margin: direction === 'rtl' ? '0 0 8px 8px' : '0 8px 8px 0',
};


export default function({ image }) {
  const dispatch = useDispatch();
  const handleQrModal = img => dispatch(qrModalActions.openModal({img}));
  return (
    <Button type="primary" style={margin} onClick={(e) => handleQrModal(image)}>
        {<IntlMessages id="show_qr" />}
    </Button>
  );
}
