import useSaveDisqualify from "../../hooks/api/useSaveDisqualify";
import PageComponent from "../../components/PageComponent";

export default function DisqualifyPage() {
  const { disqualifyCandidateLoading, postDisqualifyCandidate } =
    useSaveDisqualify();

  return (
    <PageComponent
      loadingRequest={disqualifyCandidateLoading}
      requestFunction={postDisqualifyCandidate}
      successMessage="Candidato desqualificado do processo!"
      pageTitle="Desqualificar Candidato"
      buttonName="Desqualificar"
    />
  );
}
