
export default function Resume() {
    return (
      <main class = "px-22 py-10 border border-gray-700 my-13 mx-60 bg-[#121213]">
      <h1 className="text-6xl py-10 font-bold">Dardan Jerliu </h1>

      {/* Summary */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Summary</h2>
        <p>
          Enthusiastic and self-driven software developer with a strong interest in full-stack web development,
          database design and systems administration. Eager to apply practical programming knowledge and build
          scalable, user-friendly applications. Quick learner with a passion for clean code, problem-solving and modern tools.
        </p>
      </section>

      {/* Skills */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Skills</h2>
        <ul className="list-disc list-inside space-y-1">
          <li><span className="font-medium">Languages & Frameworks:</span> HTML, CSS, JavaScript, C#, PHP, Flutter</li>
          <li><span className="font-medium">Databases:</span> MySQL (with MySQL Workbench)</li>
          <li><span className="font-medium">Cloud Platforms:</span> AWS, Azure</li>
          <li><span className="font-medium">Tools & Technologies:</span> Git, GitHub, VS Code, React, Tailwind CSS, Figma</li>
        </ul>
      </section>

      {/* Projects */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Projects</h2>
        <div className="space-y-6">
          <div>
            <h3 className="text-xl font-bold">Personal Portfolio Website</h3>
            <p>
              Designed and built a responsive personal portfolio using React, Vite, and Tailwind CSS.
              Features routing, reusable components, and clean UI design.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-bold">Scriibi Mobile Development App</h3>
            <p>
              Collaborating on the development of a cross-platform educational app using Flutter. Integrated Azure services 
              for backend support, including Azure Blob Storage and Azure SQL Database. Focused on creating a responsive UI, 
              managing state and connecting to APIs to support content delivery and user data management.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-bold">Upbank Web Application</h3>
            <p>
              Built a browser-based banking interface using the Upbank API to provide desktop accessibility, as Upbank only 
              offers a mobile application. Focused on REST API integration, user authentication flow and intuitive transaction 
              viewing to enhance user experience beyond mobile platforms.
            </p>
          </div>
        </div>
      </section>


      {/* Education */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Education</h2>

        <div className="mb-6">
          <p className="font-medium">Swinburne University of Technology</p>
          <p>Bachelor of Computer Science, Major in Software Development</p>
          <p className="text-sm text-gray-400">2024 – Present</p>
        </div>

        <div className="mb-6">
          <p className="font-medium">Swinburne University of Technology</p>
          <p>ICT50220 Diploma of Information Technology (Advanced Programming)</p>
          <p className="text-sm text-gray-400">2023 – 2024</p>
        </div>

        <div>
          <p className="font-medium">Geelong High School</p>
          <p>Victorian Certificate of Education (VCE)</p>
          <p className="text-sm text-gray-400">Completed November 2019</p>
        </div>
      </section>


      {/* Contact */}
      <section>
        <h2 className="text-2xl font-semibold mb-4">Contact</h2>
        <p>Email: (will provide in future)</p>
        <p>GitHub: <a href="https://github.com/DardanJ" className="text-sky-400 hover:underline">https://github.com/DardanJ</a></p>
        <p>LinkedIn: <a href="https://www.linkedin.com/in/dardan-jerliu/" className="text-sky-400 hover:underline">https://www.linkedin.com/in/dardan-jerliu/</a></p>
      </section>
      </main>
    );
  }
  