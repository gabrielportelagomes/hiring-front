import useSaveSchedule from "../../hooks/api/useSaveSchedule";
import PageComponent from "../../components/PageComponent";

export default function ScheduleInterviewPage() {
  const { registerScheduleLoading, postRegisterSchedule } = useSaveSchedule();

  return (
    <PageComponent
      loadingRequest={registerScheduleLoading}
      requestFunction={postRegisterSchedule}
      successMessage="Entrevista agendada com sucesso!"
      pageTitle="Agendar Entrevista"
      buttonName="Agendar"
    />
  );
}
