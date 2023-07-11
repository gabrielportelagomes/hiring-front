import useAsync from "../useAsync";
import * as candidate from "../../services/api/candidateApi";

export default function useCandidateStatus() {
  const {
    data: candidateStatus,
    loading: candidateStatusLoading,
    error: candidateStatusError,
    act: getCandidateStatus,
  } = useAsync((data) => candidate.getStatus(data), {
    immediate: false,
  });

  return {
    candidateStatus,
    candidateStatusLoading,
    candidateStatusError,
    getCandidateStatus,
  };
}
