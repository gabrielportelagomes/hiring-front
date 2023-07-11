import { useState } from "react";
import { toast } from "react-toastify";
import { Link } from "react-router-dom";

import InputForm from "../../components/Form/Input";
import * as Style from "./style";
import { handleForm } from "../../utils/handleFormUtils";
import ButtonForm from "../../components/Form/Button";
import { loadingButton } from "../../assets/styles/loading";
import useSaveDisqualify from "../../hooks/api/useSaveDisqualify";

interface FormData {
  codCandidato: number | "";
}

export default function DisqualifyPage() {
  const { disqualifyCandidateLoading, postDisqualifyCandidate } =
    useSaveDisqualify();
  const [form, setForm] = useState<FormData>({
    codCandidato: "",
  });

  const onFormChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
    handleForm<FormData>(event, form, setForm);
  };

  async function submit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    try {
      await postDisqualifyCandidate(form);

      toast.success("Candidato desqualificado do processo!");
    } catch (error: any) {
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
      <Style.Title>Desqualificar Candidato</Style.Title>
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
            disabled={disqualifyCandidateLoading}
            autoComplete="off"
            required
          />
          <ButtonForm type="submit" disabled={disqualifyCandidateLoading}>
            {disqualifyCandidateLoading ? loadingButton : "Agendar"}
          </ButtonForm>
        </Style.Form>
        {disqualifyCandidateLoading ? (
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
