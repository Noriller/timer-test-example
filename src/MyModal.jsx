import { Alert, Button, Modal, Popover, Switch } from 'antd';
import { useState } from 'react';

export function MyModal({ inputs, final }) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [show, setShow] = useState(false);
  const [checked, setChecked] = useState(true);

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleOk = () => {
    final(true);
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <Button type='primary' onClick={showModal}>
        Open Modal
      </Button>
      <Modal
        title='Basic Modal'
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
        okButtonProps={{ disabled: checked }}
        cancelButtonProps={{ disabled: checked }}>
        <p>name1: {inputs.name1}</p>
        <p>name2: {inputs.name2}</p>
        <p>name3: {inputs.name3}</p>

        <Alert message='Success Text' type='success' />
        <Button onClick={() => setShow(!show)}>Something here</Button>

        {show && <Switch defaultChecked onChange={setChecked} />}
      </Modal>
    </>
  );
}
