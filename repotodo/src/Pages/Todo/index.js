import { useCallback, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import IssuesApi from "../../Apis/issues";

import { getIssues } from "../../store/slice/issuesSlice";

function ListPage() {
  const dispatch = useDispatch();
  const issues = useSelector((store) => store.issue.issues);
  const getIssuesState = useSelector((store) => store.issue.getIssuesState);
  const { owner, repository } = useParams();

  console.log(owner);
  return (
    <>
      <div>리스트페이지로딩중</div>:<div>로딩성공</div>
    </>
  );
}

export default ListPage;
