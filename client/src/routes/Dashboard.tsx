import ContainerWithMaxWidth from '@/components/common/ContainerWithMaxWidth';
import CreateandEditAppointment from '@/components/dashboard/CreateandEditAppointment';
import MobileNavigationBar from '@/components/dashboard/MobileNavigationBar';
import NavigationBar from '@/components/dashboard/NavigationBar';
import { useUser } from '@/hooks/useAppStore';
import { useEffect, useState } from 'react';
import { Outlet, useNavigate } from 'react-router-dom';
/**
 * Dash Board Component
 * Here, the user can have settings for the dashboard
 * @returns
 */
const Dashboard = () => {
  const [showCreateModal, setShowCreateModal] = useState(false);
  // Return user from Page if already authenticated
  const navigate = useNavigate();
  const user = useUser();

  useEffect(() => {
    if (!user) {
      return navigate('/login');
    }
  }, [user, navigate]);

  if (!user) return null;

  // Return Route layout and children element
  return (
    <ContainerWithMaxWidth className="bg-slate-50" maxWidth="">
      <ContainerWithMaxWidth
        className={`flex sm:flex-row flex-col gap-4 min-h-[calc(100dvh-150px)] w-full`}
      >
        {/* Dashboard navigation  */}
        <NavigationBar setShowCreateModal={() => setShowCreateModal(true)} />

        <MobileNavigationBar
          setShowCreateModal={() => setShowCreateModal(true)}
        />

        {/* Render nested child routes */}
        <div className="w-full bg-white rounded-lg shadow-lg shadow-slate-50">
          <Outlet />
        </div>

        {/* handle showing Create Appointment Modal  */}
        {showCreateModal && (
          <CreateandEditAppointment setModalVisibility={setShowCreateModal} />
        )}
      </ContainerWithMaxWidth>
    </ContainerWithMaxWidth>
  );
};

export default Dashboard;
