//Dashboard Data
const dashboardData = {
  submissions: 8,
  totalUsers: 150,
  activePosts: 24,
  reportedContent: 2,
};

const pendingSuppliers = [
  { id: 1, name: "GreenFarm Co." },
  { id: 2, name: "FreshMarket Ltd." },
];

const pendingEvents = [
  { id: 1, name: "Organic Food Expo 2025", status: "pending" },
  { id: 2, name: "Sustainable Farming Workshop", status: "pending" },
];

const reportedPosts = [
  { id: 1, title: "Post contains inappropriate content" },
  { id: 2, title: "Spam post in event discussion" },
  { id: 3, title: "False information shared" },
  { id: 4, title: "Harassment in comments" },
];

export { dashboardData, pendingSuppliers, pendingEvents, reportedPosts };
