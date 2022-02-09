import React, { useRef, useState } from 'react'

function WordReplay() {

  const [word, setWord] = useState('제로초');
  const [value, setValue] = useState('');
  const [result, setResult] = useState('');
  const inputRef = useRef(null);

  const onChangeInput = (e) => {
    setValue(e.target.value);
  }

  const onSubmitInput = (e) => {
    e.preventDefault()
    if (word[word.length - 1] === value[0]) {
      setResult('딩동댕!')
      setWord(value);
      setValue('');
      inputRef.current.focus();
    } else {
      setResult('땡!')
      setValue('');
      inputRef.current.focus();
    }
  }

  return (
    <>
      <div>
        { word }
      </div>
      <form onSubmit={onSubmitInput}>
        <input ref={inputRef} onChange={onChangeInput} value={value} />{' '}
        <button>입력</button>
      </form>
      <div>
        { result }
      </div>
    </>
  )
}

export default WordReplay
