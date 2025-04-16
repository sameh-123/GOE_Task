'use server';
import { cookies } from 'next/headers';

export async function setCookie(name: string, value: string) {
  const cookie = await cookies();
  cookie.set(name, value);
}

export async function getCookie(name: string) {
  const cookie = await cookies();
  return cookie.get(name)?.value;
}

export async function deleteCookie(name: string) {
  const cookie = await cookies();
  cookie.delete(name);
}
