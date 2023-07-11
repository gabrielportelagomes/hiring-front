import { useState } from "react";
import { toast } from "react-toastify";
import { Link } from "react-router-dom";

import InputForm from "../../components/Form/Input";
import * as Style from "./style";
import { handleForm } from "../../utils/handleFormUtils";
import ButtonForm from "../../components/Form/Button";
import { loadingButton } from "../../assets/styles/loading";
import useCandidateStatus from "../../hooks/api/useCandidateStatus";

interface FormData {
  codCandidato: number | "";
}

export default function StatusPage() {
  const { candidateStatusLoading, getCandidateStatus } = useCandidateStatus();
  const [form, setForm] = useState<FormData>({
    codCandidato: "",
  });
  const [candidateStatus, setCandidateStatus] = useState();

  const onFormChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
    handleForm<FormData>(event, form, setForm);
  };

  async function submit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    try {
      const candidate = await getCandidateStatus(form.codCandidato);
   
      setCandidateStatus(candidate.status);
      toast.success("Requisição concluída com sucesso!");
    } catch (error: any) {
      setCandidateStatus(undefined);

      if (error.response) {
        if (error.response.data.nome) {
          toast.error(error.response.data.nome);
        } else {
          toast.error(error.response.data);
        }
      } else {
        toast.error("Ocorreu um erro na requisição.");
      }
    }
  }

  return (
    <Style.Container>
      <Style.Title>Verificar Status do Candidato</Style.Title>
      <Style.FormContainer>
        <Style.Form onSubmit={submit}>
          <InputForm
            label="Código:"
            id="codCandidato"
            name="codCandidato"
            value={form.codCandidato}
            onChange={onFormChange}
            type="number"
            placeholder="Código do candidato"
            disabled={candidateStatusLoading}
            autoComplete="off"
            required
          />
          <ButtonForm type="submit" disabled={candidateStatusLoading}>
            {candidateStatusLoading ? loadingButton : "Cadastrar"}
          </ButtonForm>
        </Style.Form>
        {candidateStatus && (
          <Style.CandidateInfo>
            Status do candidato: {candidateStatus}
          </Style.CandidateInfo>
        )}
        {candidateStatusLoading ? (
          <Style.BackToHome>Voltar para o início</Style.BackToHome>
        ) : (
          <Style.BackToHome>
            <Link to={"/"}>
              <p>Voltar para o início</p>
            </Link>
          </Style.BackToHome>
        )}
      </Style.FormContainer>
    </Style.Container>
  );
}
