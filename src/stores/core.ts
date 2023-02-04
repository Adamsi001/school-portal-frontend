import { ref, computed } from "vue";
import { defineStore } from "pinia";
import { useFetch } from "@/utils/utils";

export const useSessionsStore = defineStore("sessions", () => {
  const sessions = ref({});
  const isSessionsEmpty = computed(() => sessions.value == {});

  const fetchSessions = async () => {
    await useFetch("sessions").then((response_sessions) => {
      response_sessions.map(
        (session) => (sessions.value[session.id] = session)
      );
    });
  };
  const getSession = async (id) => {
    let session = sessions.value[id];
    if (session) {
      return session;
    }
    session = await useFetch(`sessions/${id}`);
    return session;
  };
  const getSessions = async () => {
    if (isSessionsEmpty) {
      await fetchSessions();
    }
    return Object.values(sessions.value);
  };
  const addSession = async (form) => {
    return await useFetch(`sessions/`, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(form),
    }).then((data) => {
      sessions.value[data.id] = data;
    });
  };
  const editSession = async (form) => {
    return await useFetch(`sessions/${form.id}/`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({ title: form.title }),
    }).then(async (data) => {
      sessions.value[form.id] = data;
    });
  };

  return { sessions, addSession, editSession, getSession, getSessions };
});
