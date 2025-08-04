import api from '@/lib/axios';

interface RegisterPayload {
  name?: string;
  email?: string;
  password?: string;
}

interface LoginPayload {
  email?: string;
  password?: string;
}

export const registerUser = (data: RegisterPayload) => {
  return api.post('/auth/register', data);
};

export const loginUser = (data: LoginPayload) => {
  return api.post('/auth/login', data);
};

export const redirectToGoogleAuth = () => {
  const apiUrl = process.env.NEXT_PUBLIC_API_URL;
  if (apiUrl) {
    window.location.href = `${apiUrl}/auth/google`;
  } else {
    console.error("API URL is not defined in environment variables.");
  }
};
