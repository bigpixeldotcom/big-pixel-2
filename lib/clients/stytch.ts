'use server';

import * as stytch from 'stytch';

const url = process.env.NODE_ENV === 'production'
  ? 'https://big-pixel.com/authenticate'
  : 'http://localhost:3000/authenticate';

const StytchClient = new stytch.Client({
  project_id: process.env.STYTCH_PROJECT_ID!,
  secret: process.env.STYTCH_SECRET!,
});

export async function magicLinks(
  state: { status: string; message: string },
  payload: { email: string }
): Promise<{ status: string; message: string }> {
  const url = process.env.NODE_ENV === 'production'
    ? 'https://big-pixel.com/authenticate'
    : 'http://localhost:3000/authenticate';

  const StytchClient = new stytch.Client({
    project_id: process.env.STYTCH_PROJECT_ID!,
    secret: process.env.STYTCH_SECRET!,
  });

  try {
    await StytchClient.magicLinks.email.loginOrCreate({
      email: payload.email,
      login_magic_link_url: url,
      signup_magic_link_url: url,
    });

    return {
      status: 'success',
      message: 'Magic link sent',
    };
  } catch (error) {
    console.error(error);
    return {
      status: 'error',
      message: 'Error sending magic link',
    };
  }
}