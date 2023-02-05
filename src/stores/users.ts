import { ref, computed } from "vue";
import { defineStore } from "pinia";
import { useFetch } from "@/utils/utils";

const USERS_API_URL = "users";

export const useLecturersStore = defineStore("lecturers", () => {
  const lecturers = ref({});
  const isLecturersEmpty = computed(() => lecturers.value == {});

  const fetchLecturers = async () => {
    await useFetch(`${USERS_API_URL}/lecturers`).then((response) => {
      response.map((lecturer) => (lecturers.value[lecturer.id] = lecturer));
    });
  };
  const getLecturer = async (id) => {
    let lecturer = lecturers.value[id];
    if (!lecturer) {
      lecturer = await useFetch(`${USERS_API_URL}/lecturers/${id}`);
    }
    return lecturer;
  };
  const getLecturers = async () => {
    if (isLecturersEmpty) {
      await fetchLecturers();
    }
    return Object.values(lecturers.value);
  };
  const addLecturer = async (form) => {
    return await useFetch(`${USERS_API_URL}/lecturers/`, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(form),
    }).then((data) => {
      lecturers.value[data.id] = data;
    });
  };
  const editLecturer = async (form) => {
    return await useFetch(`${USERS_API_URL}/lecturers/${form.id}/`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({
        first_name: form.first_name,
        middle_name: form.middle_name,
        last_name: form.last_name,
        email: form.email,
        gender: form.gender,
        faculty: form.faculty,
        department: form.department,
      }),
    }).then(async (data) => {
      lecturers.value[form.id] = data;
    });
  };

  return {
    lecturers,
    fetchLecturers,
    addLecturer,
    editLecturer,
    getLecturer,
    getLecturers,
  };
});

export const useStudentsStore = defineStore("students", () => {
  const students = ref({});
  const isStudentsEmpty = computed(() => students.value == {});

  const fetchStudents = async () => {
    await useFetch(`${USERS_API_URL}/students`).then((response) => {
      response.map((Student) => (students.value[Student.id] = Student));
    });
  };
  const getStudent = async (id) => {
    let Student = students.value[id];
    if (!Student) {
      Student = await useFetch(`${USERS_API_URL}/students/${id}`);
    }
    return Student;
  };
  const getStudents = async () => {
    if (isStudentsEmpty) {
      await fetchStudents();
    }
    return Object.values(students.value);
  };
  const addStudent = async (form) => {
    return await useFetch(`${USERS_API_URL}/students/`, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(form),
    }).then((data) => {
      students.value[data.id] = data;
    });
  };
  const editStudent = async (form) => {
    return await useFetch(`${USERS_API_URL}/students/${form.id}/`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({
        first_name: form.first_name,
        middle_name: form.middle_name,
        last_name: form.last_name,
        email: form.email,
        gender: form.gender,
        faculty: form.faculty,
        department: form.department,
      }),
    }).then(async (data) => {
      students.value[form.id] = data;
    });
  };

  return {
    students,
    fetchStudents,
    addStudent,
    editStudent,
    getStudent,
    getStudents,
  };
});
