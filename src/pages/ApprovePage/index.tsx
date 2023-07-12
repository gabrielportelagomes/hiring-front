import useSaveApprove from "../../hooks/api/useSaveApprove";
import PageComponent from "../../components/PageComponent";

export default function ApprovePage() {
  const { approveCandidateLoading, postApproveCandidate } = useSaveApprove();

  return (
    <PageComponent
      loadingRequest={approveCandidateLoading}
      requestFunction={postApproveCandidate}
      successMessage="Candidato aprovado no processo!"
      pageTitle="Aprovar Candidato"
      buttonName="Aprovar"
    />
  );
}
