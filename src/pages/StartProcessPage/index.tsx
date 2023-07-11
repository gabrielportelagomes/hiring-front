import { useState } from "react";
import { toast } from "react-toastify";
import { Link } from "react-router-dom";

import InputForm from "../../components/Form/Input";
import * as Style from "./style";
import { handleForm } from "../../utils/handleFormUtils";
import ButtonForm from "../../components/Form/Button";
import { loadingButton } from "../../assets/styles/loading";
import useSaveCandidate from "../../hooks/api/useSaveCandidate";

interface FormData {
  nome: string;
}

export default function StartProcessPage() {
  const { registerCandidateLoading, postRegisterCandidate } =
    useSaveCandidate();
  const [form, setForm] = useState<FormData>({
    nome: "",
  });
  const [candidateCode, setCandidateCode] = useState();

  const onFormChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
    handleForm<FormData>(event, form, setForm);
  };

  async function submit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    try {
      const candidate = await postRegisterCandidate(form);

      setCandidateCode(candidate.codCandidato);
      toast.success("Candidato cadastrado com sucesso!");
    } catch (error: any) {
      setCandidateCode(undefined);

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
      <Style.Title>Cadastrar Candidato</Style.Title>
      <Style.FormContainer>
        <Style.Form onSubmit={submit}>
          <InputForm
            label="Nome:"
            id="nome"
            name="nome"
            value={form.nome}
            onChange={onFormChange}
            type="text"
            placeholder="Nome do candidato"
            disabled={registerCandidateLoading}
            autoComplete="off"
            required
          />
          <ButtonForm type="submit" disabled={registerCandidateLoading}>
            {registerCandidateLoading ? loadingButton : "Cadastrar"}
          </ButtonForm>
        </Style.Form>
        {candidateCode && (
          <Style.CandidateInfo>
            Código do candidato: {candidateCode}
          </Style.CandidateInfo>
        )}
        {registerCandidateLoading ? (
          <Style.BackToHome>Voltar para o início</Style.BackToHome>
        ) : (
          <Link to={"/"}>
            <Style.BackToHome>Voltar para o início</Style.BackToHome>
          </Link>
        )}
      </Style.FormContainer>
    </Style.Container>
  );
}
