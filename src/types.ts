export interface Project {
  id: number;
  title: string;
  attributes: {
    id: number;
    name: string;
    pinned: boolean;
    status: string;
    updatedAt: string;
    guilds: {
      data: [
        {
          id: number;
          attributes: {
            guild_name: string;
          };
        }
      ];
    };
  };
  bgColorClass: string;
}
