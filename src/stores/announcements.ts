import { ref, computed } from "vue";
import { defineStore } from "pinia";
import { useFetch } from "@/utils/utils";

export const useAnnouncementsStore = defineStore("announcements", () => {
  const announcements = ref({});
  const isAnnouncementsEmpty = computed(() => announcements.value == {});

  const fetchAnnouncements = async () => {
    await useFetch("announcements").then((response) => {
      response.map(
        (announcement) => (announcements.value[announcement.id] = announcement)
      );
    });
  };
  const getAnnouncement = async (id) => {
    let announcement = announcements.value[id];
    if (!announcement) {
      announcement = await useFetch(`announcements/${id}`);
    }
    return announcement;
  };
  const getAnnouncements = async () => {
    if (isAnnouncementsEmpty) {
      await fetchAnnouncements();
    }
    return Object.values(announcements.value);
  };
  const addAnnouncement = async (form) => {
    return await useFetch(`announcements/`, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(form),
    }).then((data) => {
      announcements.value[data.id] = data;
    });
  };
  // const editAnnouncement = async (form) => {
  //   return await useFetch(`announcements/${form.id}/`, {
  //     method: "PUT",
  //     headers: {
  //       "content-type": "application/json",
  //     },
  //     body: JSON.stringify({
  //       subject: form.subject,
  //       body: form.body,
  //     }),
  //   }).then(async (data) => {
  //     announcements.value[form.id] = data;
  //   });
  // };

  return {
    announcements,
    fetchAnnouncements,
    addAnnouncement,
    // editAnnouncement,
    getAnnouncement,
    getAnnouncements,
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
        announcement: form.announcement,
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
