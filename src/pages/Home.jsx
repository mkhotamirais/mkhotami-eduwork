import { FaExternalLinkAlt } from "react-icons/fa";

const taskStatic = [
  { title: "task-html", url: "../web-static/tugas1-html/index.html" },
  { title: "task-bootstrap", url: "../web-static/tugas2-bootstrap/index.html" },
  { title: "task-javascript", url: "../web-static/tugas3-jsbasic/index.html" },
  { title: "task-oop", url: "../web-static/tugas4-miniLibrary/index.html" },
  { title: "task-jsonplaceholder", url: "https://panduan-public-apis.vercel.app/jsonplaceholder" },
  { title: "task-newsapi", url: "https://panduan-public-apis.vercel.app/newsapi" },
  { title: "task-sisko", url: "https://panduan-public-apis.vercel.app/sisko" },
  { title: "task-ecommerce", url: "https://github.com/mkhotamirais/mkhotami-mern-eduwork" },
];

const Home = () => {
  return (
    <div className="text-center py-8">
      <h1 className="text-xl">Hello, My name is Mkhotami</h1>
      <p>I am a web developer</p>
      <div className="py-4">
        <h2 className="text-lg">Task Static</h2>
        <div className="flex gap-4 justify-center py-2 flex-wrap text-sm">
          {taskStatic.map((item, i) => (
            <a
              href={item.url}
              target="_blank"
              rel="noopener noreferrer"
              key={i}
              className="flex gap-1 underline hover:text-cyan-600 hover:no-underline"
            >
              {item.title}
              <FaExternalLinkAlt className="text-[0.5rem] translate-y-1" />
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
