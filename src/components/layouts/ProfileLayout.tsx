import BackgroundPicture from '@components/elements/background-picture/BackgroundPicture';
import Button from '@components/elements/button/Button';
import Displayname from '@components/elements/displayname';
import Link from '@components/elements/link/Link';
import Username from '@components/elements/username';
import EditProfileModal from '@components/modules/EditProfileModal/EditProfileModal';
import { UserQuery } from '@graphql/users/get-user/index.generated';
import dayjs from 'dayjs';
import { useRouter } from 'next/router';
import { useState } from 'react';
import { MdDateRange } from 'react-icons/md';
import { useIsCurrentUser } from '../../hooks/useIsCurrentUser';
import ProfilePicture from '../elements/profile-picture/ProfilePicture';
import AppLayout from './AppLayout';

interface ProfileLayoutProps {
  data?: UserQuery;
  error?: any;
  children: React.ReactNode;
}

interface NavItemProps {
  children: string;
  username?: string;
  href: string;
}

const NavItem = ({ children, username, href }: NavItemProps) => {
  const router = useRouter();
  const path = `/${username}${href}`;
  const isActive = router.asPath === path;

  return (
    <li className="flex-grow">
      <Link
        className="flex justify-center items-center w-full h-12 transition hover:bg-gray-200"
        href={path}
      >
        <span
          className={`h-full inline-flex justify-center font-semibold text-sm items-center relative before:left-0 before:absolute before:bottom-0 before:h-1 ${
            isActive ? 'before:bg-red-600' : 'before:bg-transparent'
          }  before:w-full`}
        >
          {children}
        </span>
      </Link>
    </li>
  );
};

const ProfileLayout = ({ data, children }: ProfileLayoutProps) => {
  const [isOpenEditProfileModal, setIsOpenProfileModal] = useState(false);
  const router = useRouter();
  const isCurrenUser = useIsCurrentUser({
    username: router.query.username as string,
  });

  console.log('is Current user : ', isCurrenUser);

  const user = data?.user;

  const handleOpenEditProfileModal = () => {
    setIsOpenProfileModal(true);
  };

  const handleCloseEditProfileModal = () => {
    setIsOpenProfileModal(false);
  };

  //   if (!user)
  //     return (
  //       <>
  //         Not Found
  //         <button onClick={() => router.back()}>Go back</button>
  //       </>
  //     );

  return (
    <>
      <EditProfileModal
        isOpen={isOpenEditProfileModal}
        closeFn={handleCloseEditProfileModal}
      />
      <div>
        <div className="relative">
          <BackgroundPicture url={user?.profile.backroundPicture!} />
          <ProfilePicture
            size="large"
            className="absolute left-4 bottom-0 translate-y-1/2"
            url={user?.profile.profilePicture!}
          />
        </div>
        <div>
          <div className="p-6 pb-0 mb-8">
            <div className="flex justify-end h-16">
              {isCurrenUser && (
                <Button
                  as="button"
                  onClick={handleOpenEditProfileModal}
                  styleType="secondaryOutline"
                  sizeType="medium"
                  rounded
                >
                  Edit Profile
                </Button>
              )}
            </div>
            <div className="flex flex-col">
              <div className="flex flex-col mb-3">
                {user ? (
                  <>
                    <Displayname size="large">
                      {user?.profile?.displayname!}
                    </Displayname>
                    <Username>{user?.username}</Username>
                    {user?.profile.bio && (
                      <p className="mt-2">{user.profile.bio}</p>
                    )}
                    <span className="flex items-center mt-2 text-sm text-gray-500">
                      <MdDateRange className="mr-1 text-xl" />
                      <span>
                        Joined {dayjs(user?.createdAt).format('MMMM YYYY')}
                      </span>
                    </span>
                    <div className="flex mt-2">
                      <span className="mr-4">
                        <strong>99</strong>
                        <span>Following</span>
                      </span>
                      <span>
                        <strong>99</strong>
                        <span>Followers</span>
                      </span>
                    </div>
                  </>
                ) : (
                  <Username size="large">
                    {router.query.username as string}
                  </Username>
                )}
              </div>
            </div>
          </div>
          {user && (
            <nav className="">
              <ul className="flex justify-between border-b border-b-gray-200">
                <NavItem username={user?.username} href="">
                  Tweets
                </NavItem>
                <NavItem username={user?.username} href="/with_replies">
                  Tweets & Replies
                </NavItem>
                <NavItem username={user?.username} href="">
                  Media
                </NavItem>
                <NavItem username={user?.username} href="">
                  Likes
                </NavItem>
              </ul>
            </nav>
          )}
        </div>
        {user ? (
          children
        ) : (
          <p className="text-2xl text-center px-4">
            This account doesn’t exist
          </p>
        )}
      </div>
    </>
  );
};

export const getProfileLayout = (page: React.Component<ProfileLayoutProps>) => {
  return (
    <AppLayout>
      <ProfileLayout {...page.props}>{page}</ProfileLayout>
    </AppLayout>
  );
};

export default ProfileLayout;
