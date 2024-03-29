import React, {useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser, faBars } from '@fortawesome/free-solid-svg-icons';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from 'react-router-dom';
import { Link } from "react-router-dom";

const Navbar =({ authenticate, setAuthenticate }) => {
  const menuList = [
    "여성",
    "Divided",
    "남성",
    "신생아/유아",
    "아동",
    "H&M HOME",
    "Sale",
    "지속가능성",
  ];
  const navigate = useNavigate();
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
  const toggleMobileMenu = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
  };

  const goToLogin=()=> {
    navigate("/login")
  };
  const goToLogout = () => {
    if (window.confirm('로그아웃 하시겠습니까?')) {
      setAuthenticate(false);
      navigator('/');
  }
};


  const search = (event) => {
    // console.log("key press")
    if(event.key === "Enter") {
      // 1. 입력한 검색어를 읽어와서
      let keyword = event.target.value;
      // console.log("keyword", keyword)
      // console.log("we clicked this key", event.key);

      // 2. url 변경
      navigate(`/?q=${keyword}`)

    }
  }
  // 모바일 메뉴
  // let [width, setWidth] = useState(0);
  return (
    <div className="nav-container">
      <div className="nav-header">
        <div className="login-button" onClick={authenticate ? goToLogout : goToLogin}>
          <FontAwesomeIcon icon={faUser} />
          <div>{authenticate ? "로그아웃" : "로그인"}</div>
        </div>
        {/* 햄버거 메뉴 아이콘 */}
        <div className="mobile-menu-icon" onClick={toggleMobileMenu}>
          <FontAwesomeIcon icon={faBars} />
        </div>
      </div>

      <div className={`nav-logo ${isMobileMenuOpen ? 'mobile-menu-open' : ''}`}>
        <Link to="/">
          <img src="https://upload.wikimedia.org/wikipedia/commons/5/53/H%26M-Logo.svg" alt="" />
        </Link>
      </div>
      {/* 모바일 메뉴 영역 */}
      <div className={`nav-menu-area ${isMobileMenuOpen ? 'mobile-menu-open' : ''}`}>
        <ul className="menu-list">
          {menuList.map((menu, index) => (
            <li key={index}>{menu}</li>
          ))}
        </ul>
        <div className="search-box">
          <FontAwesomeIcon icon={faSearch} />
          <input type="text" onKeyPress={search} />
        </div>
      </div>

    </div>
  )
}
export default Navbar;