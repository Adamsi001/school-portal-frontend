import { ref, computed } from "vue";
import { defineStore } from "pinia";
import { useFetch } from "@/utils/utils";

export const useFacultiesStore = defineStore("faculties", () => {
  const faculties = ref({});
  const isFacultiesEmpty = computed(() => faculties.value == {});

  const fetchFaculties = async () => {
    await useFetch("faculties").then((response) => {
      response.map((faculty) => (faculties.value[faculty.id] = faculty));
    });
  };
  const getFaculty = async (id) => {
    let faculty = faculties.value[id];
    if (faculty) {
      return faculty;
    }
    faculty = await useFetch(`faculties/${id}`);
    return faculty;
  };
  const getFaculties = async () => {
    if (isFacultiesEmpty) {
      await fetchFaculties();
    }
    return Object.values(faculties.value);
  };
  const addFaculty = async (form) => {
    return await useFetch(`faculties/`, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(form),
    }).then((data) => {
      faculties.value[data.id] = data;
    });
  };
  const editFaculty = async (form) => {
    return await useFetch(`faculties/${form.id}/`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({
        title: form.title,
        abbrevation: form.abbrevation,
      }),
    }).then(async (data) => {
      faculties.value[form.id] = data;
    });
  };

  return { faculties, addFaculty, editFaculty, getFaculty, getFaculties };
});
