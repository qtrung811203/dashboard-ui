import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { SidebarTrigger } from "@/components/ui/sidebar";
import {
  dashboardData,
  pendingSuppliers,
  pendingEvents,
  reportedPosts,
} from "@/data/mock-data";

const DashboardPage = () => {
  return (
    <div className="container mx-auto p-6">
      <div className="flex items-center align-middle mb-6 gap-4">
        <SidebarTrigger />
        <h1 className=" text-2xl font-bold">Admin Dashboard</h1>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
        <Card className="flex flex-col items-center justify-center p-6">
          <div className="mb-2 text-2xl font-bold">
            {dashboardData.submissions}
          </div>
          <p className="text-sm text-muted-foreground">Submissions</p>
        </Card>
        <Card className="flex flex-col items-center justify-center p-6">
          <div className="mb-2 text-2xl font-bold">
            {dashboardData.totalUsers}
          </div>
          <p className="text-sm text-muted-foreground">Total Users</p>
        </Card>
        <Card className="flex flex-col items-center justify-center p-6">
          <div className="mb-2 text-2xl font-bold">
            {dashboardData.activePosts}
          </div>
          <p className="text-sm text-muted-foreground">Active Posts</p>
        </Card>
        <Card className="flex flex-col items-center justify-center p-6">
          <div className="mb-2 text-2xl font-bold">
            {dashboardData.reportedContent}
          </div>
          <p className="text-sm text-muted-foreground">Reported Content</p>
        </Card>
      </div>

      {/* Pending Items */}
      <div className="mt-8 grid grid-cols-1 gap-6 lg:grid-cols-2">
        {/* Pending Suppliers */}
        <div>
          <h2 className="mb-4 text-xl font-semibold">Pending Suppliers</h2>
          <div className="space-y-4">
            {pendingSuppliers.map((supplier) => (
              <Card key={supplier.id} className="p-4">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="font-medium">{supplier.name}</p>
                    <div className="mt-1 h-2 w-48 rounded bg-gray-200"></div>
                  </div>
                  <Button size="sm" variant="outline">
                    Approve
                  </Button>
                </div>
              </Card>
            ))}
          </div>
        </div>

        {/* Pending Events */}
        <div>
          <h2 className="mb-4 text-xl font-semibold">Pending Events</h2>
          <div className="space-y-4">
            {pendingEvents.map((event) => (
              <Card key={event.id} className="p-4">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="font-medium">{event.name}</p>
                    <div className="mt-1 h-2 w-48 rounded bg-gray-200"></div>
                  </div>
                  <Button size="sm" variant="outline">
                    Approve
                  </Button>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>

      {/* Reported Posts */}
      <div className="mt-8">
        <h2 className="mb-4 text-xl font-semibold">Reported Posts</h2>
        <div className="grid grid-cols-1 gap-4 lg:grid-cols-2">
          {reportedPosts.map((post) => (
            <Card key={post.id} className="p-4">
              <div className="flex items-center justify-between">
                <div>
                  <p className="font-medium">{post.title}</p>
                  <div className="mt-1 h-2 w-48 rounded bg-gray-200"></div>
                </div>
                <Button size="sm" variant="outline">
                  Review
                </Button>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default DashboardPage;
