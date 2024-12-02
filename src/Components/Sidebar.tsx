// src/components/Sidebar.ts
interface SidebarProps {
  setSelectedStatus: React.Dispatch<React.SetStateAction<'pending' | 'completed' | 'all'>>;
}

const Sidebar: React.FC<SidebarProps> = ({ setSelectedStatus }) => {
  return (
    <div className="w-64 bg-gray-100 p-4">
      <h2 className="text-lg font-bold mb-4">Filter Todos</h2>
      <button
        className="block w-full text-left p-2 mb-2 rounded bg-blue-500 text-white"
        onClick={() => setSelectedStatus('all')}
      >
        All Todos
      </button>
      <button
        className="block w-full text-left p-2 mb-2 rounded bg-green-500 text-white"
        onClick={() => setSelectedStatus('pending')}
      >
        Pending
      </button>
      <button
        className="block w-full text-left p-2 mb-2 rounded bg-gray-500 text-white"
        onClick={() => setSelectedStatus('completed')}
      >
        Completed
      </button>
    </div>
  );
};

export default Sidebar;
