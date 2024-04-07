import { React, useEffect, useState } from "react";
import Background from "../components/Background";
const Skills = () => {
  return (
    <section className="w-full h-screen relative">
      <div className="absolute top-24 left-0 right-70 z-10 flex items-center justify-center ">
      <table className="w-full border-collapse blue-gradient_text" style={{ border: "none" }}>
  <thead style={{ visibility: "hidden" }}>
    <tr>
      <th className="py-2 px-4 bg-blue-500 font-semibold">Language</th>
      <th className="py-2 px-4 bg-blue-500 font-semibold">Framework and Libraries</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td className="py-2 px-4 blue-gradient_text" style={{ backgroundColor: "rgba(28, 41, 56, 0)" }}>
        <ul className="list-disc list-inside">
          <li>C#</li>
          <li>Dart</li>
          <li>C++</li>
          <li>Javascript</li>
          <li>SQL</li>
        </ul>
      </td>
      <td className="py-2 px-4 blue-gradient_text" style={{ backgroundColor: "rgba(28, 41, 56, 0)" }}>
        <ul className="list-disc list-inside">
          <li>ASP.NET MVC</li>
          <li>ASP.NET WEB API</li>
          <li>Entity Framework</li>
          <li>React</li>
          <li>NUnit/XUnit</li>
          <li>JSON.NET</li>
        </ul>
      </td>
    </tr>
  </tbody>
</table>


      </div>

      <Background />
    </section>
  );
};
export default Skills;
