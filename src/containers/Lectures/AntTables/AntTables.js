import React from 'react';
import LayoutContentWrapper from '@iso/components/utility/layoutWrapper';
import { useDispatch, useSelector } from 'react-redux';
import Modal from '@iso/components/Feedback/Modal';
import Input from '@iso/components/uielements/input';
import { Row, Col } from 'antd';
import TableDemoStyle from './Demo.styles';
import fakeData from '../data';
import { tableInfo } from './configs';
import * as TableViews from './TableViews/TableViews';
import { Button } from 'antd';
import IntlMessages from '@iso/components/utility/intlMessages';
import { direction } from '@iso/lib/helpers/rtl';
import qrModalActions from '@iso/redux/qrModal/actions';
import lectureModalActions from '@iso/redux/lectureModal/actions';
import lectureActions from '@iso/redux/lecture/actions';
import { Alert } from 'antd';

import {
  Fieldset,
  Form,
  Label,
} from './Lectures.styles';

const margin = {
  margin: direction === 'rtl' ? '0 0 8px 8px' : '0 8px 8px 0',
};

const dataList = new fakeData(10);

export default function AntTable() {
  function renderTable(tableInfo) {
    const Component = TableViews.SortView;
    return <Component tableInfo={tableInfo} dataList={dataList} />;
  }

  const onRecordChange = (e, key) => {
    dispatch(lectureActions.update(key, e.target.value));
  }

  const closeLectureModal = () => {
    dispatch(lectureModalActions.closeModal());
    dispatch(lectureActions.clear());
  }

  const openLectureModal = () => dispatch(lectureModalActions.openModal());

  const submitNewLecture = () => dispatch(lectureActions.insertLecture());
  
  const dispatch = useDispatch();

  const { qrModal, lectureModal, lecture } = useSelector(state => {
    return {
      qrModal: state.qrModal,
      lectureModal: state.lectureModal,
      lecture: state.lecture
    }
  });

  const qrImageStyle = {
    width: "100%",
  }

  return (
    <LayoutContentWrapper>
      <Modal
            visible={qrModal.qrModalVisibility}
            onClose={() => dispatch(qrModalActions.closeModal())}
            title="QR CODE"
            onCancel={() => dispatch(qrModalActions.closeModal())}
            width={780}
            footer={null}
      >
        <Row>
          <Col span={24}>
            <img src={qrModal.qrImage} alt="Qr Code" style={qrImageStyle}/>
          </Col>
        </Row>
      </Modal>
      <Modal
            visible={lectureModal.lectureModalVisibility}
            onClose={closeLectureModal}
            title="Add new Lecture"
            onCancel={closeLectureModal}
            width={780}
            okText={'Add New Lecture'}
            onOk={submitNewLecture}
      >
        <Form>
              { lecture?.errors?.context?.key === "doctor_id" ? <Alert message="Something Went Wrong Please Logout and Login again" type="error" style={{marginBottom: 10}}/> : "" }
              <Fieldset>
                <Label>Lecture Name</Label>
                <Input
                  label="Lecture Name"
                  placeholder="Enter name"
                  value={lecture.name}
                  onChange={e => onRecordChange(e, 'name')}
                />
                { lecture?.errors?.context?.key === "name" ? <Alert message="Please Enter Lecture Name" type="error" style={{marginTop: 10}}/> : "" }
              </Fieldset>

              <Fieldset>
                <Label>Class Name</Label>
                <Input
                  label="Class Name"
                  placeholder="Enter Class Name"
                  value={lecture.class_name}
                  onChange={e => onRecordChange(e, 'class_name')}
                />
                { lecture?.errors?.context?.key === "class" ? <Alert message="Please Enter Class Name" type="error" style={{marginTop: 10}}/> : "" }
              </Fieldset>
            </Form>

      </Modal>
      <Button type="primary" style={margin} onClick={openLectureModal}>
          {<IntlMessages id="add_new_lecture" />}
      </Button>
      <TableDemoStyle className="isoLayoutContent">
        {renderTable(tableInfo)}
      </TableDemoStyle>
    </LayoutContentWrapper>
  );
}

export { TableViews, tableInfo, dataList };
