import { ref, computed } from "vue";
import { defineStore } from "pinia";
import { useFetch } from "@/utils/utils";

const USERS_API_URL = "users";

export const useAdminsStore = defineStore("admins", () => {
  const admins = ref({});
  const isAdminsEmpty = computed(() => admins.value == {});

  const fetchAdmins = async () => {
    await useFetch(`${USERS_API_URL}/admins`).then((response) => {
      response.map((admin) => (admins.value[admin.id] = admin));
    });
  };
  const getAdmin = async (id) => {
    let admin = admins.value[id];
    if (!admin) {
      admin = await useFetch(`${USERS_API_URL}/admins/${id}`);
    }
    return admin;
  };
  const getAdmins = async () => {
    if (isAdminsEmpty) {
      await fetchAdmins();
    }
    return Object.values(admins.value);
  };
  const addAdmin = async (form) => {
    return await useFetch(`${USERS_API_URL}/admins/`, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(form),
    }).then((data) => {
      admins.value[data.id] = data;
    });
  };
  const editAdmin = async (form) => {
    return await useFetch(`${USERS_API_URL}/admins/${form.id}/`, {
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
      admins.value[form.id] = data;
    });
  };

  return {
    admins,
    fetchAdmins,
    addAdmin,
    editAdmin,
    getAdmin,
    getAdmins,
  };
});

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

export const useStudentAdvisersStore = defineStore("advisers", () => {
  const advisers = ref({});
  const isAdvisersEmpty = computed(() => advisers.value == {});

  const fetchAdvisers = async () => {
    await useFetch(`${USERS_API_URL}/student-advisers`).then((response) => {
      response.map((adviser) => (advisers.value[adviser.id] = adviser));
    });
  };
  const getAdviser = async (id) => {
    let adviser = advisers.value[id];
    if (!adviser) {
      adviser = await useFetch(`${USERS_API_URL}/student-advisers/${id}`);
    }
    return adviser;
  };
  const getAdvisers = async () => {
    if (isAdvisersEmpty) {
      await fetchAdvisers();
    }
    return Object.values(advisers.value);
  };
  const addAdviser = async (form) => {
    return await useFetch(`${USERS_API_URL}/student-advisers/`, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(form),
    }).then((data) => {
      advisers.value[data.id] = data;
    });
  };
  const editAdviser = async (form) => {
    return await useFetch(`${USERS_API_URL}/student-advisers/${form.id}/`, {
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
      advisers.value[form.id] = data;
    });
  };

  return {
    advisers,
    fetchAdvisers,
    addAdviser,
    editAdviser,
    getAdviser,
    getAdvisers,
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

export const useUsersStore = defineStore("users", () => {
  const users = ref({});
  const isUsersEmpty = computed(() => users.value == {});

  const fetchUsers = async () => {
    await useFetch(`${USERS_API_URL}/all`).then((response) => {
      response.map((User) => (users.value[User.id] = User));
    });
  };
  const getUser = async (id) => {
    let User = users.value[id];
    if (!User) {
      User = await useFetch(`${USERS_API_URL}/all/${id}`);
    }
    return User;
  };
  const getUsers = async () => {
    if (isUsersEmpty) {
      await fetchUsers();
    }
    return Object.values(users.value);
  };
  const addUser = async (form) => {
    return await useFetch(`${USERS_API_URL}/all/`, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(form),
    }).then((data) => {
      users.value[data.id] = data;
    });
  };
  const editUser = async (form) => {
    return await useFetch(`${USERS_API_URL}/all/${form.id}/`, {
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
      users.value[form.id] = data;
    });
  };

  return {
    users,
    fetchUsers,
    addUser,
    editUser,
    getUser,
    getUsers,
  };
});
