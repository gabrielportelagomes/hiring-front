import useAsync from "../useAsync";
import * as candidate from "../../services/api/candidateApi";

export default function useSaveDisqualify() {
  const {
    data: disqualifyCandidate,
    loading: disqualifyCandidateLoading,
    error: disqualifyCandidateError,
    act: postDisqualifyCandidate,
  } = useAsync((data) => candidate.postDisqualify(data), {
    immediate: false,
  });

  return {
    disqualifyCandidate,
    disqualifyCandidateLoading,
    disqualifyCandidateError,
    postDisqualifyCandidate,
  };
}
