import React from "react";
import useUserHttp from "@hooks/queries/useUserQuery";
import { ListInterface } from "@interfaces/listInterface";
import { UserInterface } from "@interfaces/userInterface";
import { Link, useLocation, useNavigate } from "react-router-dom";
const DownLoadComponent = () => {
  return (
    <React.Fragment>
      <div className="downLoad">
        <div>
          <p>첨부자료</p>
          <Link to="" download="">
            전체 다운로드
          </Link>
        </div>
        <ul>
          <li>
            <Link to="" download="">
              다운로드
            </Link>
          </li>
          <li>
            <Link to="" download="">
              다운로드
            </Link>
          </li>
        </ul>
      </div>
    </React.Fragment>
  );
};

export default DownLoadComponent;
