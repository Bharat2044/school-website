import Footer from "./Footer";
import Nav from "./Nav";
import "../styles/Teachers.css";

const teachers = [
  {
    name: "John Doe",
    subject: "Mathematics",
    education: "M.Tech (Harward Institute)",
    image: "./images/a.webp",
  },
  {
    name: "Jane Doe",
    subject: "Science",
    education: "M.Sc (Oxford University)",
    image: "./images/b.webp",
  },
  {
    name: "James Doe",
    subject: "History",
    education: "M.A (University of California)",
    image: "./images/c.avif",
  },
  {
    name: "Jill Doe",
    subject: "English",
    education: "M.A (University of California)",
    image: "./images/d.webp",
  },
  {
    name: "Jack Doe",
    subject: "Physical Education",
    education: "M.P.Ed (University of California)",
    image: "./images/e.jpg",
  },
  {
    name: "Jenny Doe",
    subject: "Music",
    education: "M.A (University of California)",
    image: "./images/f.jpg",
  },
  {
    name: "Jesse Doe",
    subject: "Art",
    education: "M.A (University of California)",
    image: "./images/g.jpg",
  },
  {
    name: "Jared Doe",
    subject: "Drama",
    education: "M.A (University of California)",
    image: "./images/h.jpg",
  },
  {
    name: "Jasmine Doe",
    subject: "Computer Science",
    education: "M.Tech (University of California)",
    image: "./images/i.jpg",
  },
  {
    name: "Josh Doe",
    subject: "Physical Education",
    education: "M.P.Ed (University of California)",
    image: "./images/j.jpg",
  },
  {
    name: "Jocelyn Doe",
    subject: "Physical Education",
    education: "M.P.Ed (University of California)",
    image: "./images/k.jpg",
  },
  {
    name: "Jane Doe",
    subject: "Science",
    education: "M.Sc (Oxford University)",
    image: "./images/c.avif",
  },
];

const Teachers = () => {
  return (
    <div className="teachers-container font-serif">
      <Nav />

      <div>
        <header className="teachers-header">
          <h1>
            <i className="ri-user-voice-line" style={{ marginRight: 16 }}></i>
            Teachers
          </h1>
        </header>

        <section className="teachers-section">
          {teachers.map((teacher, index) => (
            <div className="teacher-card" key={index}>
              <img
                src={teacher.image}
                alt={teacher.name}
                className="teacher-image"
              />
              
              <div className="teacher-details">
                <h2 className="text-xl font-semibold text-gray-600">{teacher.name}</h2>
                <p className="subject">{teacher.subject}</p>
                <p className="education mb-2">{teacher.education}</p>
              </div>
            </div>
          ))}
        </section>
      </div>

      <Footer />
    </div>
  );
};

export default Teachers;
