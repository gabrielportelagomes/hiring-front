import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { Link } from "react-router-dom";

import * as Style from "./style";
import useApprovedCandidates from "../../hooks/api/useApprovedCandidates";
import LoadingPage from "../../components/LoadingPage";

interface ApprovedCandidates {
  id: number;
  nome: string;
  status: string;
}

export default function ApprovedCandidatesPage() {
  const { approvedCandidatesLoading, getApprovedCandidates } =
    useApprovedCandidates();
  const [approvedCandidatesList, setApprovedCandidatesList] =
    useState<ApprovedCandidates[]>();

  useEffect(() => {
    getCandidates();
  }, []);

  if (approvedCandidatesLoading) {
    return <LoadingPage />;
  }

  async function getCandidates() {
    try {
      const candidates = await getApprovedCandidates();
      setApprovedCandidatesList(candidates);
    } catch (error: any) {
      toast.error("Ocorreu um erro na requisição.");
    }
  }

  return (
    <Style.Container>
      <Style.Title>Candidatos Aprovados</Style.Title>

      {approvedCandidatesList && (
        <Style.CandidatesContainer>
          {approvedCandidatesList.length > 0 && (
            <Style.Label>
              <Style.Code>Código</Style.Code>
              <Style.Name>Nome</Style.Name>
            </Style.Label>
          )}
          {approvedCandidatesList.length > 0 &&
            approvedCandidatesList.map((candidate) => {
              return (
                <Style.Candidate key={candidate.id}>
                  <Style.Code>{candidate.id}</Style.Code>
                  <Style.Name>{candidate.nome}</Style.Name>
                </Style.Candidate>
              );
            })}
          {approvedCandidatesList.length === 0 && (
            <Style.EmptyList>Nenhum candidato aprovado!</Style.EmptyList>
          )}
          <Style.BackToHome>
            <Link to={"/"}>
              <p>Voltar para o início</p>
            </Link>
          </Style.BackToHome>
        </Style.CandidatesContainer>
      )}
    </Style.Container>
  );
}
