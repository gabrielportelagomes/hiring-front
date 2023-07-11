import useAsync from "../useAsync";
import * as candidate from "../../services/api/candidateApi";

export default function useSaveSchedule() {
  const {
    data: registerSchedule,
    loading: registerScheduleLoading,
    error: registerScheduleError,
    act: postRegisterSchedule,
  } = useAsync((data) => candidate.postSchedule(data), {
    immediate: false,
  });

  return {
    registerSchedule,
    registerScheduleLoading,
    registerScheduleError,
    postRegisterSchedule,
  };
}