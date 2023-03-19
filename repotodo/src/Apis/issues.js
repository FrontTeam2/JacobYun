import { Axios } from "./core";

const PATH = "/repos";
const IssuesApi = {
  getData(owner, repository) {
    return Axios.get(`${PATH}/${owner}/${repository}/issues`);
  },
  getIssue(owner, repository, number) {
    return Axios.get(`${PATH}/${owner}/${repository}/issues/${number}`);
  },
};

export default IssuesApi;
