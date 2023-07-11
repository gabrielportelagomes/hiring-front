import useAsync from "../useAsync";
import * as candidate from "../../services/api/candidateApi";

export default function useSaveApprove() {
  const {
    data: approveCandidate,
    loading: approveCandidateLoading,
    error: approveCandidateError,
    act: postApproveCandidate,
  } = useAsync((data) => candidate.postApprove(data), {
    immediate: false,
  });

  return {
    approveCandidate,
    approveCandidateLoading,
    approveCandidateError,
    postApproveCandidate,
  };
}
