import api from '@/lib/axios';

export interface UserProfile {
  id: string;
  email: string;
  username: string;
  profile: {
    id: string;
    bio: string;
    dateOfBirth: string | null;
    avatarUrl: string;
    bannerUrl: string;
    userId: string;
  }
}

interface ProfileResponse {
  success: boolean;
  message: string;
  data: UserProfile;
}

export const getProfileByUsername = async (username: string): Promise<UserProfile | null> => {
  try {
    const { data } = await api.get<ProfileResponse>(`/profile/${username}`);
    return data.data;
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  } catch (e) {
    return null;
  }
};