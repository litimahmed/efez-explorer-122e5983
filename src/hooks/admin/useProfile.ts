import { useQuery } from "@tanstack/react-query";
import { getAdminProfile } from "@/services/admin/profileService";

export const useProfile = () => {
  const { data: profile, isLoading, error, refetch } = useQuery({
    queryKey: ["adminProfile"],
    queryFn: getAdminProfile,
  });

  return { profile, isLoading, error, refetch };
};
