import Announcements from "@/app/components/Announcements";
import AttendanceChart from "@/app/components/AttendanceChart";
import CountChart from "@/app/components/CountChart";
import EventCalendar from "@/app/components/EventCalendar";
import FinanceChart from "@/app/components/FinanceChart";
import UserCard from "@/app/components/UserCard";
const AdminPage = () => {
  return (
    <div className="p-4 flex gap-4 flex-col md:flex-row">
      {/* IZQ */}
      <div className="w-full lg:w-2/3 flex flex-col gap-8">
        {/* user cards */}
        <div className="flex gap-4 justify-between flex-wrap">
          <UserCard type="student" />
          <UserCard type="teacher" />
          <UserCard type="parent" />
          <UserCard type="staff" />
        </div>
        {/* middel charts */}
        <div className="flex gap-4 flex-col lg:flex-row">
          {/* count chart */}
          <div className="w-full lg:w-1/3 h-[450px]">
            <CountChart />
          </div>
          {/* Ateendance chart */}
          <div className="w-full lg:w-2/3 h-[450px]">
            <AttendanceChart />
          </div>
        </div>
        {/* bottom charts */}
        <div className="w-full h-[500px]">
          <FinanceChart />
        </div>
      </div>
      {/* DER */}
      <div className="w-full lg:w-1/3 flex flex-col gap-8">
      <EventCalendar />
      <Announcements />
      </div>
    </div>
  );
};

export default AdminPage;
