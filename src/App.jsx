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
        title: "Khufu Ankh",
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
          contributors: ["Geert Reinders Muñoz,", "Andreas Mananas,", "Ludwika Buczynska,", "Laila Hany"],
          points: [
            "Parametric modelling used to control complex curved geometry and enable iterative design development",
            "Integration of environmental analysis to inform form, shading strategy, and spatial conditions",
            "Structural verification through Karamba and hand calculations to support feasibility of the glass system",
          ],
          gallery: [
            { title: "Final Architectural Image", caption: "The final pavilion, conceived as a continuous glass enclosure and roof system, designed to frame and protect the Khufu ship within a unified architectural gesture.", image: "/images/glass/glass_00.png" },
            { title: "Concept Design", caption: "The project is driven by a narrative journey from the tomb to the afterlife, translating the symbolism of darkness to light into spatial experience. Glass is central to this concept, shaping both the architectural expression and structural behaviour.", image: "/images/glass/glass_01.png" },
            { title: "Load Bearing Glass Strategy", caption: "The project explores glass as a load-bearing system, where structural performance and architectural intent are developed in parallel to support the conceptual vision.", image: "/images/glass/glass_02.png" },
            { title: "Parametric Design Logic ", caption: "The initial concept is translated into a parametric system using Rhino and Grasshopper, enabling control over geometry, proportions, and key design parameters while establishing a framework for analysis and iterative refinement.", image: "/images/glass/glass_03-3.png" },
            { title: "Solar Analysis (Ladybug)", caption: "Solar radiation analysis informs the design of the envelope, guiding decisions on geometry, shading, and material treatment to reduce heat gain while ensuring appropriate conditions for the preservation of the artifact.", image: "/images/glass/glass_04.jpg" },
            { title: "Structural Analysis (Karamba3D)", caption: "The structural behaviour of the glass system is evaluated through parametric analysis using Karamba3D, supported by simplified analytical checks to validate load paths and overall performance.", image: "/images/glass/glass_05.png" },
            { title: "Detailing", caption: "Key construction details illustrate the integration of glass panels, structural elements, and connections, translating the conceptual and analytical work into a feasible assembly strategy.", image: "/images/glass/glass_06.png" },
            { title: "Final View ", caption: "The project in its final form, where concept, structure, and environmental performance converge into a cohesive architectural proposal.", image: "/images/glass/glass_07.png" }
          ],
        },
      },
      {
        title: "BrickNest",
        image: "/images/informatics/brick_00.png",
        subtitle: "A parametric bird-hide driven by environmental data and voxel-based design with robotic assembly and discrete elements.",
        description:
          "A computational design project exploring how environmental data, behaviour, and fabrication logic can be integrated into a unified parametric workflow.",
        summary:
          "A voxel-based system linking environmental inputs, spatial logic, and robotic assembly.",
        tools: "Rhino, Grasshopper, Robots plugin",
        details: {
          role: "Collaborative project with shared responsibilities. My main contribution focused on developing the parametric system and extending it into fabrication, including Grasshopper setup for voxel geometry and robotic assembly workflows.",
          overview:
            "BrickNest is a computational design project developed within the Technological Design Informatics course at TU Delft. It investigates how environmental behaviour and computational logic can inform a small-scale architectural intervention. Bird flight paths are used as generative inputs, translated into control curves that drive a voxel-based geometry. A grid is progressively modified through subtraction operations, creating openings aligned with both bird trajectories and human viewing opportunities. Solar radiation analysis is integrated to optimise environmental performance, while the structure is developed as a modular timber system with precise connections, enabling robotic fabrication and adaptable assembly.",
          contributors: ["Arian Babaei,", "Andreas Mananas,", "Cansu Ersoy"],
          points: [
            "Parametric control of geometry using environmental data (flight paths, solar radiation)",
            "Voxel-based design enabling iterative subtraction and spatial articulation",
            "Robotic assembly workflow bridging design and fabrication",
          ],
          gallery: [
            { title: "Final Architectural Image", caption: "The final bird-hide structure, composed of modular timber elements, integrating environmental data, spatial logic, and fabrication constraints into a unified design.", image: "/images/informatics/brick_00.png" },
            { title: "Concept Design", caption: "The design is driven by environmental data, using bird flight paths as generative inputs. Movement between points is translated into control curves, forming the basis for a geometry that responds to natural behaviour rather than imposed form.", image: "/images/informatics/brick_01.png" },
            { title: "Parametric Design Logic", caption: "Control curves inform a voxel-based system that is further refined through solar radiation analysis. This process generates a spatial configuration that balances environmental performance with functional openings for both birds and observers.", image: "/images/informatics/brick_002.png" },
            { title: "Discrete Elements", caption: "Development of a modular timber unit designed for repeatability and precision. The element enables a discrete assembly logic, supporting both geometric flexibility and compatibility with robotic fabrication.", image: "/images/informatics/brick_003.png" },
            { title: "Timber Element & Assembly", caption: "Assembly strategy of the modular timber elements, combining robotic prefabrication with on-site construction logistics.", image: "/images/informatics/brick_004.png" },
            { title: "Physical Model", caption: "Final physical model and realized assembly, demonstrating the translation of the computational design into a constructed outcome.", image: "/images/informatics/brick_05.png" }
          ]
        },
      },
      {
        title: "CAThWALK",
        image: "/images/mega/mega_00-1.png",
        subtitle: "A high-rise structural analysis within a multidisciplinary team",
        description:
          "A multidisciplinary high-rise intervention in Utrecht combining new towers and a bridging structure within an existing urban complex.",
        summary:
          "Structural and parametric design focused on developing and validating integrated load-bearing systems.",
        tools: "Rhino, Grasshopper, Karamba3D, Revit, Speckle",
        details: {
          role: "Part of the structural design team within a multidisciplinary group. My role focused on developing and analysing structural systems for towers and bridging elements, translating architectural intent into feasible strategies, building parametric models, and validating performance through Karamba3D while coordinating with architectural and environmental teams.",
          overview:
            "CAThWALK is a multidisciplinary project developed within the MEGA studio at TU Delft, addressing the transformation of an existing building complex in Utrecht into a mixed-use high-rise development. The proposal integrates vertical extensions, bridging volumes, and programmatic diversification within a dense urban context. A key challenge lies in coordinating complex geometries, long-span connections, and the interaction between new and existing structures. The structural system combines a diagrid strategy for the main tower with a large-scale bridge resolving long-span connections. Parametric modelling was used as a core design tool, enabling continuous interaction between geometry, structural logic, and analysis, allowing iterative refinement and validation throughout the design process.",
          contributors: ["Thijs Kroft – Architectural Designer,", "Xiaochen Ding – Computational Designer,", "Andrea Mata Celis – Computational Designer,", "Andreas Mananas – Structural Designer,","Annebel van der Meulen – Façade Designer,","Bram van den Berg – Climate Designer,","Evanthia Soumelidou – Project Manager"  ],
          points: [
            "Parametric modelling used to control complex geometry and enable iterative structural design",
            "Development of structural systems for high-rise and long-span bridge conditions",
            "Integration within a multidisciplinary workflow (architecture, climate, computational design)",
            "Structural validation using Karamba3D combined with engineering reasoning",
          ],
          gallery: [
            { title: "Final Project Visualization", caption: "The final proposal integrates three primary structures—a high-rise tower, a bridging volume, and an extension of the existing building—forming a unified mixed-use system within the urban context of Utrecht.", image: "/images/mega/mega_00-1.png" },
            { title: "Concept Design", caption: "The architectural concept focuses on transforming an existing building block into a vertically extended and interconnected system, introducing new programmatic layers while improving spatial quality, accessibility, and urban integration.", image: "/images/mega/mega_01.png" },
            { title: "Structural Concept", caption: "The structural concept translates the architectural vision into a feasible system, defining the primary load-bearing strategies for each intervention while maintaining coherence between form, performance, and constructability.", image: "/images/mega/mega_02.png" },
            { title: "Load-Bearing Strategy", caption: "Overall structural logic showing how the different systems—the tower, bridge, and existing structure—interact, distributing loads efficiently and transferring forces through a coordinated load path to the foundations.", image: "/images/mega/mega_03.png" },
            { title: "Structural Systems Breakdown", caption: "Detailed view of the structural systems in use, including the diagrid tower, steel truss bridge, and timber-based elements, illustrating how each system responds to specific structural and spatial requirements.", image: "/images/mega/mega_04.png" },
            { title: "Load Case Analysis – Timber Structure (Karamba3D)", caption: "Parametric analysis of the timber structural system using Karamba3D, evaluating its performance under different load cases and informing design adjustments to ensure structural stability and efficiency.", image: "/images/mega/mega_05.png" },
            { title: "Load Case Analysis – Steel Systems", caption: "Structural analysis of the steel tower and bridge truss, focusing on load distribution, deformation behavior, and the response of long-span elements under various loading conditions.", image: "/images/mega/mega_06.png" },
            { title: "Diagrid System Analysis I", caption: "Initial evaluation of the diagrid structural system, exploring its ability to efficiently distribute vertical and lateral loads while contributing to the architectural identity of the tower.", image: "/images/mega/mega_07.png" },
            { title: "Diagrid System Analysis II", caption: "Refined analysis of the diagrid system, assessing member forces, deformation patterns, and optimization of geometry to improve structural performance and material efficiency.", image: "/images/mega/mega_08.png" },
            { title: "Diagrid Structure", caption: "Final development of the diagrid system, integrating structural performance with architectural expression, and establishing a coherent load-bearing framework for the tower.", image: "/images/mega/mega_09.png" }
          ]
        },
      },
      {
        title: "Parametric Room Documentation System",
        image: "/images/study/study_00.png",
        subtitle: "Automated spatial generation and architectural documentation in Grasshopper",
        description:
          "A fully automated Grasshopper workflow developed as a personal project exercise. The script generates parametric room configurations across multiple iterations, produces annotated 3D geometry, and outputs unrolled wall layout drawings — all baked into structured Rhino layers in a single pass.",
        summary:
          "One script, two representations: 3D room geometry and flat wall documentation generated simultaneously from a shared parametric data tree.",
        tools: "Grasshopper, Rhino, Elefront, Parametric Design, Data Tree Management",
        details: {
          role: "Script development, data tree architecture, annotation logic, and layer-structured output",
          overview:
            "Developed as a personal project exercise, this script was made to stretch script efficiency, data tree fluency, and extensibility. The solution uses a three-level data tree {i;j;k} — indexing iteration, room, and wall orientation — maintained consistently across 3D geometry generation, unrolled layout drawings, dimension annotations, and Elefront-driven Rhino layer baking. A dispatch logic block distinguishes inner from outer walls to place windows only where structurally appropriate. All outputs are generated in a single automated pass from a unified set of parametric controls, with no manual intervention required between stages.",
          contributors: ["Andreas Mananas"],
          points: [
            "Three-level data tree {i;j;k} structure spanning geometry, layout, and annotations",
            "Automated window placement via inner/outer wall dispatch logic",
            "Simultaneous output of 3D models and unrolled wall documentation",
            "Elefront-powered baking into named Rhino layers with annotation styles",
            "Fully parametric: any input change cascades through all downstream outputs automatically",
          ],
          gallery: [
            {
              title: "Output overview",
              caption: "3D room iterations and unrolled wall layouts generated simultaneously in a single automated pass.",
              image: "/images/study/study_00.png", // → 00.png
            },
            {
              title: "Data tree logic",
              caption: "A three-level tree {i;j;k} indexes iteration, room, and wall orientation consistently across every stage — geometry, layout, and annotations share the same structure.",
              image: "/images/study/study_01.png", // → 09.png
            },
            {
              title: "Pipeline structure",
              caption: "The script is organized into discrete, color-coded clusters — Base, Data Structure, 3D Geometry, Layout, Annotations, Baking — each with documented inputs and outputs.",
              image: "/images/study/study_02.png", // → 10.png
            },
            {
              title: "Individual wall sheets",
              caption: "Each wall panel carries its full metadata: iteration index, room ID, wall ID, and cardinal orientation.",
              image: "/images/study/study_03.png", // → 01.png
            },
            {
              title: "Pipeline diagram",
              caption: "The full generation pipeline: parametric inputs flow through base geometry, data structuring, 3D generation, layout unrolling, annotation, and layer baking.",
              image: "/images/study/study_04.png", // → screenshot of the SVG diagram we generated
            },
            {
              title: "Data tree logic",
              caption: "A three-level tree {i;j;k} indexes iteration, room, and wall orientation consistently across every stage — geometry, layout, and annotations share the same structure.",
              image: "/images/study/study_05.png", // → 04.png
            },
          ],
        },
      },
      {
        title: "RoboFlow",
        image: "/images/core/core_00.png",
        subtitle: "Synchronized extrusion system for robotic 3D printing",
        description:
          "RoboFlow is a computational workflow developed to address a fundamental limitation in robotic 3D printing: the mismatch between robotic motion and material extrusion.",
        summary:
          "The project introduces a synchronization strategy that dynamically links robot speed with extrusion rate, ensuring a constant material flow during fabrication.",
        tools: "Rhino, Grasshopper, Python, URScript, Arduino",
        details: {
          role: "This project was developed as a collaborative effort, with responsibilities shared across the team and a strong emphasis on hands-on experimentation and iterative development. I contributed to the development of the computational and control workflow connecting robotic motion with material extrusion, working closely with the team across all stages of the process. This included: Structuring the data flow between design, the robot controller, and external hardware, Co-developing the logic for speed-based extrusion control, Processing and analysing robot motion data (TCP positions and speeds), Implementing the synchronization strategy between robot velocity and extrusion rate, Participating in the physical setup, testing, and continuous refinement of both the algorithm and the hardware system. The project involved repeated cycles of prototyping and testing, requiring direct engagement with the robotic setup, material behaviour, and hardware integration. A key aspect of the workflow was bridging simulation and real-world execution, ensuring that the computational model aligned with the robot’s actual behaviour during fabrication.",
          overview:
            "Robotic 3D printing introduces challenges that are not present in conventional additive manufacturing processes. One of the most critical issues is the variation of robotic speed along a toolpath, particularly at corners and transitions between movements. These variations lead to inconsistent material deposition, resulting in defects such as over-extrusion or gaps in the printed geometry. To address this, the project develops a workflow that captures the robot’s actual motion behaviour and uses it to control the extrusion system. Instead of relying on predefined speeds, the system collects real-time data along the robot path, identifying regions of acceleration, deceleration, and constant velocity. Based on this data, the toolpath is refined through the introduction of additional control points, and motion smoothing techniques (zones) are applied to reduce abrupt speed changes. The refined motion data is then used to compute corresponding extrusion parameters, ensuring that the material flow adapts to the robot’s movement. At the core of this process is the relationship between robotic speed and extrusion rate. By expressing both material deposition and motor-driven extrusion through a shared flowrate equation, the system derives a control parameter that allows real-time synchronization between the two. The workflow extends beyond simulation, incorporating a physical setup where the robot controller communicates with an Arduino-based system that translates control signals into motor actuation. This establishes a direct link between digital computation and material behaviour.",
          contributors: ["Emily Lenarduzzi,", "Ludwika Buczynska,", "Andreas Mananas"],
          points: [
            "Development of a synchronized control system linking robot speed and extrusion rate",
            "Use of real robot data (TCP positions and speeds) instead of purely simulated values",
            "Implementation of motion smoothing strategies (zones) to improve fabrication quality",
            "Integration of computational design, robotic control, and hardware communication",
            "Validation through physical prototyping and comparison between unsynchronized and synchronized printing",
          ],
          gallery: [
            { title: "Problem Statement", caption: "Robotic 3D printing introduces variations in toolpath speed, especially at corners and transitions. Without synchronization, the robot decelerates at each point, causing excessive material deposition and inconsistent print quality.", image: "/images/core/core_00.png" },
            { title: "Workflow & Kinematic Model", caption: "The workflow translates geometric input into robotic instructions through a kinematic model, establishing the foundation for data exchange between the main program and the robot controller.", image: "/images/core/core_01.png" },
            { title: "Speed Collection", caption: "Actual robot speeds are collected along the toolpath at defined intervals, allowing the identification of constant velocity regions and acceleration or deceleration segments.", image: "/images/core/core_02.png" },
            { title: "Joint Collection & Refined Motion", caption: "Additional TCP points are introduced at locations of speed variation, and corresponding joint positions are recalculated to refine the robot’s motion and improve control resolution.", image: "/images/core/core_03.png" },
            { title: "Synchronization via Voltage Control", caption: "Computed extrusion parameters are translated into voltage signals within the URScript, enabling real-time communication between the robot controller and the extrusion system.", image: "/images/core/core_04.png" },
            { title: "Flowrate Formula I", caption: "Material deposition is expressed as a function of print geometry and robotic speed, defining the relationship between toolpath motion and volumetric output.", image: "/images/core/core_05.png" },
            { title: "Flowrate Formula II", caption: "By equating deposition flowrate with the auger-driven extrusion system, a control relationship is established, allowing step delay to be adjusted dynamically to maintain constant flow.", image: "/images/core/core_06.png" },
            { title: "Zones & Algorithm Variables", caption: "Zones are introduced along the toolpath to smooth robot motion, reducing abrupt stops and enabling continuous movement, while key parameters such as interval and tolerance influence system behaviour.", image: "/images/core/core_07.png" },
            { title: "Zone Radius & Tolerance", caption: "The selection of zone radius and tolerance directly affects print quality, balancing motion smoothness with geometric accuracy and controlling the density of control points along the path.", image: "/images/core/core_08.png" },
            { title: "Algorithm Adaptation for Complex Geometry", caption: "The workflow is extended to handle both linear and curved geometries, requiring adjustments in toolpath segmentation and synchronization logic to maintain consistent extrusion.", image: "/images/core/core_09.png" },
            { title: "Physical Setup", caption: "The system connects the robot controller to an Arduino-based setup, translating analogue signals into motor commands that drive the extrusion mechanism.", image: "/images/core/core_10.png" },
            { title: "Testing & Print Quality Improvement", caption: "Comparative testing between unsynchronized and synchronized printing demonstrates a significant improvement in material consistency, reducing over-extrusion and ensuring uniform print width.", image: "/images/core/core_11.png" }
          ],
        },
      },
      {
        title: "Topology Optimization for Process-Induced Anisotropy in Glass Structures",
        image: "/images/thesis/thesis_00.png",
        subtitle:
          "Leveraging Topology Optimization Algorithms to Address Anisotropic Behaviour Introduced by Additive Manufacturing Methods in Glass Structures",
        description:
          "A research-driven thesis at TU Delft investigating how topology optimization can be adapted to account for process-induced anisotropic behaviour in 3D-printed glass.",
        summary:
          "Introduces a modified optimization workflow where material directionality and fabrication constraints directly influence structural form generation.",
        tools: "MATLAB, Python, Rhino, Grasshopper, ANSYS, LaTeX",
        details: {
          role: "Individual research project involving computational development, scripting, numerical modelling, optimisation logic, structural analysis, and design translation.",
          overview:
            "The thesis investigates how process-induced anisotropy in 3D-printed glass can be embedded directly into topology optimization workflows. The work focuses on modifying the FEA component of a SIMP-based algorithm to incorporate transverse isotropic material behaviour, while integrating fabrication-aware constraints such as print direction and overhang limitations. Through comparative studies between isotropic and anisotropic formulations, the project demonstrates how structural optimisation can move beyond generic assumptions toward a process-specific computational framework for glass additive manufacturing.\n\nThis research addresses a critical gap in the structural design of 3D-printed glass, where conventional topology optimization methods assume isotropic material properties. Such assumptions fail to capture the layer-dependent behaviour introduced by additive manufacturing, including incomplete interlayer fusion and geometry-induced corrugation effects. \n\nThe core contribution of the thesis lies in modifying the Finite Element Analysis (FEA) component of the Solid Isotropic Material with Penalization (SIMP) algorithm to integrate transverse isotropy directly into the optimization loop. The methodology is supported by flexural testing to identify engineered material properties and a comparative evaluation between isotropic and anisotropic optimization approaches.\n\nThe results demonstrate improved structural performance through reduced compliance and more realistic principal stress distributions. The optimized geometries align more closely with the physical behaviour and constraints of 3D-printed glass, effectively bridging computational design with manufacturable, structurally efficient applications.",
          contributors: ["Andreas Mananas"],
          points: [
            "Development of a custom 3D topology optimization workflow in MATLAB",
            "Modification of the FEA formulation to incorporate transverse isotropic material behaviour",
            "Comparative analysis between isotropic and anisotropic optimisation strategies",
            "Evaluation of results through compliance metrics and principal stress distribution",
            "Translation of structural and fabrication research into a coherent computational design framework",
          ],
          gallery: [
            {
              title: "Render of topology optimized bridge in the museum selected for a case study",
              caption:
                "Visualization of the optimized structural element applied within an architectural context, demonstrating how algorithm-generated geometries can inform realistic design scenarios in glass construction.",
              image: "/images/thesis/thesis_00.png",
            },
            {
              title: "Problem statement diagram",
              caption:
                "Diagram illustrating the limitation of conventional topology optimization approaches, highlighting the mismatch between isotropic assumptions and the anisotropic behaviour of 3D-printed glass.",
              image: "/images/thesis/thesis_01.png",
            },

            // LOOP 1
            {
              title: "SIMP interpolation & nodal displacement calculation",
              caption:
                "Definition of the finite element system, where element densities are mapped to stiffness through SIMP interpolation and nodal displacements are computed by solving the global equilibrium equation.",
              image: "/images/thesis/thesis_02.png",
            },

            // LOOP 2
            {
              title: "Compliance and sensitivity computation",
              caption:
                "Evaluation of structural performance through element-wise compliance and sensitivity analysis, identifying how changes in density affect the overall objective function.",
              image: "/images/thesis/thesis_03.png",
            },

            // LOOP 3
            {
              title: "Filtering and optimality criteria update",
              caption:
                "Application of sensitivity filtering to ensure numerical stability, followed by density updates using the Optimality Criteria method to guide the optimization towards convergence.",
              image: "/images/thesis/thesis_04.png",
            },

            {
              title: "Solution logic",
              caption:
                "Diagram explaining the integration of transverse isotropy into the FEA formulation, including the modification of the elasticity matrix and its role within the SIMP loop.",
              image: "/images/thesis/thesis_05.png",
            },
            {
              title: "Interesting findings regarding difference of algorithms",
              caption:
                "Comparison between isotropic and anisotropic optimization results, highlighting differences in compliance, structural layout, and stress distribution patterns.",
              image: "/images/thesis/thesis_06.png",
            },
            {
              title: "Final 3D printed beam render",
              caption:
                "Rendered visualization of the final optimized beam, representing a manufacturable component that aligns computational design with the constraints and behaviour of 3D-printed glass.",
              image: "/images/thesis/thesis_07.png",
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
              <div className="mt-6 flex flex-col gap-4 text-neutral-700">
                <div className="space-y-2">
                  <p>andreasmananas@gmail.com</p>
                  <p>www.linkedin.com/in/andreas-mananas</p>
                </div>

                <div className="flex justify-end">
                  <a
                    href="/images/cv/CV_Andreas_Mananas.pdf"
                    download
                    className="inline-flex items-center gap-2 rounded-2xl border border-neutral-300 px-4 py-2 text-sm text-neutral-700 shadow-sm transition duration-200 hover:-translate-y-0.5 hover:border-neutral-900 hover:text-neutral-900 hover:shadow-md active:scale-95"
                  >
                    <span>Download CV</span>
                    <span className="text-xs opacity-60">PDF</span>
                  </a>
                </div>
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

                  <div className="mt-6">
                    <p className="text-xs uppercase tracking-[0.2em] text-neutral-500">Contributors</p>
                    <div className="mt-2 flex flex-wrap gap-x-4 gap-y-1 text-sm text-neutral-600">
                      {selectedProject.details.contributors.map((contributor) => (
                        <span key={contributor}>{contributor}</span>
                      ))}
                    </div>
                  </div>
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
                        const isHeroTop = index === 0;
                        const isHeroBottom = index === selectedProject.details.gallery.length - 1;
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
                                  className={isWide ? "aspect-[16/9] w-full object-cover bg-neutral-50" : "aspect-[4/3] w-full object-contain bg-neutral-50"}
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
