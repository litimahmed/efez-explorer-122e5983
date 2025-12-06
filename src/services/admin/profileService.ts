import { apiClient } from "@/services/api";
import { AdminProfile } from "@/types/admin/profile";

export const getAdminProfile = async (): Promise<AdminProfile> => {
  return apiClient.get<AdminProfile>("/admins/compte/afficher");
};
