import React, { useRef, useState } from 'react'

function Gugudan() {

  const [first, setFirst] = useState(Math.ceil(Math.random() * 9));
  const [second, setSecond] = useState(Math.ceil(Math.random() * 9));
  const [value, setValue] = useState('');
  const [result, setResult] = useState('');
  const inputRef = useRef(null);

  const onChangeInput = (e) => {
    setValue(e.target.value);
  }

  const onSubmitInput = (e) => {
    e.preventDefault();
    if (parseInt(value) === first * second) {
      setResult(first + ' * ' + second + '정답 : ' + value);
      setFirst(Math.ceil(Math.random() * 9));
      setSecond(Math.ceil(Math.random() * 9));
      setValue('');
      inputRef.current.focus();
    } else {
      setResult('땡!')
      setValue('')
      inputRef.current.focus();
    }
  }

  return (
    <>
      <div>    
        {first} * {second} 는 ?
      </div>
      <form onSubmit={onSubmitInput}>
        <input ref={inputRef} onChange={onChangeInput} value={value} />{' '}
        <button>입력</button>
      </form>
      <div>{ result }</div>
    </>
  )
}

export default Gugudan
