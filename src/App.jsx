import { useEffect, useMemo, useState } from "react";

export default function PortfolioExample() {
  const [selectedProject, setSelectedProject] = useState(null);
  const [selectedImage, setSelectedImage] = useState(null);

  useEffect(() => {
    if (selectedProject) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [selectedProject]);

  const projects = useMemo(
    () => [
      {
        title: "Khufu Ankh!!!",
        subtitle: "Parametric glass pavilion for structural and environmental integration",
        description:
          "A concept-driven museum pavilion for the Khufu ship in Giza, where geometry, environmental constraints, and structural behaviour are resolved within a single parametric system.",
        summary:
          "The project translates the symbolic ankh into a controllable geometric framework, enabling coordination between form, performance, and fabrication logic.",
        tools: "Rhino, Grasshopper, Karamba3D, Ladybug Tools",
        image: "/images/glass/glass_00.png",
        details: {
          role: "Development and structuring of the parametric model in Grasshopper, with focus on geometric control and workflow organisation. Contribution to environmental analysis (Ladybug), structural evaluation (Karamba), and supporting hand calculations to validate structural behaviour.",
          overview:
            "The project is based on the symbolic meaning of the ankh, representing the continuity between life and afterlife in ancient Egyptian culture. The design translates this concept into a spatial sequence, guiding visitors through a gradual transition from enclosed, darker conditions to a more open and light-filled environment. Glass plays a central role in this transition, enabling controlled exposure to light while maintaining visual continuity with the surrounding archaeological context. From a technical perspective, the geometry was developed as a parametric system, allowing continuous refinement of curvature, panelisation, and structural behaviour. Environmental constraints and solar exposure informed the development of overhangs and spatial organisation, while structural analysis was used to validate the performance of the glass system and supporting elements.",
          points: [
            "Parametric modelling used to control complex curved geometry and enable iterative design development",
            "Integration of environmental analysis to inform form, shading strategy, and spatial conditions",
            "Structural verification through Karamba and hand calculations to support feasibility of the glass system",
          ],
          gallery: [
            {
              title: "Final architectural image",
              caption: "The pavilion as a continuous glass-and-roof system enclosing the Khufu ship, expressing structure, enclosure, and light as one.",
              image: "/images/glass/glass_00.png",
            },
            {
              title: "Concept narrative",
              caption: "Visitors follow a boat-like journey from darkness to light. Glass enables the gradual reveal—both spatially and structurally—while framing the archaeological context.",
              image: "/images/glass/glass_01.png",
            },
            {
              title: "Load-bearing glass strategy",
              caption: "Alignment between concept and structure: curved glass panels and fins participate in load paths, using geometry to achieve stiffness and stability.",
              image: "/images/glass/glass_02.png",
            },
            {
              title: "Parametric setup",
              caption: "Freehand intent translated into a controllable system in Rhino/Grasshopper—parameters for curvature, panelisation, and supports, ready for analysis and iteration.",
              image: "/images/glass/glass_03-3.png",
            },
            {
              title: "Solar analysis (Ladybug)",
              caption: "Desert context drives shading logic: radiation studies inform overhangs and offsets to protect artifacts while maintaining daylight quality.",
              image: "/images/glass/glass_04.jpg",
            },
            {
              title: "Structural analysis (Karamba3D)",
              caption: "Parametric model used for rapid evaluation of forces and deformations, complemented by hand checks to validate the glass system behaviour.",
              image: "/images/glass/glass_05.png",
            },
            {
              title: "Detailing",
              caption: "Key junctions between panels, fins, and supports—where fabrication constraints, tolerances, and assembly logic are resolved.",
              image: "/images/glass/glass_06.png",
            },
            {
              title: "End view",
              caption: "Closing perspective summarising the spatial sequence and material expression.",
              image: "/images/glass/glass_07.png",
            },
          ],
        },
      },
      {
        title: "BrickNest",
        subtitle: "Robotic assembly and design system",
        description:
          "A project focused on a robotic assembly and design workflow, using a robotic arm as part of the link between geometric definition, sequencing, and fabrication logic.",
        summary:
          "A computational system connecting design intent with robotic execution.",
        tools: "Grasshopper, Robotics, Digital fabrication",
        details: {
          role: "Computational design, robotic workflow development, and system logic",
          overview:
            "This project will be expanded once the final material is added. It will likely focus on how geometry, assembly sequence, and robotic control were brought together into one workflow rather than treated as separate steps.",
          points: [
            "Robotic assembly as part of the design process",
            "System thinking across geometry, sequencing, and execution",
            "Design translated into a fabrication-aware workflow",
          ],
          gallery: [
            {
              title: "Hero image",
              caption: "Main project image placeholder.",
              image: null,
            },
            {
              title: "Material 2",
              caption: "Additional project material.",
              image: null,
            },
            {
              title: "Material 3",
              caption: "Additional project material.",
              image: null,
            },
            {
              title: "Material 4",
              caption: "Additional project material.",
              image: null,
            },
            {
              title: "Material 5",
              caption: "Additional project material.",
              image: null,
            },
          ],
        },
      },
      {
        title: "MEGA",
        subtitle: "High-rise structural analysis within a multidisciplinary team",
        description:
          "A team project for a tower proposal in the Netherlands, where my main role focused on structural calculations, combining digital analysis in Karamba with supporting hand calculations.",
        summary:
          "A structural contribution developed within a broader architectural and sustainability-driven design team.",
        tools: "Karamba3D, Grasshopper, Hand calculations, Structural analysis",
        details: {
          role: "Structural analysis, performance evaluation, and engineering support within a multidisciplinary team",
          overview:
            "This project will be expanded once the final material is added. It will likely focus on how structural reasoning supported the wider design process, and how analytical work was coordinated within a larger team involving architecture and sustainability.",
          points: [
            "Structural calculations using Karamba and hand checks",
            "Engineering input within a team of architects and sustainability specialists",
            "Performance-driven reasoning applied to a high-rise proposal",
          ],
          gallery: [
            {
              title: "Hero image",
              caption: "Main project image placeholder.",
              image: null,
            },
            {
              title: "Material 2",
              caption: "Additional project material.",
              image: null,
            },
            {
              title: "Material 3",
              caption: "Additional project material.",
              image: null,
            },
            {
              title: "Material 4",
              caption: "Additional project material.",
              image: null,
            },
            {
              title: "Material 5",
              caption: "Additional project material.",
              image: null,
            },
          ],
        },
      },
      {
        title: "Grasshopper Fabrication Study",
        subtitle: "Fabrication-oriented spatial configuration script",
        description:
          "A Grasshopper-based fabrication study for generating room configurations under defined constraints and preparing them for fabrication with the relevant attached data.",
        summary:
          "A compact workflow linking rule-based spatial generation with fabrication-ready information.",
        tools: "Grasshopper, Parametric design, Fabrication logic",
        details: {
          role: "Script development, rule definition, and fabrication-oriented data structuring",
          overview:
            "This project will be expanded once the final material is added. It will likely focus on how a constrained generative system can produce spatial variations while also attaching the indices and information needed for downstream fabrication.",
          points: [
            "Constraint-based room generation",
            "Fabrication-ready output with attached identifiers and metadata",
            "A lightweight but clear computational workflow",
          ],
          gallery: [
            {
              title: "Hero image",
              caption: "Main project image placeholder.",
              image: null,
            },
            {
              title: "Material 2",
              caption: "Additional project material.",
              image: null,
            },
            {
              title: "Material 3",
              caption: "Additional project material.",
              image: null,
            },
            {
              title: "Material 4",
              caption: "Additional project material.",
              image: null,
            },
            {
              title: "Material 5",
              caption: "Additional project material.",
              image: null,
            },
          ],
        },
      },
      {
        title: "CORE",
        subtitle: "Robotic 3D printing and clay extrusion workflow",
        description:
          "A custom workflow for robotic clay extrusion, linking motion control and extrusion behavior to improve deposition consistency and printing performance.",
        summary:
          "A scripting-based fabrication workflow connecting robotic motion with material output.",
        tools: "Python, URScript, Robotics, Digital fabrication",
        details: {
          role: "Workflow design, scripting, robotic control, and fabrication testing",
          overview:
            "This project focuses on synchronising robotic motion with extrusion behaviour in order to improve print consistency. The work sits between scripting, fabrication control, and performance evaluation, with a strong emphasis on making robotic deposition more precise and reliable.",
          points: [
            "Robot motion and extrusion coordination",
            "Custom scripting for fabrication control",
            "Performance-driven digital fabrication workflow",
          ],
          gallery: [
            {
              title: "Hero image",
              caption: "Main project image placeholder.",
              image: null,
            },
            {
              title: "Material 2",
              caption: "Additional project material.",
              image: null,
            },
            {
              title: "Material 3",
              caption: "Additional project material.",
              image: null,
            },
            {
              title: "Material 4",
              caption: "Additional project material.",
              image: null,
            },
            {
              title: "Material 5",
              caption: "Additional project material.",
              image: null,
            },
          ],
        },
      },
      {
        title: "Thesis",
        subtitle: "Thesis: Topology Optimization for Anisotropy-Aware 3D Printed Glass Fabrication",
        description:
          "A research-driven thesis at TU Delft focused on adapting topology optimization for 3D-printed glass, linking finite element analysis, material anisotropy, and additive manufacturing constraints.",
        summary:
          "A computational framework combining structural optimisation with fabrication-aware logic for 3D-printed glass.",
        tools: "MATLAB, FEA, Topology optimization, Additive manufacturing",
        details: {
          role: "Research, scripting, numerical modelling, optimisation logic, and structural analysis",
          overview:
            "The thesis focused on developing and adapting a 3D topology optimization workflow for glass additive manufacturing. The work combined SIMP-based optimisation, finite element analysis, anisotropic material behaviour, and manufacturing-aware constraints in order to move from generic optimisation toward a process-specific computational framework.",
          points: [
            "Development of a custom 3D topology optimization workflow in MATLAB",
            "Integration of anisotropic material behaviour and manufacturing constraints into the optimisation logic",
            "Translation of structural and fabrication research into a clear computational design framework",
          ],
          gallery: [
            {
              title: "Hero image",
              caption: "Main project image placeholder.",
              image: null,
            },
            {
              title: "Material 2",
              caption: "Additional project material.",
              image: null,
            },
            {
              title: "Material 3",
              caption: "Additional project material.",
              image: null,
            },
            {
              title: "Material 4",
              caption: "Additional project material.",
              image: null,
            },
            {
              title: "Material 5",
              caption: "Additional project material.",
              image: null,
            },
          ],
        },
      },
    ],
    []
  );

  return (
    <>
      <style>{`
        .modal-scrollbar {
          scrollbar-width: thin;
          scrollbar-color: #d4d4d8 transparent;
        }
        .modal-scrollbar::-webkit-scrollbar {
          width: 10px;
        }
        .modal-scrollbar::-webkit-scrollbar-track {
          background: transparent;
          margin: 18px 0;
        }
        .modal-scrollbar::-webkit-scrollbar-thumb {
          background-color: #d4d4d8;
          border-radius: 9999px;
          border: 3px solid transparent;
          background-clip: content-box;
        }
        .modal-scrollbar::-webkit-scrollbar-thumb:hover {
          background-color: #a1a1aa;
        }
      `}</style>
      <main className="min-h-screen bg-white text-neutral-900">
      <section className="mx-auto w-full max-w-[1380px] px-6 md:px-8 lg:px-10 xl:px-12 py-16 md:py-20 xl:py-24">
        <div className="grid gap-12 lg:grid-cols-[1.08fr_0.92fr] lg:gap-14 xl:gap-16">
          <div>
            <p className="mb-4 text-sm uppercase tracking-[0.25em] text-neutral-500">
              Andreas Mananas
            </p>
            <h1 className="max-w-4xl text-4xl leading-[1.02] tracking-tight md:text-5xl xl:text-[3.5rem]">
              Computational design specialist with focus on structural design and optimization applied through digital workflows.
            </h1>
            <p className="mt-6 max-w-2xl text-base leading-7 text-neutral-600 md:text-lg">
              Architect Engineer (MArch) with an MSc in Building Technology from TU Delft.
              My work sits between architecture, engineering, optimisation, and
              fabrication. What defines me is analytical thinking and problem solving through digital workflows.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href="#projects"
                className="rounded-2xl border border-neutral-900 bg-neutral-900 px-5 py-3 text-sm text-white shadow-sm transition duration-200 hover:-translate-y-0.5 hover:shadow-md hover:bg-neutral-800 active:scale-95"
              >
                View projects
              </a>
              <a
                href="#contact"
                className="rounded-2xl border border-neutral-300 bg-white px-5 py-3 text-sm text-neutral-700 shadow-sm transition duration-200 hover:-translate-y-0.5 hover:border-neutral-900 hover:text-neutral-900 hover:shadow-md active:scale-95"
              >
                Contact
              </a>
            </div>
          </div>

          <div className="grid gap-4">
            <div className="rounded-3xl border border-neutral-200 bg-neutral-50 p-6 shadow-sm">
              <p className="text-sm text-neutral-500">Focus</p>
              <p className="mt-2 text-lg leading-7">
                Computational Design, Optimization, FEA, Digital Fabrication, and Robotic Workflows.
              </p>
            </div>
            <div className="rounded-3xl border border-neutral-200 p-6 shadow-sm">
              <p className="text-sm text-neutral-500">Background</p>
              <p className="mt-2 text-lg leading-7">
                Architecture Engineering + Building Technology, with projects spanning research, structural logic, scripting, and fabrication-aware design.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="projects" className="mx-auto w-full max-w-[1380px] px-6 md:px-8 lg:px-10 xl:px-12 pb-16 md:pb-20 xl:pb-24">
        <div className="mb-10">
          <p className="text-sm uppercase tracking-[0.25em] text-neutral-500">
            Selected Projects
          </p>
          <h2 className="mt-3 text-3xl tracking-tight md:text-4xl">Recent and relevant work</h2>
        </div>

        <div className="grid gap-6">
          {projects.map((project) => (
            <article
              key={project.title}
              onClick={() => setSelectedProject(project)}
              className="group grid gap-6 rounded-3xl border border-neutral-200 p-6 shadow-sm transition duration-200 hover:-translate-y-3 hover:shadow-lg cursor-pointer md:grid-cols-[0.9fr_1.1fr] md:p-8"
            >
              <div className="overflow-hidden rounded-2xl border border-neutral-200 bg-neutral-50">
                {project.image ? (
                  <img
                    src={project.image}
                    alt={project.title}
                    className="aspect-[4/3] w-full object-cover transition duration-300 group-hover:scale-110"
                  />
                ) : (
                  <div className="aspect-[4/3] w-full bg-[linear-gradient(135deg,#f5f5f5_0%,#e5e5e5_100%)] p-6 flex flex-col justify-between">
                    <div className="text-xs uppercase tracking-[0.25em] text-neutral-500">
                      {project.title}
                    </div>
                    <div>
                      <div className="h-px w-16 bg-neutral-300" />
                      <p className="mt-4 max-w-xs text-sm leading-6 text-neutral-600">
                        {project.summary}
                      </p>
                    </div>
                  </div>
                )}
              </div>

              <div>
                <p className="text-sm uppercase tracking-[0.2em] text-neutral-500">
                  {project.subtitle}
                </p>
                <h3 className="mt-2 text-2xl tracking-tight">{project.title}</h3>
                <p className="mt-4 text-base leading-7 text-neutral-600">
                  {project.description}
                </p>
                <p className="mt-4 text-base leading-7 text-neutral-600">
                  {project.summary}
                </p>
                <p className="mt-5 text-sm text-neutral-500">{project.tools}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="mx-auto w-full max-w-[1380px] px-6 md:px-8 lg:px-10 xl:px-12 pb-16 md:pb-20 xl:pb-24">
        <div className="grid gap-6 md:grid-cols-2">
          <div className="rounded-3xl border border-neutral-200 p-6 shadow-sm md:p-8">
            <p className="text-sm uppercase tracking-[0.2em] text-neutral-500">Experience</p>
            <h2 className="mt-3 text-2xl tracking-tight">What I bring</h2>
            <ul className="mt-6 space-y-3 text-neutral-600">
              <li>Computational design and parametric workflows</li>
              <li>Structural reasoning and performance-driven design</li>
              <li>Research translation into clear visual communication</li>
              <li>Scripting for design automation and fabrication workflows</li>
            </ul>
          </div>

          <div id="contact" className="rounded-3xl border border-neutral-200 p-6 shadow-sm md:p-8">
            <p className="text-sm uppercase tracking-[0.2em] text-neutral-500">Contact</p>
            <h2 className="mt-3 text-2xl tracking-tight">Let’s connect</h2>
            <p className="mt-4 max-w-xl text-base leading-7 text-neutral-600">
              Available for computational design, structural design technology, and digital workflow roles.
            </p>
            <div className="mt-6 space-y-2 text-neutral-700">
              <p>andreasmananas@gmail.com</p>
              <p>www.linkedin.com/in/andreas-mananas

              </p>
              <p>CV download</p>
            </div>
          </div>
        </div>
      </section>

      {selectedProject ? (
        <div
          className="fixed inset-0 z-50 bg-black/50 p-4 md:p-8"
          onClick={() => setSelectedProject(null)}
        >
          <div
            className="modal-scrollbar mx-auto h-full w-full max-w-[1180px] overflow-y-auto rounded-[2rem] bg-white shadow-2xl"
            style={{ scrollbarGutter: "stable both-edges" }}
            onClick={(e) => e.stopPropagation()}
          >
            <div className="sticky top-0 flex items-center justify-between rounded-t-[2rem] border-b border-neutral-200 bg-white/95 px-6 md:px-8 lg:px-12 xl:px-16 py-4 backdrop-blur">
              <div>
                <p className="text-sm uppercase tracking-[0.2em] text-neutral-500">
                  {selectedProject.subtitle}
                </p>
                <h3 className="mt-1 text-2xl tracking-tight">{selectedProject.title}</h3>
              </div>
              <button
                onClick={() => setSelectedProject(null)}
                className="rounded-2xl border border-neutral-300 bg-white px-4 py-2 text-sm text-neutral-700 shadow-sm transition duration-200 hover:-translate-y-0.5 hover:border-neutral-900 hover:text-neutral-900 hover:shadow-md active:scale-95"
              >
                Close
              </button>
            </div>

            <div className="space-y-8 p-6 md:p-8 lg:p-10">
              <div className="w-full rounded-[1.5rem] border border-neutral-200 bg-[linear-gradient(135deg,#f5f5f5_0%,#e5e5e5_100%)] p-8 md:p-12">
                <p className="text-sm uppercase tracking-[0.25em] text-neutral-500">Project overview</p>
                <h4 className="mt-4 text-3xl tracking-tight md:text-4xl">{selectedProject.title}</h4>
                <p className="mt-4 max-w-3xl text-base leading-7 text-neutral-600">
                  {selectedProject.summary}
                </p>
              </div>

              <div className="grid gap-8 md:grid-cols-[0.9fr_1.1fr]">
                <div className="rounded-[1.5rem] border border-neutral-200 bg-neutral-50 p-6">
                  <p className="text-sm uppercase tracking-[0.2em] text-neutral-500">Role</p>
                  <p className="mt-3 text-base leading-7 text-neutral-700">
                    {selectedProject.details.role}
                  </p>
                  <p className="mt-6 text-sm uppercase tracking-[0.2em] text-neutral-500">Tools</p>
                  <p className="mt-3 text-base leading-7 text-neutral-700">
                    {selectedProject.tools}
                  </p>
                </div>

                <div>
                  <p className="text-sm uppercase tracking-[0.2em] text-neutral-500">Overview</p>
                  <p className="mt-3 text-base leading-7 text-neutral-700">
                    {selectedProject.details.overview}
                  </p>

                  <div className="mt-6 space-y-3 text-sm leading-6 text-neutral-600">
                    {selectedProject.details.points.map((item) => (
                      <div key={item} className="flex gap-3">
                        <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-neutral-400" />
                        <p>{item}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {selectedProject.details.gallery.length ? (
                <div>
                  <p className="text-sm uppercase tracking-[0.2em] text-neutral-500">Selected material</p>
                  <div className={selectedProject.title === "Khufu Ankh" ? "mt-4 grid gap-6 md:grid-cols-2" : "mt-4 grid gap-6 md:grid-cols-2"}>
                    {selectedProject.details.gallery.map((item, index) => {
                      const isKhufu = selectedProject.title === "Khufu Ankh";
                      const isHeroTop = isKhufu && index === 0;
                      const isHeroBottom = isKhufu && index === selectedProject.details.gallery.length - 1;
                      const isWide = isHeroTop || isHeroBottom;

                      return (
                        <div
                          key={item.title}
                          className={isWide ? "space-y-3 md:col-span-2" : "space-y-3"}
                        >
                          {item.image ? (
                            <div
                              className="overflow-hidden rounded-[1.5rem] border border-neutral-200 cursor-zoom-in"
                              onClick={() => setSelectedImage(item.image)}
                            >
                              <img
                                src={item.image}
                                alt={item.title}
                                className={isWide ? "max-h-[70vh] w-full object-contain bg-neutral-50" : "aspect-[4/3] w-full object-contain bg-neutral-50"}
                              />
                            </div>
                          ) : (
                            <div className={isWide ? "w-full min-h-[320px] rounded-[1.5rem] border border-neutral-200 bg-[linear-gradient(135deg,#f5f5f5_0%,#e5e5e5_100%)] p-6 md:p-8 flex flex-col justify-between" : "aspect-[4/3] w-full rounded-[1.5rem] border border-neutral-200 bg-[linear-gradient(135deg,#f5f5f5_0%,#e5e5e5_100%)] p-6 flex flex-col justify-between"}>
                              <p className="text-xs uppercase tracking-[0.25em] text-neutral-500">
                                Material {index + 1}
                              </p>
                              <div>
                                <div className="h-px w-16 bg-neutral-300" />
                                <h4 className="mt-4 text-xl tracking-tight">{item.title}</h4>
                              </div>
                            </div>
                          )}
                          <div>
                            <h4 className="text-lg tracking-tight">{item.title}</h4>
                            <p className="mt-1 text-sm leading-6 text-neutral-600">
                              {item.caption}
                            </p>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              ) : (
                <div className="rounded-[1.5rem] border border-dashed border-neutral-200 p-6 text-neutral-500">
                  Project material will be added here.
                </div>
              )}
            </div>
          </div>
        </div>
      ) : null}

      {selectedImage && (
        <div
          className="fixed inset-0 z-[60] bg-black/80 flex items-center justify-center p-6"
          onClick={() => setSelectedImage(null)}
        >
          <img
            src={selectedImage}
            className="max-h-[90vh] max-w-[90vw] object-contain rounded-xl"
          />
        </div>
      )}
      </main>
    </>
  );
}
