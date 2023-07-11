import useAsync from "../useAsync";
import * as candidate from "../../services/api/candidateApi";

export default function useSaveCandidate() {
  const {
    data: registerCandidate,
    loading: registerCandidateLoading,
    error: registerCandidateError,
    act: postRegisterCandidate,
  } = useAsync((data) => candidate.postStartProcess(data), {
    immediate: false,
  });

  return {
    registerCandidate,
    registerCandidateLoading,
    registerCandidateError,
    postRegisterCandidate,
  };
}
