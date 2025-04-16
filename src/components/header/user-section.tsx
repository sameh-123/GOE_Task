import { getCookie } from '@/utils/handle-cookies';
import Auth from './login-signup';
import UserData from './user-data';

export default async function UserSection() {
  const isAuth = await getCookie('token');

  if (isAuth) return <UserData userImage={null} />;
  return <Auth />;
}
