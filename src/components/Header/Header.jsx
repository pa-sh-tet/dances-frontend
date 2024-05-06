import { Link, useLocation } from 'react-router-dom';
import React from 'react';
import NavTab from './NavTab/NavTab';

export default function Header ({ isLoggedIn, isAdmin, setIsLoggedIn }) {
  function goToMain() {
    setIsLoggedIn(false);
  }

  function goToDances() {
    setIsLoggedIn(true);
  }

  return (
    <header className="header">
      {isLoggedIn ? (
        <>
          <Link className='header__exit link' to='/main' onClick={goToMain}>
            ВЫЙТИ
          </Link>
          <div className='header__container'>
            <p className="header__type">
              {isAdmin ? "Режим редактирования" : "Режим просмотра"}
            </p>
            <Link className='header__switch link'>
              {isAdmin ? "Перейти в режим просмотра" : "Перейти в режим редактирования"}
            </Link>
          </div>
        </>
      ) : (
        <>
          <Link to="/" className='header__link link' onClick={goToDances}>
            <div className='header__link-logo'></div>
            <p className='header__link-text'>ВХОД ДЛЯ СОТРУДНИКОВ</p>
          </Link>
          <NavTab />
        </>
      )}
    </header>
  )
}