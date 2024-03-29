import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser } from '@fortawesome/free-regular-svg-icons'
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from 'react-router-dom';
// import { faUser } from '@fortawesome/free-solid-svg-icons'


export const Navbar = () => {
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
  const goToLogin=()=> {
    navigate("/login")
  };
  const search = (event) => {
    // console.log("key press")
    if(event.key === "Enter") {
      // 1. 입력한 검색어를 읽어와서
      let keyword = event.target.value;
      console.log("keyword", keyword)
      // console.log("we clicked this key", event.key);

      // 2. url 변경
      navigate(`/?q=${keyword}`)

    }
  }

  return (
    <div className="nav-container">
      <div className="nav-header">
        <div className="login-button" onClick={goToLogin}>
          <FontAwesomeIcon icon={faUser} />
          <div>로그인</div>
        </div>
      </div>

      <div className="nav-logo">
        <img src="https://upload.wikimedia.org/wikipedia/commons/5/53/H%26M-Logo.svg" alt="" />
      </div>
      <div className="nav-menu-area">
        <ul className="menu-list">
          {menuList.map((menu)=> (
            <li>{menu}</li>
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
