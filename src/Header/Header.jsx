import React from 'react'
import { Link } from 'react-router-dom';

function Header() {
  return (
    <div>
      <Link to="/gugudan">구구단</Link>
      {' '}|{' '}
      <Link to="/word-replay">끝말잇기</Link>
      {' '}|{' '}
      <Link to="/number-baseball">숫자야구</Link>
      {' '}|{' '}
      <Link to="/reaction-rate">반응속도 테스트</Link>
      {' '}|{' '}
      <Link to="/rsp">가위바위보</Link>
      {' '}|{' '}
      <Link to="/lotto">로또</Link>
      {' '}|{' '}
      <Link to="/tictactoe">틱택토</Link>
    </div>
  )
}

export default Header
