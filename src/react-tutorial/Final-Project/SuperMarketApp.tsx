import Button from './Button';
import MyInput from './MyInput';

export default function SuperMarketApp() {
  function handleButtonClick() {
    console.log('Button clicked');
  }

  function handleLastNameInput() {
    console.log('Last name changed');
  }
  return (
    <>
      <div style={{ display: 'flex', alignItems: 'center', gap: '20px', flexWrap: 'wrap' }}></div>

      <Button>Normal</Button>
      <Button outline>Outline</Button>
      <Button className='extra-class' onClick={handleButtonClick}>
        Customizable
      </Button>

      <MyInput defaultText='First name'></MyInput>
      <MyInput defaultText='Last name' onInput={handleLastNameInput}></MyInput>
      <MyInput defaultText='Email' type='email' required></MyInput>
    </>
  );
}
