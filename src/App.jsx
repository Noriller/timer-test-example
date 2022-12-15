import { UserOutlined } from '@ant-design/icons';
import { Input } from 'antd';
import { useState } from 'react';
import { MyModal } from './MyModal';

function App() {
  const [final, setFinal] = useState(false);
  const [inputs, setInputs] = useState({});

  const handleInputChange = e => {
    const { value, name } = e.target;
    setInputs(x => ({
      ...x,
      [name]: value,
    }));
  };

  return (
    <div className='App'>
      {!final && (
        <>
          <Input
            size='large'
            placeholder='name1'
            data-testid='name1'
            prefix={<UserOutlined />}
            name='name1'
            value={inputs.name1}
            onChange={handleInputChange}
          />
          <Input
            placeholder='name2'
            data-testid='name2'
            prefix={<UserOutlined />}
            name='name2'
            value={inputs.name2}
            onChange={handleInputChange}
          />
          <Input
            size='small'
            placeholder='name3'
            data-testid='name3'
            prefix={<UserOutlined />}
            name='name3'
            value={inputs.name3}
            onChange={handleInputChange}
          />
          {inputs.name1 && inputs.name2 && inputs.name3 && (
            <MyModal inputs={inputs} final={setFinal} />
          )}
        </>
      )}
      {final && <div>End of test</div>}
    </div>
  );
}

export default App;
