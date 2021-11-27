import { $serviceApi as api } from "@/services/service-api";

const routes = {
  get_all_classes: "/general/global-class",
  get_class_subjects: "/general/class-subject",
  sign_up_parent: "/signup/parent",
  sign_up_student: "/signup/student",
  book_session: "/campaign/parent-live-session",
  get_all_live_tutors: "/campaign/live-sessions",
}

export default {
  // GET ALL CLASSES
  async getAllClasses() {
    return api.newService("old").fetch(routes.get_all_classes);
  },

  // GET CLASS SUBJECTS
  async getClassSubjects(_, class_id) {
    return api.newService("old").fetch(`${routes.get_class_subjects}/${class_id}`);
  },

  // SIGNUP PARENT FOR FREE ONE ON ONE SESSION
  async signupParent(_, payload) {
    return api.service("old").push(routes.sign_up_parent, payload);
  },

  // SIGNUP STUDENT WITH PARENT INFO
  async signupStudent(_, payload) {
    return api.service("old").push(routes.sign_up_student, payload);
  },

  // BOOK A SESSION
  async bookSession(_, payload) {
    return api.newService("old").push(routes.book_session, payload);
  },

  // GET LIST OF LIVE TUTORS
  async getLiveTutors(_, limit) {
    return api.newService("old").fetch(`${routes.get_all_live_tutors}?limit=${limit}`)
  }
}