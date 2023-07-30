import React from "react";
function Header({ props }) {
  console.log(props);
  return (
    <header>
      <div>
        <nav>
          <ul>
            {props.map((item) => {
              return (
                <li>
                  <a href={item.path}>{item.name}</a>
                </li>
              );
            })}
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;
