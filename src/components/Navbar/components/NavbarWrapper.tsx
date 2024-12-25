import { auth } from '@/lib/auth';
import Navbar from '../index';
export default async function NavbarWrapper() {
  const session = await auth();
  console.log(session)
  return <Navbar session={session} />;
}
