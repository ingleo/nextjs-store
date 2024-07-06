import { validateAccessToken } from 'app/utils/auth/validateAccessToken';

export default async function UserInfoPage() {
  const customer = await validateAccessToken();

  return (
    <div>
      <section>
        <p>Welcome {customer?.firstName} </p>
      </section>
    </div>
  );
}
