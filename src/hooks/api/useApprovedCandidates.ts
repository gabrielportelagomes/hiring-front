import useAsync from "../useAsync";
import * as candidate from "../../services/api/candidateApi";

export default function useApprovedCandidates() {
  const {
    data: approvedCandidates,
    loading: approvedCandidatesLoading,
    error: approvedCandidatesError,
    act: getApprovedCandidates,
  } = useAsync(() => candidate.getApprovedCandidate(), {
    immediate: false,
  });

  return {
    approvedCandidates,
    approvedCandidatesLoading,
    approvedCandidatesError,
    getApprovedCandidates,
  };
}
