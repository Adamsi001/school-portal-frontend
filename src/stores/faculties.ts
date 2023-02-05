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
    if (!faculty) {
      faculty = await useFetch(`faculties/${id}`);
    }
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

  return {
    faculties,
    fetchFaculties,
    addFaculty,
    editFaculty,
    getFaculty,
    getFaculties,
  };
});

export const useDepartmentsStore = defineStore("departments", () => {
  const departments = ref({});
  const isDepartmentsEmpty = computed(() => departments.value == {});

  const fetchDepartments = async () => {
    await useFetch("departments").then((response) => {
      response.map(
        (department) => (departments.value[department.id] = department)
      );
    });
  };
  const getDepartment = async (id) => {
    let department = departments.value[id];
    if (!department) {
      department = await useFetch(`departments/${id}`);
    }
    return department;
  };
  const getDepartments = async () => {
    if (isDepartmentsEmpty) {
      await fetchDepartments();
    }
    return Object.values(departments.value);
  };
  const addDepartment = async (form) => {
    return await useFetch(`departments/`, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(form),
    }).then((data) => {
      departments.value[data.id] = data;
    });
  };
  const editDepartment = async (form) => {
    return await useFetch(`departments/${form.id}/`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({
        title: form.title,
        abbrevation: form.abbrevation,
        short_code: form.short_code,
        faculty: form.faculty,
      }),
    }).then(async (data) => {
      departments.value[form.id] = data;
    });
  };

  return {
    departments,
    fetchDepartments,
    addDepartment,
    editDepartment,
    getDepartment,
    getDepartments,
  };
});
