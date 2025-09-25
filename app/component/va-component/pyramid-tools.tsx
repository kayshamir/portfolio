const tools = [
  { name: "HTML", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" },
  { name: "CSS", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" },
  { name: "JavaScript", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" },
  { name: "React", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
  { name: "PHP", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg" },
  { name: "Laravel", img: "https://simpleicons.org/icons/laravel.svg" }, 
  { name: "GitHub", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" },
  { name: "VS Code", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg" },
  { name: "Tailwind CSS", img: "https://www.svgrepo.com/show/374118/tailwind.svg" },
  { name: "Next.js", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg" },
  { name: "Word", img: "https://www.svgrepo.com/show/374187/word.svg" },
  { name: "Excel", img: "https://cdn-icons-png.flaticon.com/512/732/732220.png" },
  { name: "PowerPoint", img: "https://cdn-icons-png.flaticon.com/512/732/732224.png" },
  { name: "MS Teams", img: "https://cdn.worldvectorlogo.com/logos/microsoft-teams-1.svg"},
  { name: "Gmail", img: "https://cdn-icons-png.flaticon.com/512/281/281769.png" },
  { name: "Google Drive", img: "https://cdn-icons-png.flaticon.com/512/5968/5968523.png" },
  { name: "Google Calendar", img: "https://www.svgrepo.com/show/353803/google-calendar.svg" },
  { name: "Canva", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/canva/canva-original.svg" },
  { name: "Figma", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg" },
  { name: "CapCut", img: "https://www.svgrepo.com/show/504203/capcut.svg" },
  { name: "Notion", img: "https://upload.wikimedia.org/wikipedia/commons/4/45/Notion_app_logo.png" },
  { name: "ShadCN", img: "https://avatars.githubusercontent.com/u/139895814?s=200&v=4" },
  { name: "Facebook", img: "https://cdn-icons-png.flaticon.com/512/733/733547.png" },
  { name: "Instagram", img: "https://cdn-icons-png.flaticon.com/512/733/733558.png" },
  { name: "LinkedIn", img: "https://cdn-icons-png.flaticon.com/512/3536/3536505.png" },
  { name: "X", img: "https://cdn-icons-png.flaticon.com/512/5968/5968830.png" },
  { name: "Pinterest", img: "https://cdn-icons-png.flaticon.com/512/145/145808.png" },
  { name: "Picsart", img: "https://simpleicons.org/icons/picsart.svg" },
  { name: "Yahoo", img: "https://cdn-icons-png.flaticon.com/512/732/732200.png" },
  { name: "Telegram", img: "https://cdn-icons-png.flaticon.com/512/2111/2111646.png" },
  { name: "TikTok", img: "https://cdn-icons-png.flaticon.com/512/3046/3046121.png" }
];

const PyramidTools = () => {
  const toolsPerRow = [13, 11, 9, 7, 5]; // Adjusted to 31 icons total
  let toolIndex = 0;

  return (
    <div className="flex flex-col items-center gap-6">
      {toolsPerRow.map((count, rowIndex) => (
        <div key={rowIndex} className="flex justify-center gap-4">
          {Array.from({ length: count }).map((_, i) => {
            if (toolIndex >= tools.length) return null; // ✅ Prevents overflow
            const tool = tools[toolIndex++];
            return (
              <div key={i} className="flex flex-col items-center">
                <div className="w-20 h-20 flex items-center justify-center rounded-full bg-gray-50 shadow-sm">
                  <img src={tool.img} alt={tool.name} className="w-10 h-10" />
                </div>
                {/* <p className="text-sm mt-1">{tool.name}</p> */}
              </div>
            );
          })}
        </div>
      ))}
    </div>
  );
};

export default PyramidTools;
