export default function Resume() {
  return (
    <main className="max-w-screen-lg mx-auto px-4 sm:px-6 md:px-12 lg:px-20 py-10 md:my-6 lg:my-6 md:border lg:border border-gray-700 bg-[#121213]">
      <h1 className="py-10 font-bold text-4xl sm:text-4xl md:text-5xl lg:text-6xl">
        Dardan Jerliu{" "}
      </h1>
      <p className="text-sky-400 text-lg mb-8">
        <a href="https://www.dardanj.com/" className="hover:underline">
          www.dardanj.com
        </a>
      </p>

      {/* Skills */}
      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-2">Skills</h2>
        <ul className="list-disc list-inside space-y-1">
          <li>
            <span className="font-medium">Languages & Frameworks:</span> HTML,
            CSS, JavaScript, C#, PHP
          </li>
          <li>
            <span className="font-medium">Databases:</span> MySQL, MariaDB
          </li>
          <li>
            <span className="font-medium">Cloud Platforms:</span> AWS, Azure
          </li>
          <li>
            <span className="font-medium">Tools & Technologies:</span> Git,
            GitHub, VS Code, React, React Native, Tailwind CSS, Figma
          </li>
        </ul>
      </section>

      {/* Projects */}
      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-2">Projects</h2>
        <div className="space-y-6">
          <div>
            <h3 className="text-xl font-bold">Personal Portfolio Website</h3>
            <p>
              Designed and built a responsive personal portfolio using React,
              Vite, and Tailwind CSS. Features routing, reusable components, and
              clean UI design.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-bold">
              Scriibi Mobile Development App
            </h3>
            <p>
              Collaborating on the development of a cross-platform educational
              app using Flutter. Integrated Azure services for backend support,
              including Azure Blob Storage and Azure SQL Database. Focused on
              creating a responsive UI, managing state and connecting to APIs to
              support content delivery and user data management.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-bold">Upbank Web Application</h3>
            <p>
              Built a browser-based banking interface using the Upbank API to
              provide desktop accessibility, as Upbank only offers a mobile
              application. Focused on REST API integration, user authentication
              flow and intuitive transaction viewing to enhance user experience
              beyond mobile platforms.
            </p>
          </div>
        </div>
      </section>

      {/* Work Experience */}
      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-2">Work Experience</h2>
        <div className="mb-6">
          <p className="font-medium">McDonald's</p>
          <p>Customer Service / Crew Member</p>
          <p className="text-sm text-gray-400">2017 – 2022</p>
        </div>
        <div>
          <p className="font-medium">Cotton On</p>
          <p>Retail Assistant</p>
          <p className="text-sm text-gray-400">2022 – 2023</p>
        </div>
      </section>

      {/* Education */}
      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-2">Education</h2>

        <div className="mb-6">
          <p className="font-medium">Swinburne University of Technology</p>
          <p>Bachelor of Computer Science, Major in Software Development</p>
          <p className="text-sm text-gray-400">2024 – Present</p>
        </div>

        <div className="mb-6">
          <p className="font-medium">Swinburne University of Technology</p>
          <p>
            ICT50220 Diploma of Information Technology (Advanced Programming)
          </p>
          <p className="text-sm text-gray-400">2023 – 2024</p>
        </div>

        <div>
          <p className="font-medium">Geelong High School</p>
          <p>Victorian Certificate of Education (VCE)</p>
          <p className="text-sm text-gray-400">Completed November 2019</p>
        </div>
      </section>

      {/* Volunteering */}
      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-2">Volunteering</h2>
        <div>
          <p className="font-medium">The Salvation Army</p>
          <p>Volunteer – Community Support</p>
          <p className="text-sm text-gray-400">May 2025 – Present</p>
        </div>
      </section>

      {/* Contact */}
      <section>
        <h2 className="text-2xl font-semibold mb-2">Contact</h2>
        <p>Phone: (will provide in future)</p>
        <p>Email: (will provide in future)</p>
        <p>
          GitHub:{" "}
          <a
            href="https://github.com/DardanJ"
            className="text-sky-400 hover:underline"
          >
            https://github.com/DardanJ
          </a>
        </p>
        <p>
          LinkedIn:{" "}
          <a
            href="https://www.linkedin.com/in/dardan-jerliu/"
            className="text-sky-400 hover:underline"
          >
            https://www.linkedin.com/in/dardan-jerliu/
          </a>
        </p>
      </section>
    </main>
  );
}
