import * as axios from "axios";

const instance = axios.create({
  baseURL: "https://social-network.samuraijs.com/api/1.0/",
  withCredentials: true,
  headers: {
    "API-KEY": "f58482bd-d7d8-471d-b2cf-53bb96fcfb85"
  }
});

export const usersAPI = {
  getUsers: (currentPage = 1, pageSize) => {
    return instance
      .get(`users?page=${currentPage}&count=${pageSize}`, {
        withCredentials: true
      })
      .then(response => response.data);
  },
  getProfile: userId => {
    return instance.get(`profile/` + userId);
  },
  followUser: userId => {
    return instance.post(`follow/${userId}`, {});
  },
  unfollowUser: userId => {
    return instance.delete(`follow/${userId}`);
  }
};

export const authAPI = {
  me: () => {
    return instance.get(`auth/me`);
  }
};
